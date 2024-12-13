using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PO02_01.Migrations
{
    /// <inheritdoc />
    public partial class RecommendationSeeding : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Recommendation",
                columns: new[] { "Id", "Description", "SerieId", "Title" },
                values: new object[,]
                {
                    { 1, "Ideal para los fans del género", 20, "Un clásico moderno" },
                    { 2, "Las actuaciones son excepcionales", 19, "Un clásico moderno" },
                    { 3, "Gran historia con personajes memorables", 21, "No es para todos" },
                    { 4, "Gran historia con personajes memorables", 3, "Oscura pero fascinante" },
                    { 5, "Recomendada para los que disfrutan del suspenso", 14, "Mejor de lo esperado" },
                    { 6, "Sorprendente y emotiva", 12, "Intriga constante" },
                    { 7, "El final no decepciona", 20, "Realista y emotiva" },
                    { 8, "Recomendada para los que disfrutan del suspenso", 15, "No es para todos" },
                    { 9, "Los giros de la trama son excelentes", 16, "Cautivadora" },
                    { 10, "Sorprendente y emotiva", 15, "Cautivadora" },
                    { 11, "No pude dejar de verla hasta el final", 25, "Un giro inesperado" },
                    { 12, "Un toque de humor en momentos oscuros", 11, "Conmovedora" },
                    { 13, "Ritmo lento, pero vale la pena", 14, "Emocionante de principio a fin" },
                    { 14, "Tiene sus fallos, pero engancha", 24, "Recomendación obligatoria" },
                    { 15, "Ideal para los fans del género", 14, "Un giro inesperado" },
                    { 16, "Tiene sus fallos, pero engancha", 26, "Intriga constante" },
                    { 17, "Gran historia con personajes memorables", 13, "Recomendación obligatoria" },
                    { 18, "Un mensaje profundo entre líneas", 15, "Emocionante de principio a fin" },
                    { 19, "Cumple con lo que promete", 22, "Te deja con ganas de más" },
                    { 20, "Una narrativa muy bien estructurada", 30, "Un clásico moderno" },
                    { 21, "Recomendada para los que disfrutan del suspenso", 21, "Recomendación obligatoria" },
                    { 22, "Un mensaje profundo entre líneas", 14, "Te deja con ganas de más" },
                    { 23, "Los efectos especiales son increíbles", 11, "Un giro inesperado" },
                    { 24, "No pude dejar de verla hasta el final", 17, "Comedia ligera" },
                    { 25, "No pude dejar de verla hasta el final", 16, "Gran ambientación" },
                    { 26, "Un mensaje profundo entre líneas", 18, "Fantasía en su máxima expresió" },
                    { 27, "El final no decepciona", 8, "Un giro inesperado" },
                    { 28, "Los giros de la trama son excelentes", 24, "Llena de acción" },
                    { 29, "Un mensaje profundo entre líneas", 25, "Romance bien logrado" },
                    { 30, "Sorprendente y emotiva", 13, "Diálogos épicos" },
                    { 31, "Visualmente impresionante y bien actuada", 26, "Personajes inolvidables" },
                    { 32, "Una narrativa muy bien estructurada", 13, "Intriga constante" },
                    { 33, "Ritmo lento, pero vale la pena", 5, "Un final inesperado" },
                    { 34, "Gran historia con personajes memorables", 11, "Una joya oculta" },
                    { 35, "Los giros de la trama son excelentes", 14, "Conmovedora" },
                    { 36, "Un ejemplo de cómo hacer buena televisión", 14, "Una joya oculta" },
                    { 37, "Ideal para los fans del género", 12, "Oscura pero fascinante" },
                    { 38, "Las actuaciones son excepcionales", 31, "Sorprendente desarrollo" },
                    { 39, "Los giros de la trama son excelentes", 1, "Oscura pero fascinante" },
                    { 40, "No pude dejar de verla hasta el final", 12, "Llena de acción" },
                    { 41, "Una narrativa muy bien estructurada", 16, "Me hizo reflexionar" },
                    { 42, "Los efectos especiales son increíbles", 14, "Conmovedora" },
                    { 43, "Una propuesta original y fresca", 13, "Ideal para los amantes del mis" },
                    { 44, "Gran historia con personajes memorables", 24, "Mejor de lo esperado" },
                    { 45, "Un mensaje profundo entre líneas", 18, "Un clásico moderno" },
                    { 46, "Tiene sus fallos, pero engancha", 20, "Se pone buena después de unos" },
                    { 47, "Tiene sus fallos, pero engancha", 19, "Intriga constante" },
                    { 48, "Ideal para los fans del género", 24, "Ideal para los amantes del mis" },
                    { 49, "Cumple con lo que promete", 14, "Emocionante de principio a fin" },
                    { 50, "Los giros de la trama son excelentes", 12, "Comedia ligera" },
                    { 51, "El final no decepciona", 2, "Una montaña rusa de emociones" },
                    { 52, "Ritmo lento, pero vale la pena", 11, "Conmovedora" },
                    { 53, "Visualmente impresionante y bien actuada", 17, "Te deja con ganas de más" },
                    { 54, "Tiene sus fallos, pero engancha", 26, "Increíble trama" },
                    { 55, "Un ejemplo de cómo hacer buena televisión", 11, "No es para todos" },
                    { 56, "El final no decepciona", 11, "Oscura pero fascinante" },
                    { 57, "Los giros de la trama son excelentes", 29, "Para disfrutar con la familia" },
                    { 58, "Un mensaje profundo entre líneas", 14, "No es para todos" },
                    { 59, "No pude dejar de verla hasta el final", 26, "Me hizo reflexionar" },
                    { 60, "El final no decepciona", 12, "Cautivadora" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 33);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 34);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 35);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 40);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 41);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 42);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 43);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 44);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 45);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 46);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 47);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 48);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 49);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 50);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 51);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 52);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 53);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 54);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 55);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 56);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 57);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 58);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 59);

            migrationBuilder.DeleteData(
                table: "Recommendation",
                keyColumn: "Id",
                keyValue: 60);
        }
    }
}
