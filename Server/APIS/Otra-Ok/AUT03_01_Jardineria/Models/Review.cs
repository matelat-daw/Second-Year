using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace AUT03_01_Jardineria.Models
{
    public class Review
    {
        [Key]
        public int ReviewId { get; set; }

        [Required(ErrorMessage = "El campo {0} es obligatorio")]
        [StringLength(15, MinimumLength = 3, ErrorMessage = "El campo {0} debe tener entre {2} y {1} caracteres")]
        public string Title { get; set; }

        [Required(ErrorMessage = "El campo {0} es obligatorio")]
        [StringLength(50, MinimumLength = 5, ErrorMessage = "El campo {0} debe tener entre {2} y {1} caracteres")]
        public string Description { get; set; }

        [Required(ErrorMessage = "El campo {0} es obligatorio")]
        [Range(1, 5, ErrorMessage = "El campo {0} debe estar entre los valores {1} y {2}")]
        public int Stars { get; set; }

        public string? UserId { get; set; }
     
        public int ProductId { get; set; }

        public Producto? Producto { get; set; }
    }
}
