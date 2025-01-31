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
    public class PedidosController(UserManager<GameStoreUser> userManager, GameStoreAPIContext context) : ControllerBase
    {

        // GET: api/Pedidos/5
        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<Pedido>> GetPedido(int id)
        {
            var pedido = await context.Pedido
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
            var user = await userManager.Users.FirstOrDefaultAsync(user => user.UserName == userManager.GetUserId(User));

            if (user.Email != email)
            {
                return StatusCode(403);
            }

            var pedido = await context.Pedido
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

            context.Entry(pedido).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
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
            var user = await userManager.Users.FirstOrDefaultAsync(user => user.UserName == userManager.GetUserId(User));

            Console.WriteLine(user.UserName);
            Console.WriteLine(user.IsActive);

            if (!user.IsActive)
            {
                return StatusCode(403);
            }

            pedido.ComercialId = user.Id;
            context.Pedido.Add(pedido);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetPedido", new { id = pedido.Id }, pedido);
        }

        // DELETE: api/Pedidos/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeletePedido(int id)
        {
            var pedido = await context.Pedido.FindAsync(id);
            if (pedido == null)
            {
                return NotFound();
            }

            context.Pedido.Remove(pedido);
            await context.SaveChangesAsync();

            return NoContent();
        }

        private bool PedidoExists(int id)
        {
            return context.Pedido.Any(e => e.Id == id);
        }
    }
}
