using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MVCDBCodeFirst.Migrations
{
    /// <inheritdoc />
    public partial class CarSeeded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Car",
                columns: new[] { "Id", "Brand", "Model", "Price", "ReleaseDate" },
                values: new object[,]
                {
                    { 1, "Ford", "Mustang", 30000m, new DateTime(1972, 5, 9, 9, 15, 0, 0, DateTimeKind.Unspecified) },
                    { 2, "Chevrolet", "Corvette", 30000m, new DateTime(1972, 5, 9, 9, 15, 0, 0, DateTimeKind.Unspecified) },
                    { 3, "Fiat", "600", 5000m, new DateTime(1972, 5, 9, 9, 15, 0, 0, DateTimeKind.Unspecified) }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Car",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Car",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Car",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
