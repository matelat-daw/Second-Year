using System.ComponentModel.DataAnnotations;

namespace Practica_Api_Examen.Models
{
    public class Register
    {
        [Required(ErrorMessage = "El Campo E-mail es Obligatorio."), Display(Name = "E-mail")]
        public string? Email { get; set; }
        [Required(ErrorMessage = "El Campo Contraseña es Obligatorio."), Display(Name = "Contraseña")]
        public string? Password { get; set; }
        [Required(ErrorMessage = "El Campo Nombre Completo es Obligatorio."), Display(Name = "Nombre Completo"), StringLength(64, MinimumLength = 10, ErrorMessage = "El Nombre del Usuario Debe Tener al Menos {2} Caracteres.")]
        public string? FullName { get; set; }
        [Required(ErrorMessage = "El Campo Dirección es Obligatorio.")]
        public string? Address { get; set; }
        [Required(ErrorMessage = "El Campo Código Postal es Obligatorio."), RegularExpression(@"^\d{5}$")]
        public string? PostalCode { get; set; }
        [Required(ErrorMessage = "El Campo Teléfono es Obligatorio."), RegularExpression(@"^\d{9}$")]
        public string? Phone { get; set; }
    }
}