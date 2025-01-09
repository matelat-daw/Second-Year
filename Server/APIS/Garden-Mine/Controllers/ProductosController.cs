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
    public class ProductosController(JardineriaContext context) : ControllerBase
    {
        private readonly JardineriaContext _context = context;

        // GET: api/Productos
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Producto>>> GetProductos()
        {

            List<Producto> productos = await _context.producto
                .OrderBy(producto => producto.nombre)
                .Take(30)
                .ToListAsync();
            return Ok(productos);
        }

        // GET: api/Productos/5
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("{id}")]
        public async Task<ActionResult<Producto>> GetProducto(int id)
        {
            var producto = await _context.producto
                .Include(p => p.gamaNavigation)
                .Include(p => p.Reviews)
                .FirstOrDefaultAsync(p => p.codigo_producto == id);

            if (producto == null)
            {
                return NotFound();
            }

            return Ok(producto);
        }

        // PUT: api/Productos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProducto(int id, [FromBody] Producto producto)
        {
            _context.Entry(producto).State = EntityState.Modified;

            try
            {
                producto.codigo_producto = id;
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductoExists(id))
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

        private bool ProductoExists(int id)
        {
            return _context.producto.Any(e => e.codigo_producto == id);
        }
    }
}