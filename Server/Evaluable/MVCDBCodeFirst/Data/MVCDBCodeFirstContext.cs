using Microsoft.EntityFrameworkCore;
using MVCDBCodeFirst.Models;
using System.Drawing.Drawing2D;

namespace MVCDBCodeFirst.Data
{
    public class MVCDBCodeFirstContext : DbContext
    {
        public MVCDBCodeFirstContext (DbContextOptions<MVCDBCodeFirstContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Car>().HasData(
                new Car
                {
                    Id = 1,
                    Brand = "Ford",
                    Model = "Mustang",
                    ReleaseDate = new DateTime(1972, 05, 09, 09, 15, 00),
                    Price = 30000
                },
                new Car
                {
                    Id = 2,
                    Brand = "Chevrolet",
                    Model = "Corvette",
                    ReleaseDate = new DateTime(1972, 05, 09, 09, 15, 00),
                    Price = 30000
                },
                new Car
                {
                    Id = 3,
                    Brand = "Fiat",
                    Model = "600",
                    ReleaseDate = new DateTime(1972, 05, 09, 09, 15, 00),
                    Price = 5000
                }
            );
        }

        public DbSet<MVCDBCodeFirst.Models.Car> Car { get; set; } = default!;
    }
}