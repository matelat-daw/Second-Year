using System.ComponentModel.DataAnnotations;

namespace List_of_Objects.Models
{
    public class CharacterModel
    {
        [Key]
        public int ID { get; internal set; }
        [Required(ErrorMessage = "Por Favor escribe el Nombre")]
        public string Name { get; internal set; }
        [Required(ErrorMessage = "Por Favor escribe La Edad")]
        public int Age { get; internal set; }
        [Required(ErrorMessage = "Por Favor escribe el Trabajo")]
        public string Job { get; internal set; }
    }
}