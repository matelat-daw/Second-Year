using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AUT03_01_Jardineria.Data;
using AUT03_01_Jardineria.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;
using Microsoft.AspNetCore.Authorization;

namespace AUT03_01_Jardineria.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        private readonly JardineriaContext _context;

        public ProductosController(JardineriaContext context)
        {
            _context = context;
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        // GET: api/Productos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Producto>>> GetProductos(int page = 1, int pageSize = 30)
        {
            var productos = await _context.Productos
                .OrderBy(producto => producto.nombre)
                .Skip((page-1)*pageSize)
                .Take(pageSize)
                .ToListAsync();
            return Ok(productos);
        }

        // GET: api/Productos/132
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("{id}")]
        public async Task<ActionResult<Producto>> GetProducto(int id)
        {
            var producto = await _context.Productos
                .Include(p => p.gamaNavigation)
                .Include(p => p.reviews)
                .FirstOrDefaultAsync(p => p.codigo_producto == id);

            if (producto == null)
            {
                return NotFound();
            }

            return Ok(producto);
        }

        // PUT: api/Productos/132
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
            return _context.Productos.Any(e => e.codigo_producto == id);
        }
    }
}
