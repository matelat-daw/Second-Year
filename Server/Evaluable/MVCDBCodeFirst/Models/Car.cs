using System.ComponentModel.DataAnnotations;

namespace MVCDBCodeFirst.Models
{
    public class Car
    {
        [Key]
        public int Id { get; set; }
        [Required (ErrorMessage = "Por Favor Escribe el Modelo, Mínimo 3, Máximo 20 Caracteres."), MaxLength(20), MinLength(3), Display(Name = "Modelo")]
        public string Model { get; set; }
        [Required(ErrorMessage = "Por Favor Escribe la Marca, Mínimo 3, Máximo 15 Caracteres."), MaxLength(15), MinLength(3), Display(Name = "Marca")]
        public string Brand { get; set; }
        [Required(ErrorMessage = "Por Favor Selecciona la Fecha de Fabricación"), Display(Name = "Fecha de Fabricación")]
        //[Range(typeof(DateTime), "1/1/1970 00:00:00", "1/1/2024 00:00:00", ErrorMessage = "La Fecha Está Fuera de Rango(1/1/1970 a 1/1/2024)")]
        [DataType(DataType.DateTime)]
        public DateTime ReleaseDate { get; set; }
        [Required(ErrorMessage = "Por Favor Escribe el Precio. Debe estar Entre 5000 y 30000 €"), Display(Name = "Precio")]
        [Range(5000, 30000)]
        public decimal Price { get; set; }
    }
}