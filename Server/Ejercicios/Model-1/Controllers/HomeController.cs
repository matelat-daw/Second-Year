using Microsoft.AspNetCore.Mvc;
using Model_1.Models;
using System.Diagnostics;

namespace Model_1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Perfil()
        {
            Person persona = new Person
            {
                ID = 1,
                Name = "César",
                Age = 56,
                Email = "matelat@gmail.com"
            };

            return View(persona);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
