using List_of_Objects.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace List_of_Objects.Controllers
{
    public class HomeController : Controller
    {
        public static List<CharacterModel>? characters;
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            characters =
            [
               new() { Id = 1, Name = "Homer", Age = 50, Job = "Planta Nuclear" },
               new() { Id = 2, Name = "March", Age = 45, Job = "Ama de Casa" }
            ];

            return View(characters);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
