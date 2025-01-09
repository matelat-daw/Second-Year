using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Jardineria.Migrations.Jardineria
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Review",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Stars = table.Column<int>(type: "int", nullable: false),
                    ProductId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Review", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Review_producto_ProductId",
                        column: x => x.ProductId,
                        principalTable: "producto",
                        principalColumn: "codigo_producto",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Review",
                columns: new[] { "Id", "Description", "ProductId", "Stars", "Title", "UserId" },
                values: new object[,]
                {
                    { 1, "La Cadena Corta Muy Bien y es Muy Silenciosa.", 1, 5, "Buena Máquina", null },
                    { 2, "Se me sale La Cadena, seré yo?.", 1, 3, "Problemas", null },
                    { 3, "Yo la Uso Para Quitarme los Callos.", 1, 4, "Me Gusta", null },
                    { 4, "Hermoso Arce.", 179, 4, "Buen Árbol", null },
                    { 5, "Me Encanta el Arce, un Árbol Hermoso.", 179, 5, "Que Hojas!", null },
                    { 6, "Es Pequeño, espero que no crezca mucho.", 179, 4, "Bonsai?", null }
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
