using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Jardineria.Models
{
    public class Review
    {
        [Key]
        public int Id { get; set; }
        [Required (ErrorMessage = "El Campo es Requerido."), Display(Name = "Título"), StringLength(15, MinimumLength = 3, ErrorMessage = "El Título Debe Tener al Menos {2} Caracteres.")]
        public string? Title { get; set; }
        [Required (ErrorMessage = "El Campo es Requerido."), Display(Name = "Descripción"), StringLength(50, MinimumLength = 5, ErrorMessage = "La Descripción Debe Tener al Menos {2} Caracteres.")]
        public string? Description { get; set; }
        [Required (ErrorMessage = "El Campo es Requerido."), Display(Name = "Valoración"), Range(1, 5, ErrorMessage = "La Valoración Debe Ser Entre {1} y {2}")]
        public int Stars { get; set; }
        public int ProductId { get; set; }

        [ForeignKey("ProductId")]
        public Producto? Producto { get; set; }

        public string? UserId { get; set; }
    }
}