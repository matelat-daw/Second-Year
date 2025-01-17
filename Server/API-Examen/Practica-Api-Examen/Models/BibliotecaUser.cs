using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Practica_Api_Examen.Models
{
    public class BibliotecaUser : IdentityUser
    {
        [Required(ErrorMessage = "El Campo {0} es Requerido."), Display(Name = "Nombre Completo"), StringLength(64, MinimumLength = 5, ErrorMessage = "El Nombre del Usuario Debe Tener al Menos {2} Caracteres.")]
        public string? FullName { get; set; }
        [Required(ErrorMessage = "Campo Requerido."), Display(Name = "Dirección"), StringLength(128, MinimumLength = 5, ErrorMessage = "La Dirección Debe Tener al Menos {2} Caracteres.")]
        public string? Address { get; set; }
        [Required(ErrorMessage = "Campo Requerido."), RegularExpression(@"^\d{5}$", ErrorMessage = "El código postal debe tener 5 dígitos.")]
        public string? PostalCode { get; set; }
        [Required(ErrorMessage = "Campo Requerido."), RegularExpression(@"^\d{9}$", ErrorMessage = "El número telefónico debe tener 9 dígitos.")]
        public string? Phone { get; set; }
    }
}