using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Jardineria.Data;
using Jardineria.Models;
using Microsoft.AspNetCore.Authorization;

namespace Jardineria.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class GamasController(JardineriaContext context) : ControllerBase
    {
        private readonly JardineriaContext _context = context;

        // GET: api/Gamas
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Gama>>> Getgama_producto()
        {
            List<Gama> gama = await _context.gama_producto.ToListAsync();
            return Ok(gama);
        }

        // GET: api/Gamas/5
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("{id}")]
        public async Task<ActionResult<Gama>> GetGama(string gamaId)
        {
            var gama = await _context.gama_producto.Include(g => g.producto).FirstOrDefaultAsync(g => g.gama == gamaId);

            if (gama == null)
            {
                return NotFound();
            }

            return Ok(gama);
        }

        // PUT: api/Gamas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGama(string gamaId, [FromBody] Gama gama)
        {
            if (gamaId != gama.gama)
            {
                return BadRequest();
            }

            _context.Entry(gama).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GamaExists(gamaId))
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

        private bool GamaExists(string gamaId)
        {
            return _context.gama_producto.Any(e => e.gama == gamaId);
        }
    }
}
