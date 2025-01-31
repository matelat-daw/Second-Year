using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace PO03_01.Models.Auth
{
    public class GameStoreUser : IdentityUser
    {
        [Required(ErrorMessage = "El campo {0} es obligatorio.")]
        [StringLength(int.MaxValue, MinimumLength = 10, ErrorMessage = "El campo {0} debe tener como mínimo {2} caracteres.")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "El campo {0} es obligatorio.")]
        public bool IsActive { get; set; }
    }
}
