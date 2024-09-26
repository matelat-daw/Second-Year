using System.ComponentModel;

namespace Model_1.Models
{
    public class Person
    {
        public int ID { get; set; }
        [DisplayName("Nombre")]
        public required string Name { get; set; }
        [DisplayName("Edad")]
        public int Age { get; set; }
        [DisplayName("E-mail")]
        public string? Email { get; set; }
    }
}