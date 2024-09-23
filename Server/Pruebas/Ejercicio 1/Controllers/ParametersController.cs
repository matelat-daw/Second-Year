using Microsoft.AspNetCore.Mvc;

namespace Ejercicio_1.Controllers
{
    public class ParametersController : Controller
    {
        public IActionResult Index(string name, int age, int ID)
        {
            ViewBag.ID = ID;
            ViewBag.name = name;
            ViewBag.age = age;
            return View();
        }
    }
}