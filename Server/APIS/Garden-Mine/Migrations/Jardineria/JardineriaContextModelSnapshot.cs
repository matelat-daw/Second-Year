﻿// <auto-generated />
using System;
using Jardineria.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Jardineria.Migrations.Jardineria
{
    [DbContext(typeof(JardineriaContext))]
    partial class JardineriaContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Jardineria.Models.Gama", b =>
                {
                    b.Property<string>("gama")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("descripcion_html")
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("descripcion_texto")
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("imagen")
                        .HasMaxLength(256)
                        .IsUnicode(false)
                        .HasColumnType("varchar(256)");

                    b.HasKey("gama")
                        .HasName("PK__gama_pro__4877EEE41EE6C88C");

                    b.ToTable("gama_producto", null, t =>
                        {
                            t.ExcludeFromMigrations();
                        });
                });

            modelBuilder.Entity("Jardineria.Models.Producto", b =>
                {
                    b.Property<int>("codigo_producto")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("codigo_producto"));

                    b.Property<short>("cantidad_en_stock")
                        .HasColumnType("smallint");

                    b.Property<string>("descripcion")
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)");

                    b.Property<string>("dimensiones")
                        .HasMaxLength(25)
                        .IsUnicode(false)
                        .HasColumnType("varchar(25)");

                    b.Property<string>("gama")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("nombre")
                        .IsRequired()
                        .HasMaxLength(70)
                        .IsUnicode(false)
                        .HasColumnType("varchar(70)");

                    b.Property<decimal?>("precio_proveedor")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("numeric(15, 2)")
                        .HasDefaultValueSql("(NULL)");

                    b.Property<decimal>("precio_venta")
                        .HasColumnType("numeric(15, 2)");

                    b.Property<string>("proveedor")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasDefaultValueSql("(NULL)");

                    b.HasKey("codigo_producto")
                        .HasName("PK__producto__105107A9A5787D2D");

                    b.HasIndex("gama");

                    b.ToTable("producto", null, t =>
                        {
                            t.ExcludeFromMigrations();
                        });
                });

            modelBuilder.Entity("Jardineria.Models.Review", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("ProductId")
                        .HasColumnType("int");

                    b.Property<int>("Stars")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.ToTable("Review");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "La Cadena Corta Muy Bien y es Muy Silenciosa.",
                            ProductId = 1,
                            Stars = 5,
                            Title = "Buena Máquina"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Se me sale La Cadena, seré yo?.",
                            ProductId = 1,
                            Stars = 3,
                            Title = "Problemas"
                        },
                        new
                        {
                            Id = 3,
                            Description = "Yo la Uso Para Quitarme los Callos.",
                            ProductId = 1,
                            Stars = 4,
                            Title = "Me Gusta"
                        },
                        new
                        {
                            Id = 4,
                            Description = "Hermoso Arce.",
                            ProductId = 179,
                            Stars = 4,
                            Title = "Buen Árbol"
                        },
                        new
                        {
                            Id = 5,
                            Description = "Me Encanta el Arce, un Árbol Hermoso.",
                            ProductId = 179,
                            Stars = 5,
                            Title = "Que Hojas!"
                        },
                        new
                        {
                            Id = 6,
                            Description = "Es Pequeño, espero que no crezca mucho.",
                            ProductId = 179,
                            Stars = 4,
                            Title = "Bonsai?"
                        });
                });

            modelBuilder.Entity("Jardineria.Models.Producto", b =>
                {
                    b.HasOne("Jardineria.Models.Gama", "gamaNavigation")
                        .WithMany("producto")
                        .HasForeignKey("gama")
                        .IsRequired()
                        .HasConstraintName("FK__producto__gama__3D5E1FD2");

                    b.Navigation("gamaNavigation");
                });

            modelBuilder.Entity("Jardineria.Models.Review", b =>
                {
                    b.HasOne("Jardineria.Models.Producto", "Producto")
                        .WithMany("Reviews")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Producto");
                });

            modelBuilder.Entity("Jardineria.Models.Gama", b =>
                {
                    b.Navigation("producto");
                });

            modelBuilder.Entity("Jardineria.Models.Producto", b =>
                {
                    b.Navigation("Reviews");
                });
#pragma warning restore 612, 618
        }
    }
}
