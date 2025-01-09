using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Jardineria.Data;
using Jardineria.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;

namespace Jardineria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController(CesarContext context, UserManager<JardinUser> userManager, IConfiguration configuration) : ControllerBase
    {
        private readonly CesarContext _context = context;
        private readonly IConfiguration _configuration = configuration;
        private readonly UserManager<JardinUser> _userManager = userManager;

        // GET: api/JardinUsers
		[Authorize(Roles = "Admin")]
		[ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet("Users")]
        public async Task<IActionResult> Users()
        {
            var users = await _context.Users.Select(user => new
            {
                user.UserName,
                user.Email,
                user.FullName,
                user.Address,
                user.PostalCode,
                user.Phone

            }).ToListAsync();

            return Ok(users);
        }

		[ProducesResponseType(StatusCodes.Status200OK)]
		[ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] Login model)
        {
            JardinUser user = await _userManager.FindByEmailAsync(model.Email);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                IList<string> roles = await _userManager.GetRolesAsync(user);
                List<Claim> claims =
                [
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString() ),
                    new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString()),
                    new Claim(JwtRegisteredClaimNames.Sub, user.UserName)
                ];

                foreach (var role in roles)
                    claims.Add(new Claim(ClaimTypes.Role, role));

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]));
                var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken
                    (
                        _configuration["JWT:Issuer"],
                        _configuration["JWT:Audience"],
                        claims,
                        expires: DateTime.UtcNow.AddMinutes(120),
                        signingCredentials: credentials
                    );
                return Ok(new JwtSecurityTokenHandler().WriteToken(token));
            }

            return Unauthorized();
        }

        // POST: api/JardinUsers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[ProducesResponseType(StatusCodes.Status201Created)]
		[ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] Register model)
        {
			JardinUser userExists = await userManager.FindByNameAsync(model.Email);
			if (userExists != null)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, new { Status = "Error", Message = "User already exists" });
			}

            JardinUser user = new()
            {
                UserName = model.Email,
                Email = model.Email,
                FullName = model.FullName,
                Address = model.Address,
                PostalCode = model.PostalCode,
                Phone = model.Phone
            };

            var createUser = await _userManager.CreateAsync(user, model.Password);

            if (createUser.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, "Basic");

                return StatusCode(201);
            }

            return BadRequest();
        }

        [Authorize(Roles = "Basic")]
		[ProducesResponseType(StatusCodes.Status204NoContent)]
		[ProducesResponseType(StatusCodes.Status405MethodNotAllowed)]
        [HttpGet("Upgrade")]
        public async Task<IActionResult> Upgrade()
        {
            string? userName = _userManager.GetUserId(User);
            JardinUser? user = await _userManager.Users.FirstOrDefaultAsync(u => u.UserName == userName);
            var roles = await _userManager.GetRolesAsync(user);

            if (roles.Contains("Premium") || roles.Contains("Admin"))
            {
                return StatusCode(405);
            }

            await _userManager.AddToRoleAsync(user, "Premium");
			return NoContent();
        }
    }
}
