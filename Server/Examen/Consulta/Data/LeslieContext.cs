using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace PO02_01.Data;

public class LeslieContext : IdentityDbContext
{
    public LeslieContext(DbContextOptions<LeslieContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        // USERS SEEDING
        List<IdentityUser> users = new List<IdentityUser>()
        {
            new IdentityUser()
            {
                UserName = "user@series.com",
                NormalizedUserName = "USER@SERIES.COM",
                Email = "user@series.com",
                NormalizedEmail = "USER@SERIES.COM"
            },
            new IdentityUser()
            {
                UserName = "manager@series.com",
                NormalizedUserName = "MANAGER@SERIES.COM",
                Email = "manager@series.com",
                NormalizedEmail = "MANAGER@SERIES.COM"
            },
            new IdentityUser()
            {
                UserName = "admin@series.com",
                NormalizedUserName = "ADMIN@SERIES.COM",
                Email = "admin@series.com",
                NormalizedEmail = "ADMIN@SERIES.COM"
            }
        };
        builder.Entity<IdentityUser>().HasData(users);
        // PASSWORD HASH
        var passwordHasher = new PasswordHasher<IdentityUser>();
        users[0].PasswordHash = passwordHasher.HashPassword(users[0], "User123!");
        users[1].PasswordHash = passwordHasher.HashPassword(users[1], "Manager123!");
        users[2].PasswordHash = passwordHasher.HashPassword(users[2], "Admin123!");

        // ROLES SEEDING
        List<IdentityRole> roles = new List<IdentityRole>()
        {
            new IdentityRole()
            {
                Name = "User",
                NormalizedName = "USER"
            },
            new IdentityRole()
            {
                Name = "Manager",
                NormalizedName = "MANAGER"
            },
            new IdentityRole()
            {
                Name = "Admin",
                NormalizedName = "ADMIN"
            }
        };
        builder.Entity<IdentityRole>().HasData(roles);

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
                RoleId = roles[1].Id
            },
            new IdentityUserRole<string>()
            {
                UserId = users[2].Id,
                RoleId = roles[2].Id
            }
        };
        builder.Entity<IdentityUserRole<string>>().HasData(usersRoles);
    }
}
