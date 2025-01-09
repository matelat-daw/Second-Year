using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace AUT03_01_Jardineria.Migrations.Jardineria
{
    /// <inheritdoc />
    public partial class ReviewsMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Review",
                columns: table => new
                {
                    ReviewId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Stars = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProductId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Review", x => x.ReviewId);
                    table.ForeignKey(
                        name: "FK_Review_Producto_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Producto",
                        principalColumn: "codigo_producto",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Review",
                columns: new[] { "ReviewId", "Description", "ProductId", "Stars", "Title", "UserId" },
                values: new object[,]
                {
                    { 1, "Sirve", 1, 4, "Está ok", null },
                    { 2, "Me hice pupa", 1, 3, "Regulero", null },
                    { 3, "Super divino de la muerte", 1, 5, "Maravilloso", null },
                    { 4, "Ta chiquita", 179, 2, "Pequeña", null },
                    { 5, "Justo lo que necesitaba", 179, 5, "Perfecto", null },
                    { 6, "Encajan perfectamente en mi jardín", 179, 5, "Preciosas", null }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Review_ProductId",
                table: "Review",
                column: "ProductId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Review");
        }
    }
}
