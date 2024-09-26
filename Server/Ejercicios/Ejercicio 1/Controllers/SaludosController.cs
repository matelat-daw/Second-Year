using Microsoft.AspNetCore.Mvc;

namespace Ejercicio_1.Controllers
{
    public class SaludosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Despedida()
        {
            return View();
        }
    }
}