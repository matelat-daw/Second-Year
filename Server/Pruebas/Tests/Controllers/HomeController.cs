using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Tests.Models;

namespace Tests.Controllers
{
    public class HomeController : Controller
    {
        public static List<User>? users;
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            users =
            [
                new() { ID = 1, Name = "Primero", Age = 25, Job = "Ingeniero" },
                new() { ID = 2, Name = "Otro", Age = 30, Job = "Técnico" }
            ];
            
            Debug.WriteLine("Los datos son: " + users[1].Name);
            return View(users);
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
