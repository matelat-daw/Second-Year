using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PO03_01.Models.Auth;

namespace PO03_01.Data
{
    public class LeslieUsersContext : IdentityDbContext<GameStoreUser>
    {
        public LeslieUsersContext()
        {
        }

        public LeslieUsersContext(DbContextOptions<LeslieUsersContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // USERS SEEDING
            List<GameStoreUser> users = new List<GameStoreUser>()
        {
            new GameStoreUser()
            {
                UserName = "comercial1@gamestore.com",
                NormalizedUserName = "COMERCIAL1@GAMESTORE.COM",
                Email = "comercial1@gamestore.com",
                NormalizedEmail = "COMERCIAL1@GAMESTORE.COM",
                FullName = "Comercial 1",
                IsActive = true
            },
            new GameStoreUser()
            {
                UserName = "comercial2@gamestore.com",
                NormalizedUserName = "COMERCIAL2@GAMESTORE.COM",
                Email = "comercial2@gamestore.com",
                NormalizedEmail = "COMERCIAL2@GAMESTORE.COM",
                FullName = "Comercial 2",
                IsActive = true
            },
            new GameStoreUser()
            {
                UserName = "admin@gamestore.com",
                NormalizedUserName = "ADMIN@GAMESTORE.COM",
                Email = "admin@gamestore.com",
                NormalizedEmail = "ADMIN@GAMESTORE.COM",
                FullName = "Usuario Admin",
                IsActive = true
            }
        };
            modelBuilder.Entity<GameStoreUser>().HasData(users);
            // PASSWORD HASH
            var passwordHasher = new PasswordHasher<GameStoreUser>();
            foreach (var user in users)
            {
                user.PasswordHash = passwordHasher.HashPassword(user, "Qwer123!");
            }

            // ROLES SEEDING
            List<IdentityRole> roles = new List<IdentityRole>()
        {
            new IdentityRole()
            {
                Name = "Comercial",
                NormalizedName = "COMERCIAL"
            },
            new IdentityRole()
            {
                Name = "Admin",
                NormalizedName = "ADMIN"
            }
        };
            modelBuilder.Entity<IdentityRole>().HasData(roles);

            // USERS-ROLES SEEDING
            List<IdentityUserRole<string>> usersRoles = new List<IdentityUserRole<string>>()
        {
            new IdentityUserRole<string>()
            {
                UserId = users[0].Id,
                RoleId = roles[0].Id
            },
            new IdentityUserRole<string>()
            {
                UserId = users[1].Id,
                RoleId = roles[0].Id
            },
            new IdentityUserRole<string>()
            {
                UserId = users[2].Id,
                RoleId = roles[1].Id
            }
        };
            modelBuilder.Entity<IdentityUserRole<string>>().HasData(usersRoles);
        }
    }
}
