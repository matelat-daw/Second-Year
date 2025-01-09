using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AUT03_01_Jardineria.Data;
using AUT03_01_Jardineria.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using AUT03_01_Jardineria.Models.Auth;

namespace AUT03_01_Jardineria.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly JardineriaContext _context;
        private readonly UserManager<JardinUser> _userManager;

        public ReviewsController(UserManager<JardinUser> userManager, JardineriaContext context)
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: api/Reviews/ProductReviews/3
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("ProductReviews/{id}")]
        public async Task<ActionResult<IEnumerable<Review>>> GetReviews(int id, int page = 1, int pageSize = 30)
        {
            if (!ProductoExists(id))
            {
                return NotFound();
            }

            return await _context.Review
                .Where(r => r.ProductId == id)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        //GET: api/Reviews/3
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("{id}")]
        public async Task<ActionResult<Review>> GetReview(int id)
        {
            var review = await _context.Review
                .Include(r => r.Producto)
                .FirstOrDefaultAsync(r => r.ReviewId == id);

            if (review == null)
            {
                return NotFound();
            }

            return Ok(review);
        }

        // POST: api/Reviews
        [Authorize(Roles = "Premium, Admin")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [HttpPost]
        public async Task<ActionResult<Review>> PostReview([FromBody] Review review)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(user => user.UserName == _userManager.GetUserId(User));
            
            review.ReviewId = 0;
            review.UserId = user.Id;
            _context.Review.Add(review);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetReview", new { id = review.ReviewId }, review);
        }

        // PUT: api/Reviews/3
        [Authorize(Roles = "Premium, Admin")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReview(int id, [FromBody] Review review)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(user => user.UserName == _userManager.GetUserId(User));
            var oldReview = await _context.Review.FindAsync(id);

            if (oldReview == null)
            {
                return NotFound();
            }

            if (oldReview.UserId != user.Id)
            {
                return Forbid();
            }

            // Modificamos los valores necesarios de la review existente
            oldReview.Title = review.Title; 
            oldReview.Description = review.Description;
            oldReview.Stars = review.Stars;

            // Trackeamos el estado de la review existente
            _context.Entry(oldReview).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReviewExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Reviews/3
        [Authorize(Roles = "Premium, Admin")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReview(int id)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(user => user.UserName == _userManager.GetUserId(User));
            var userRoles = await _userManager.GetRolesAsync(user);
            var review = await _context.Review.FindAsync(id);

            if (review == null)
            {
                return NotFound();
            }

            if (userRoles.Contains("Premium") && user.Id != review.UserId)
            {
                return Forbid();
            }

            _context.Review.Remove(review);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReviewExists(int id)
        {
            return _context.Review.Any(e => e.ReviewId == id);
        }
        private bool ProductoExists(int id)
        {
            return _context.Productos.Any(e => e.codigo_producto == id);
        }
    }
}
