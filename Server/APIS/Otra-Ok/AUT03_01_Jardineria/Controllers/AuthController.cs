using AUT03_01_Jardineria.Models;
using AUT03_01_Jardineria.Models.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NuGet.Versioning;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AUT03_01_Jardineria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<JardinUser> _userManager;
        private readonly IConfiguration _configuration;

        public AuthController(UserManager<JardinUser> userManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _configuration = configuration;
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] Login model)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var userRoles = await _userManager.GetRolesAsync(user);

                var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString()),
                    new Claim(JwtRegisteredClaimNames.Sub, user.UserName)
                };
                foreach (var userRole in userRoles)
                {
                    claims.Add(new Claim(ClaimTypes.Role, userRole));
                }
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var token = new JwtSecurityToken(
                    _configuration["Jwt:Issuer"],
                    _configuration["Jwt:Audience"],
                    claims,
                    expires: DateTime.UtcNow.AddHours(2),
                    signingCredentials: credentials
                    );
                return Ok(new JwtSecurityTokenHandler().WriteToken(token));
            }
            return Unauthorized();
        }

        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] Register model)
        {
            var userExists = await _userManager.FindByNameAsync(model.Email);
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
                Phone = model.Phone,
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                return BadRequest();
            }
            await _userManager.AddToRoleAsync(user, "Basic");
            return StatusCode(201);
        }

        [Authorize(Roles = "Basic")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status405MethodNotAllowed)]
        [HttpGet("Upgrade")]
        public async Task<IActionResult> Upgrade()
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(user => user.UserName == _userManager.GetUserId(User));
            var roles = await _userManager.GetRolesAsync(user);

            if (roles.Contains("Premium") || roles.Contains("Admin"))
            {
                return StatusCode(405);
            }

            await _userManager.AddToRoleAsync(user, "Premium");
            return NoContent();
        }

        [Authorize(Roles = "Admin")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet("Users")]
        public async Task<IActionResult> Users()
        {
            var users = await _userManager.Users
                .Select(user => new
                {
                    user.UserName,
                    user.Email,
                    user.FullName,
                    user.Address,
                    user.Phone,
                    user.PostalCode
                })
                .ToListAsync();
            return Ok(users);
        }
    }
}
