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
    public class EstudiantesController : ControllerBase
    {
        private readonly BibliotecaContext _context;

        public EstudiantesController(BibliotecaContext context)
        {
            _context = context;
        }

        // GET: api/estudiantes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Estudiante>>> Getestudiante()
        {
            return await _context.estudiante.ToListAsync();
        }

        // GET: api/estudiantes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Estudiante>> Getestudiante(decimal id)
        {
            var estudiante = await _context.estudiante.FindAsync(id);

            if (estudiante == null)
            {
                return NotFound();
            }

            return estudiante;
        }

        // PUT: api/estudiantes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putestudiante(decimal id, Estudiante estudiante)
        {
            if (id != estudiante.Id_Lector)
            {
                return BadRequest();
            }

            _context.Entry(estudiante).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!estudianteExists(id))
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

        // POST: api/estudiantes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Estudiante>> Postestudiante(Estudiante estudiante)
        {
            _context.estudiante.Add(estudiante);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (estudianteExists(estudiante.Id_Lector))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("Getestudiante", new { id = estudiante.Id_Lector }, estudiante);
        }

        // DELETE: api/estudiantes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deleteestudiante(decimal id)
        {
            var estudiante = await _context.estudiante.FindAsync(id);
            if (estudiante == null)
            {
                return NotFound();
            }

            _context.estudiante.Remove(estudiante);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool estudianteExists(decimal id)
        {
            return _context.estudiante.Any(e => e.Id_Lector == id);
        }
    }
}
