using Jardineria.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Jardineria.Data
{
    public class CesarContext(DbContextOptions<CesarContext> options) : IdentityDbContext<JardinUser>(options)
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            IdentityRole adminRole = new()
            {
                Name = "Admin"
            };
            adminRole.NormalizedName = adminRole.Name.ToUpper();

            IdentityRole userRole = new()
            {
                Name = "Basic"
            };
            userRole.NormalizedName = userRole.Name.ToUpper();

            IdentityRole premiumRole = new()
            {
                Name = "Premium"
            };
            premiumRole.NormalizedName = premiumRole.Name.ToUpper();

            List<IdentityRole> roles =
            [
                adminRole, userRole, premiumRole
            ];

            JardinUser admin = new JardinUser
            {
                UserName = "admin@jardin.com",
                Email = "admin@jardin.com",
                FullName = "Administrador Total",
                Address = "Vive en la Nube",
                PostalCode = "38001",
                Phone = "922220000"
            };
            admin.NormalizedUserName = admin.UserName.ToUpper();
            admin.NormalizedEmail = admin.Email.ToUpper();

            JardinUser basic = new()
            {
                UserName = "basic@jardin.com",
                Email = "basic@jardin.com",
                FullName = "Juán de los Palotes",
                Address = "Vive en la Calle",
                PostalCode = "38435",
                Phone = "922999999"
            };
            basic.NormalizedUserName = basic.UserName.ToUpper();
            basic.NormalizedEmail = basic.Email.ToUpper();

            JardinUser premium = new()
            {
                UserName = "premium@jardin.com",
                Email = "premium@jardin.com",
                FullName = "Cayetano De los Monteros",
                Address = "El Rosario",
                PostalCode = "38510",
                Phone = "922111111"
            };
            premium.NormalizedUserName = premium.UserName.ToUpper();
            premium.NormalizedEmail = premium.Email.ToUpper();

            List<JardinUser> users =
            [
                admin, basic, premium
            ];

            var passwordHasher = new PasswordHasher<JardinUser>(); // Crea las Contraseñas de los tres Usuarios de la Lista de Usuarios.
            users[0].PasswordHash = passwordHasher.HashPassword(users[0], "Asdf1234!");
            users[1].PasswordHash = passwordHasher.HashPassword(users[1], "Asdf1234!");
            users[2].PasswordHash = passwordHasher.HashPassword(users[2], "Asdf1234!");

            IdentityUserRole<string> userRoleAdmin = new()
            {
                UserId = users[0].Id,
                RoleId = roles[0].Id
            };

            IdentityUserRole<string> userRoleBasic = new()
            {
                UserId = users[1].Id,
                RoleId = roles[1].Id
            };

            IdentityUserRole<string> userRolePremium = new()
            {
                UserId = users[2].Id,
                RoleId = roles[2].Id
            };

            List<IdentityUserRole<string>> userRoles =
            // Lista de los Roles de los Usuarios Registrados.
            [
                userRoleAdmin, userRoleBasic, userRolePremium
            ];

            modelBuilder.Entity<IdentityRole>().HasData(roles); // Roles a Almacenar en la Base de Datos Northwind en la Tabla AspNetRoles.

            modelBuilder.Entity<JardinUser>().HasData(users); // Roles a Almacenar en la Base de Datos Northwind en la Tabla AspNetUsers.

            modelBuilder.Entity<IdentityUserRole<string>>().HasData(userRoles); // Roles a Almacenar en la Base de Datos Northwind en la Tabla AspNetUserRoles.

            base.OnModelCreating(modelBuilder);
        }
    }
}