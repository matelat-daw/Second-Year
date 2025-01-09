using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AUT03_01_Jardineria.Data;
using AUT03_01_Jardineria.Models;
using Microsoft.AspNetCore.Authorization;

namespace AUT03_01_Jardineria.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class GamasController : ControllerBase
    {
        private readonly JardineriaContext _context;

        public GamasController(JardineriaContext context)
        {
            _context = context;
        }

        // GET: api/Gamas
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<gama_producto>>> GetGamas(int page = 1, int pageSize = 15)
        {
            var gamas = await _context.Gamas
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
            return Ok(gamas);
        }

        // GET: api/Gamas/Aromaticas
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("{id}")]
        public async Task<ActionResult<gama_producto>> GetGama(string id)
        {
            var gama = await _context.Gamas
                .Include(g => g.productos)
                .FirstOrDefaultAsync(g => g.gama == id);

            if (gama == null)
            {
                return NotFound();
            }

            return Ok(gama);
        }

        // PUT: api/Gamas/Aromaticas
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGama(string id, [FromBody] gama_producto gama)
        {
            _context.Entry(gama).State = EntityState.Modified;

            try
            {
                gama.gama = id;
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GamaExists(id))
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

        private bool GamaExists(string id)
        {
            return _context.Gamas.Any(e => e.gama == id);
        }
    }
}
