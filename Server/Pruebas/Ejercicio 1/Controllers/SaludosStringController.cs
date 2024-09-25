using Microsoft.AspNetCore.Mvc;

namespace Ejercicio_1.Controllers
{
    public class SaludosStringController : Controller
    {
        public string Index(int ID, string name)
        {
            return "El Usuario se llama: " + name + " y Su ID es: " + ID;
        }
    }
}
