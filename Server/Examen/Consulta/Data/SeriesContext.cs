﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using PO02_01.Models;

namespace PO02_01.Data;

public partial class SeriesContext : DbContext
{
    public SeriesContext()
    {
    }

    public SeriesContext(DbContextOptions<SeriesContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Genre> Genres { get; set; }

    public virtual DbSet<Serie> Series { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Serie>().ToTable("Series", t => t.ExcludeFromMigrations());
        modelBuilder.Entity<Genre>().ToTable("Genre", t => t.ExcludeFromMigrations());

        modelBuilder.Entity<Genre>(entity =>
        {
            entity.HasKey(e => e.GenreID).HasName("PK__Genre__0385055E969F89FA");
        });

        modelBuilder.Entity<Serie>(entity =>
        {
            entity.HasKey(e => e.SeriesID).HasName("PK__Series__F3A1C10165AABB29");

            entity.HasOne(d => d.Genre).WithMany(p => p.Series).HasConstraintName("FK_Genre");
        });

        // SEEDING EXAMPLES FROM CSV
        modelBuilder.Entity<Recommendation>().HasData(CSVReader("recomendaciones_series.csv"));

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    private List<Recommendation> CSVReader(string file)
    {
        List<Recommendation> examples = new();

        using (StreamReader reader = new(file))
        {
            int id = 1;
            while (!reader.EndOfStream)
            {
                string record = reader.ReadLine();
                string[] fields = record.Split(";");

                Recommendation example = new Recommendation()
                {
                    Id = id++,
                    Title = fields[0],
                    Description = fields[1],
                    SerieId = int.Parse(fields[2])
                };
                examples.Add(example);
            }
        }
        return examples;
    }

public DbSet<PO02_01.Models.Recommendation> Recommendation { get; set; } = default!;
}