﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PO02_01.Data;

#nullable disable

namespace PO02_01.Migrations
{
    [DbContext(typeof(SeriesContext))]
    partial class SeriesContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("PO02_01.Models.Genre", b =>
                {
                    b.Property<int>("GenreID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("GenreID"));

                    b.Property<string>("GenreName")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("nvarchar(80)");

                    b.HasKey("GenreID")
                        .HasName("PK__Genre__0385055E969F89FA");

                    b.ToTable("Genre", null, t =>
                        {
                            t.ExcludeFromMigrations();
                        });
                });

            modelBuilder.Entity("PO02_01.Models.Recommendation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("SerieId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("Id");

                    b.HasIndex("SerieId");

                    b.ToTable("Recommendation");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Ideal para los fans del género",
                            SerieId = 20,
                            Title = "Un clásico moderno"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Las actuaciones son excepcionales",
                            SerieId = 19,
                            Title = "Un clásico moderno"
                        },
                        new
                        {
                            Id = 3,
                            Description = "Gran historia con personajes memorables",
                            SerieId = 21,
                            Title = "No es para todos"
                        },
                        new
                        {
                            Id = 4,
                            Description = "Gran historia con personajes memorables",
                            SerieId = 3,
                            Title = "Oscura pero fascinante"
                        },
                        new
                        {
                            Id = 5,
                            Description = "Recomendada para los que disfrutan del suspenso",
                            SerieId = 14,
                            Title = "Mejor de lo esperado"
                        },
                        new
                        {
                            Id = 6,
                            Description = "Sorprendente y emotiva",
                            SerieId = 12,
                            Title = "Intriga constante"
                        },
                        new
                        {
                            Id = 7,
                            Description = "El final no decepciona",
                            SerieId = 20,
                            Title = "Realista y emotiva"
                        },
                        new
                        {
                            Id = 8,
                            Description = "Recomendada para los que disfrutan del suspenso",
                            SerieId = 15,
                            Title = "No es para todos"
                        },
                        new
                        {
                            Id = 9,
                            Description = "Los giros de la trama son excelentes",
                            SerieId = 16,
                            Title = "Cautivadora"
                        },
                        new
                        {
                            Id = 10,
                            Description = "Sorprendente y emotiva",
                            SerieId = 15,
                            Title = "Cautivadora"
                        },
                        new
                        {
                            Id = 11,
                            Description = "No pude dejar de verla hasta el final",
                            SerieId = 25,
                            Title = "Un giro inesperado"
                        },
                        new
                        {
                            Id = 12,
                            Description = "Un toque de humor en momentos oscuros",
                            SerieId = 11,
                            Title = "Conmovedora"
                        },
                        new
                        {
                            Id = 13,
                            Description = "Ritmo lento, pero vale la pena",
                            SerieId = 14,
                            Title = "Emocionante de principio a fin"
                        },
                        new
                        {
                            Id = 14,
                            Description = "Tiene sus fallos, pero engancha",
                            SerieId = 24,
                            Title = "Recomendación obligatoria"
                        },
                        new
                        {
                            Id = 15,
                            Description = "Ideal para los fans del género",
                            SerieId = 14,
                            Title = "Un giro inesperado"
                        },
                        new
                        {
                            Id = 16,
                            Description = "Tiene sus fallos, pero engancha",
                            SerieId = 26,
                            Title = "Intriga constante"
                        },
                        new
                        {
                            Id = 17,
                            Description = "Gran historia con personajes memorables",
                            SerieId = 13,
                            Title = "Recomendación obligatoria"
                        },
                        new
                        {
                            Id = 18,
                            Description = "Un mensaje profundo entre líneas",
                            SerieId = 15,
                            Title = "Emocionante de principio a fin"
                        },
                        new
                        {
                            Id = 19,
                            Description = "Cumple con lo que promete",
                            SerieId = 22,
                            Title = "Te deja con ganas de más"
                        },
                        new
                        {
                            Id = 20,
                            Description = "Una narrativa muy bien estructurada",
                            SerieId = 30,
                            Title = "Un clásico moderno"
                        },
                        new
                        {
                            Id = 21,
                            Description = "Recomendada para los que disfrutan del suspenso",
                            SerieId = 21,
                            Title = "Recomendación obligatoria"
                        },
                        new
                        {
                            Id = 22,
                            Description = "Un mensaje profundo entre líneas",
                            SerieId = 14,
                            Title = "Te deja con ganas de más"
                        },
                        new
                        {
                            Id = 23,
                            Description = "Los efectos especiales son increíbles",
                            SerieId = 11,
                            Title = "Un giro inesperado"
                        },
                        new
                        {
                            Id = 24,
                            Description = "No pude dejar de verla hasta el final",
                            SerieId = 17,
                            Title = "Comedia ligera"
                        },
                        new
                        {
                            Id = 25,
                            Description = "No pude dejar de verla hasta el final",
                            SerieId = 16,
                            Title = "Gran ambientación"
                        },
                        new
                        {
                            Id = 26,
                            Description = "Un mensaje profundo entre líneas",
                            SerieId = 18,
                            Title = "Fantasía en su máxima expresió"
                        },
                        new
                        {
                            Id = 27,
                            Description = "El final no decepciona",
                            SerieId = 8,
                            Title = "Un giro inesperado"
                        },
                        new
                        {
                            Id = 28,
                            Description = "Los giros de la trama son excelentes",
                            SerieId = 24,
                            Title = "Llena de acción"
                        },
                        new
                        {
                            Id = 29,
                            Description = "Un mensaje profundo entre líneas",
                            SerieId = 25,
                            Title = "Romance bien logrado"
                        },
                        new
                        {
                            Id = 30,
                            Description = "Sorprendente y emotiva",
                            SerieId = 13,
                            Title = "Diálogos épicos"
                        },
                        new
                        {
                            Id = 31,
                            Description = "Visualmente impresionante y bien actuada",
                            SerieId = 26,
                            Title = "Personajes inolvidables"
                        },
                        new
                        {
                            Id = 32,
                            Description = "Una narrativa muy bien estructurada",
                            SerieId = 13,
                            Title = "Intriga constante"
                        },
                        new
                        {
                            Id = 33,
                            Description = "Ritmo lento, pero vale la pena",
                            SerieId = 5,
                            Title = "Un final inesperado"
                        },
                        new
                        {
                            Id = 34,
                            Description = "Gran historia con personajes memorables",
                            SerieId = 11,
                            Title = "Una joya oculta"
                        },
                        new
                        {
                            Id = 35,
                            Description = "Los giros de la trama son excelentes",
                            SerieId = 14,
                            Title = "Conmovedora"
                        },
                        new
                        {
                            Id = 36,
                            Description = "Un ejemplo de cómo hacer buena televisión",
                            SerieId = 14,
                            Title = "Una joya oculta"
                        },
                        new
                        {
                            Id = 37,
                            Description = "Ideal para los fans del género",
                            SerieId = 12,
                            Title = "Oscura pero fascinante"
                        },
                        new
                        {
                            Id = 38,
                            Description = "Las actuaciones son excepcionales",
                            SerieId = 31,
                            Title = "Sorprendente desarrollo"
                        },
                        new
                        {
                            Id = 39,
                            Description = "Los giros de la trama son excelentes",
                            SerieId = 1,
                            Title = "Oscura pero fascinante"
                        },
                        new
                        {
                            Id = 40,
                            Description = "No pude dejar de verla hasta el final",
                            SerieId = 12,
                            Title = "Llena de acción"
                        },
                        new
                        {
                            Id = 41,
                            Description = "Una narrativa muy bien estructurada",
                            SerieId = 16,
                            Title = "Me hizo reflexionar"
                        },
                        new
                        {
                            Id = 42,
                            Description = "Los efectos especiales son increíbles",
                            SerieId = 14,
                            Title = "Conmovedora"
                        },
                        new
                        {
                            Id = 43,
                            Description = "Una propuesta original y fresca",
                            SerieId = 13,
                            Title = "Ideal para los amantes del mis"
                        },
                        new
                        {
                            Id = 44,
                            Description = "Gran historia con personajes memorables",
                            SerieId = 24,
                            Title = "Mejor de lo esperado"
                        },
                        new
                        {
                            Id = 45,
                            Description = "Un mensaje profundo entre líneas",
                            SerieId = 18,
                            Title = "Un clásico moderno"
                        },
                        new
                        {
                            Id = 46,
                            Description = "Tiene sus fallos, pero engancha",
                            SerieId = 20,
                            Title = "Se pone buena después de unos"
                        },
                        new
                        {
                            Id = 47,
                            Description = "Tiene sus fallos, pero engancha",
                            SerieId = 19,
                            Title = "Intriga constante"
                        },
                        new
                        {
                            Id = 48,
                            Description = "Ideal para los fans del género",
                            SerieId = 24,
                            Title = "Ideal para los amantes del mis"
                        },
                        new
                        {
                            Id = 49,
                            Description = "Cumple con lo que promete",
                            SerieId = 14,
                            Title = "Emocionante de principio a fin"
                        },
                        new
                        {
                            Id = 50,
                            Description = "Los giros de la trama son excelentes",
                            SerieId = 12,
                            Title = "Comedia ligera"
                        },
                        new
                        {
                            Id = 51,
                            Description = "El final no decepciona",
                            SerieId = 2,
                            Title = "Una montaña rusa de emociones"
                        },
                        new
                        {
                            Id = 52,
                            Description = "Ritmo lento, pero vale la pena",
                            SerieId = 11,
                            Title = "Conmovedora"
                        },
                        new
                        {
                            Id = 53,
                            Description = "Visualmente impresionante y bien actuada",
                            SerieId = 17,
                            Title = "Te deja con ganas de más"
                        },
                        new
                        {
                            Id = 54,
                            Description = "Tiene sus fallos, pero engancha",
                            SerieId = 26,
                            Title = "Increíble trama"
                        },
                        new
                        {
                            Id = 55,
                            Description = "Un ejemplo de cómo hacer buena televisión",
                            SerieId = 11,
                            Title = "No es para todos"
                        },
                        new
                        {
                            Id = 56,
                            Description = "El final no decepciona",
                            SerieId = 11,
                            Title = "Oscura pero fascinante"
                        },
                        new
                        {
                            Id = 57,
                            Description = "Los giros de la trama son excelentes",
                            SerieId = 29,
                            Title = "Para disfrutar con la familia"
                        },
                        new
                        {
                            Id = 58,
                            Description = "Un mensaje profundo entre líneas",
                            SerieId = 14,
                            Title = "No es para todos"
                        },
                        new
                        {
                            Id = 59,
                            Description = "No pude dejar de verla hasta el final",
                            SerieId = 26,
                            Title = "Me hizo reflexionar"
                        },
                        new
                        {
                            Id = 60,
                            Description = "El final no decepciona",
                            SerieId = 12,
                            Title = "Cautivadora"
                        });
                });

            modelBuilder.Entity("PO02_01.Models.Serie", b =>
                {
                    b.Property<int>("SeriesID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("SeriesID"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(400)
                        .HasColumnType("nvarchar(400)");

                    b.Property<int?>("GenreID")
                        .HasColumnType("int");

                    b.Property<DateOnly?>("ReleaseDate")
                        .IsRequired()
                        .HasColumnType("date");

                    b.Property<string>("SeriesName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("SeriesID")
                        .HasName("PK__Series__F3A1C10165AABB29");

                    b.HasIndex("GenreID");

                    b.ToTable("Series", null, t =>
                        {
                            t.ExcludeFromMigrations();
                        });
                });

            modelBuilder.Entity("PO02_01.Models.Recommendation", b =>
                {
                    b.HasOne("PO02_01.Models.Serie", "Serie")
                        .WithMany("Recommendations")
                        .HasForeignKey("SerieId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Serie");
                });

            modelBuilder.Entity("PO02_01.Models.Serie", b =>
                {
                    b.HasOne("PO02_01.Models.Genre", "Genre")
                        .WithMany("Series")
                        .HasForeignKey("GenreID")
                        .HasConstraintName("FK_Genre");

                    b.Navigation("Genre");
                });

            modelBuilder.Entity("PO02_01.Models.Genre", b =>
                {
                    b.Navigation("Series");
                });

            modelBuilder.Entity("PO02_01.Models.Serie", b =>
                {
                    b.Navigation("Recommendations");
                });
#pragma warning restore 612, 618
        }
    }
}