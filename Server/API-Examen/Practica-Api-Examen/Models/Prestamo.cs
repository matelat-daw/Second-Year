﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Practica_Api_Examen.Models;

public partial class Prestamo
{
    [Key]
    public int Id { get; set; }

    [Column(TypeName = "decimal(10, 0)")]
    public decimal? Id_Lector { get; set; }

    public int id_libro { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? Fecha_Prestamo { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? Fecha_Devuelto { get; set; }

    public DateOnly? Devuelto { get; set; }
}