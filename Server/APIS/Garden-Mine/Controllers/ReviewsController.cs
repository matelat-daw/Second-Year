using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Jardineria.Data;
using Jardineria.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System.Drawing.Printing;

namespace Jardineria.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController(JardineriaContext context, UserManager<JardinUser> userManager) : ControllerBase
    {
        private readonly JardineriaContext _context = context;
        private readonly UserManager<JardinUser> _userManager = userManager;

        // GET: api/Reviews
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("ProductReviews/{id}")]
        public async Task<IActionResult> GetReviews(int id)
        {
            if (!ProductoExists(id))
            {
                return NotFound();
            }

            var reviews = await _context.Review
                .Where(r => r.ProductId == id)
                .ToListAsync();

            return Ok(reviews);
        }

        // GET: api/Reviews/5
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReview(int id)
        {
            var review = await _context.Review.Include(p => p.Producto).FirstOrDefaultAsync(r => r.Id == id);

            if (review == null)
            {
                return NotFound();
            }

            return Ok(review);
        }

        [Authorize(Roles = "Admin, Premium")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReview(int id, [FromBody] Review review)
        {
            review.Id = id;

            var userName = _userManager.GetUserId(User);
            var user = await _userManager.Users.FirstOrDefaultAsync(user => user.UserName == userName);

            review.UserId = user.Id;

            var reviewAnterior = await _context.Review.FindAsync(id);

            if (user.Id != reviewAnterior.UserId)
            {
                return Forbid();
            }
            reviewAnterior.ProductId = review.ProductId;
            reviewAnterior.Stars = review.Stars;
            reviewAnterior.Description = review.Description;
            reviewAnterior.Title = review.Title;

            _context.Entry(reviewAnterior).State = EntityState.Modified;

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

        // POST: api/Reviews
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = "Admin, Premiun")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [HttpPost]
        public async Task<IActionResult> PostReview([FromBody] Review review)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(user => user.UserName == _userManager.GetUserId(User));
            review.UserId = user.Id;
            _context.Review.Add(review);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReview", new { id = review.Id }, review);
        }

        // DELETE: api/DeleteReview
        [Authorize(Roles = "Admin, Premium")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReview(int id)
        {
            var review = await _context.Review.FindAsync(id);

            var userName = _userManager.GetUserId(User); // Obtiene Nombre del Usuario del Token.
            var user = await _userManager.Users.Where(user => user.UserName == userName).FirstOrDefaultAsync();

            var roles = await _userManager.GetRolesAsync(user);
            if (review == null)
            {
                return NotFound();
            }
            if (user.Id == review.UserId || roles.Contains("Admin"))
            {
                _context.Review.Remove(review);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            else
            {
                return Forbid();
            }
        }

        private bool ProductoExists(int id)
        {
            return _context.producto.Any(e => e.codigo_producto == id);
        }

        private bool ReviewExists(int id)
        {
            return _context.Review.Any(e => e.Id == id);
        }
    }
}
