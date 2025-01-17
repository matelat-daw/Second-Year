using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Practica_Api_Examen.Data;
using Practica_Api_Examen.Models;

namespace Practica_Api_Examen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutorsController : ControllerBase
    {
        private readonly BibliotecaContext _context;

        public AutorsController(BibliotecaContext context)
        {
            _context = context;
        }

        // GET: api/autors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Autor>>> Getautor()
        {
            return await _context.autor.ToListAsync();
        }

        // GET: api/autors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Autor>> Getautor(decimal id)
        {
            var autor = await _context.autor.FindAsync(id);

            if (autor == null)
            {
                return NotFound();
            }

            return autor;
        }

        // PUT: api/autors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putautor(decimal id, Autor autor)
        {
            if (id != autor.Id_Autor)
            {
                return BadRequest();
            }

            _context.Entry(autor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!autorExists(id))
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

        // POST: api/autors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Autor>> Postautor(Autor autor)
        {
            _context.autor.Add(autor);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (autorExists(autor.Id_Autor))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("Getautor", new { id = autor.Id_Autor }, autor);
        }

        // DELETE: api/autors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deleteautor(decimal id)
        {
            var autor = await _context.autor.FindAsync(id);
            if (autor == null)
            {
                return NotFound();
            }

            _context.autor.Remove(autor);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool autorExists(decimal id)
        {
            return _context.autor.Any(e => e.Id_Autor == id);
        }
    }
}
