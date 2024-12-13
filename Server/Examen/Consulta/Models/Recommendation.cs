using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PO02_01.Models
{
    public class Recommendation
    {
        [Key]
        public int Id { get; set; }

        [DisplayName("Título")]
        [Required(ErrorMessage = "Campo obligatorio.")]
        [StringLength(30, MinimumLength = 2, ErrorMessage = "El título debe tener entre {2} y {1} caracteres.")]
        public string Title { get; set; }

        [DisplayName("Descripción")]
        [Required(ErrorMessage = "Campo obligatorio.")]
        [StringLength(100, MinimumLength = 5, ErrorMessage = "La descripción debe tener entre {2} y {1} caracteres. ")]
        public string Description { get; set; }

        public int SerieId { get; set; }

        [DisplayName("Serie")]
        public Serie? Serie { get; set; }
    }
}
