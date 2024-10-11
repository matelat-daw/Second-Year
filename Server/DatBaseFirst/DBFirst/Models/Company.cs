using System.ComponentModel.DataAnnotations;

namespace DataBaseFirst.Models
{
    public class Company
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int ShipperId { get; set; }
        public static Shipper? Shipper { get; set; }
    }
}