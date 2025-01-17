using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Practica_Api_Examen.Models;

namespace Practica_Api_Examen.Data
{
    public class CesarContext(DbContextOptions<CesarContext> options) : IdentityDbContext<BibliotecaUser>(options)// Usa IdentityDbContext<IdentityUser> que es la Identity Estandar, si se Hace la base de Datos Personalizada como en este Caso se usa el Nombre del Modelo de los Usuarios que es JardinUser, el Modelo JardinUser extiende la Clase IdentityUser.
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}