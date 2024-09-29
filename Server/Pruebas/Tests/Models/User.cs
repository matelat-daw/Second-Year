using System.ComponentModel.DataAnnotations;

namespace Tests.Models
{
    public class User
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