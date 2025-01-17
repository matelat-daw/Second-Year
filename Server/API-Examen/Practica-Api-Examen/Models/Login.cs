using System.ComponentModel.DataAnnotations;

namespace Practica_Api_Examen.Models
{
    public class Login
    {
        [Required(ErrorMessage = "Campo Requerido."), Display(Name = "E-mail"), StringLength(24, MinimumLength = 6, ErrorMessage = "El E-mail Debe Tener al Menos {1} Caracteres.")]
        public string Email { get; set; }
        public string Password { get; set; } = "Asdf1234!";
    }
}
