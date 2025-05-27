using System.ComponentModel.DataAnnotations;

namespace List_of_Objects.Models
{
    /// <summary>
    /// Modelo del Objeto a Crear
    /// </summary>
    public class CharacterModel
    {
        /// <summary>
        /// Gets or sets the identifier.
        /// </summary>
        /// <value>
        /// The identifier.
        /// </value>
        [Key]
        public int ID { get; set; }
        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        /// <value>
        /// The name.
        /// </value>
        [Required(ErrorMessage = "Por Favor escribe el Nombre")]
        [StringLength(15, ErrorMessage = "El Nombre Tiene que Tener Entre 3 y 15 Caracteres.", MinimumLength = 3), Display(Name = "Nombre")]
        public string? Name { get; set; }
        /// <summary>
        /// Gets or sets the age.
        /// </summary>
        /// <value>
        /// The age.
        /// </value>
        [Required(ErrorMessage = "Por Favor escribe la Edad")]
        [Range(0, 100, ErrorMessage = "La Edad Debe Estar Entre 0 y 100 Años"), Display(Name = "Edad")]
        public int? Age { get; set; }
        /// <summary>
        /// Gets or sets the job.
        /// </summary>
        /// <value>
        /// The job.
        /// </value>
        [Required(ErrorMessage = "Por Favor escribe el Trabajo")]
        [StringLength(20, ErrorMessage = "La Ocupación Tiene que Tener Entre 5 y 20 Caracteres.", MinimumLength = 5), Display(Name = "Ocupación")]
        public string? Job { get; set; }
    }
}