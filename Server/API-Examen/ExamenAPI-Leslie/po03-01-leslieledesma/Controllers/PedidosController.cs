using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PO03_01.Data;
using PO03_01.Models;
using PO03_01.Models.Auth;

namespace PO03_01.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PedidosController : ControllerBase
    {
        private readonly GameStoreAPIContext _context;
        private readonly UserManager<GameStoreUser> _userManager;

        public PedidosController(UserManager<GameStoreUser> userManager, GameStoreAPIContext context)
        {
            _userManager = userManager;
            _context = context;
        }

        // GET: api/Pedidos/5
        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<Pedido>> GetPedido(int id)
        {
            var pedido = await _context.Pedido
                .Include(g => g.Game)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (pedido == null)
            {
                return NotFound();
            }

            return pedido;
        }

        // GET: api/Pedidos/5
        [HttpGet("ComercialPedidos/{email}")]
        [Authorize(Roles = "Comercial")]
        public async Task<ActionResult<Pedido>> GetPedido(string email)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(user => user.UserName == _userManager.GetUserId(User));

            if (user.Email != email)
            {
                return StatusCode(403);
            }

            var pedido = await _context.Pedido
                .Include(g => g.Game)
                .Where(p => p.ComercialId == user.Id)
                .ToListAsync();

            if (pedido == null)
            {
                return NotFound();
            }

            return Ok(pedido);
        }

        // PUT: api/Pedidos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> PutPedido(int id, Pedido pedido)
        {
            if (id != pedido.Id)
            {
                return BadRequest();
            }

            _context.Entry(pedido).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PedidoExists(id))
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

        // POST: api/Pedidos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = "Comercial")]
        public async Task<ActionResult<Pedido>> PostPedido(Pedido pedido)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(user => user.UserName == _userManager.GetUserId(User));

            Console.WriteLine(user.UserName);
            Console.WriteLine(user.IsActive);

            if (!user.IsActive)
            {
                return StatusCode(403);
            }

            pedido.ComercialId = user.Id;
            _context.Pedido.Add(pedido);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPedido", new { id = pedido.Id }, pedido);
        }

        // DELETE: api/Pedidos/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeletePedido(int id)
        {
            var pedido = await _context.Pedido.FindAsync(id);
            if (pedido == null)
            {
                return NotFound();
            }

            _context.Pedido.Remove(pedido);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PedidoExists(int id)
        {
            return _context.Pedido.Any(e => e.Id == id);
        }
    }
}
