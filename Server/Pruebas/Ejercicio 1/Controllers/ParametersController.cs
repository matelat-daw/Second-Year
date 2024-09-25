using Microsoft.AspNetCore.Mvc;

namespace Ejercicio_1.Controllers
{
    public class ParametersController : Controller
    {
        public IActionResult Index(string name, int age, int ID)
        {
            ViewBag.name = name;
            ViewBag.age = age;
            ViewBag.ID = ID;
            // ViewBag Pasa todos los parámetros a la Action Index.cshtml y se pueden recibir tanto por Query String como Convinando Segmento y Query.
            return View();
        }
    }
}