using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace AUT03_01_Jardineria.Models.Auth
{
    public class JardinUser : IdentityUser
    {
        [Required(ErrorMessage = "El campo {0} es obligatorio.")]
        [StringLength(int.MaxValue, MinimumLength = 10, ErrorMessage = "El campo {0} debe tener como mínimo {2} caracteres.")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "El campo {0} es obligatorio.")]
        public string Address { get; set; }

        [Required(ErrorMessage = "El campo {0} es obligatorio.")]
        [RegularExpression(@"^\d{5}$", ErrorMessage = "El código postal debe tener 5 dígitos.")]
        public string PostalCode { get; set; }

        [Required(ErrorMessage = "El campo {0} es obligatorio.")]
        [RegularExpression(@"^\d{9}$", ErrorMessage = "El número telefónico debe tener 9 dígitos.")]
        public string Phone { get; set; }
    }
}
