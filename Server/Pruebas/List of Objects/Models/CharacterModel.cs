using System.ComponentModel.DataAnnotations;

namespace List_of_Objects.Models
{
    public class CharacterModel
    {
        [Key]
        public int ID { get; set; }
        [Required(ErrorMessage = "Por Favor escribe el Nombre")]
        [StringLength(15, ErrorMessage = "El Nombre Tiene que Tener Entre 3 y 15 Taracteres.", MinimumLength = 3), Display(Name = "Nombre")]
        public string? Name { get; set; }
        [Required(ErrorMessage = "Por Favor escribe la Edad")]
        [Range(0, 100, ErrorMessage = "La Edad Debe Estar Entre 0 y 100 Años"), Display(Name = "Edad")]
        public int Age { get; set; }
        [Required(ErrorMessage = "Por Favor escribe el Trabajo")]
        [StringLength(20, ErrorMessage = "La Ocupación Tiene que Tener Entre 5 y 20 Caracters.", MinimumLength = 5), Display(Name = "Ocupación")]
        public string? Job { get; set; }
    }
}