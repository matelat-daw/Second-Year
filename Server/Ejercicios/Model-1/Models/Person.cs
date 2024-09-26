using System.ComponentModel;

namespace Model_1.Models
{
    public class Person
    {
        public int Id { get; set; }
        [DisplayName("Nombre")]
        public string Name { get; set; }
        [DisplayName("Edad")]
        public int Age { get; set; }
        [DisplayName("E-mail")]
        public string Email { get; set; }
    }
}