using System.ComponentModel.DataAnnotations;

namespace AUT03_01_Jardineria.Models.Auth
{
    public class Login
    {
        [EmailAddress(ErrorMessage = "{0} no tiene el formato correcto.")]
        [Required(ErrorMessage = "El campo {0} es obligatorio.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "El campo {0} es obligatorio.")]
        public string Password { get; set; }
    }
}
