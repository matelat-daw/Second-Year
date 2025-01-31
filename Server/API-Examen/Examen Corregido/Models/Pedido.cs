using System.ComponentModel.DataAnnotations;

namespace PO03_01.Models
{
    public class Pedido
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "El campo {0} es obligatorio.")]
        [Range(1, 10, ErrorMessage = "El campo {0} debe estar entre los valores {1} y {2}")]
        public int Amount { get; set; }

        [Required(ErrorMessage = "El campo {0} es obligatorio.")]
        [StringLength(int.MaxValue, MinimumLength = 10, ErrorMessage = "El campo {0} debe tener como mínimo {2} caracteres.")]
        public string Address {  get; set; }

        public int GameId { get; set; }

        public Game? Game { get; set; }

        public string? ComercialId { get; set; }
    }
}
