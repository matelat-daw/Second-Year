using System.ComponentModel.DataAnnotations;

namespace List_of_Objects.Models
{
    public class CharacterModel
    {
        [Key]
        public int ID { get; internal set; }
        [Required(ErrorMessage = "Por Favor escribe el Nombre"), MinLength(3), MaxLength(15), Display(Name = "Nombre")]
        public string? Name { get; internal set; }
        [Required(ErrorMessage = "Por Favor escribe la Edad"), MinLength(0), MaxLength(100), Display(Name = "Edad")]
        public int Age { get; internal set; }
        [Required(ErrorMessage = "Por Favor escribe el Trabajo"), MinLength(5), MaxLength(20), Display(Name = "Ocupación")]
        public string? Job { get; internal set; }
    }
}