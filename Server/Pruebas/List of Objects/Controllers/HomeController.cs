using List_of_Objects.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace List_of_Objects.Controllers
{
    public class HomeController : Controller
    {
        public static List<CharacterModel>? characters;
        private readonly ILogger<HomeController> _logger;

        public void loadCharacters()
        {
            characters =
            [
               new() { ID = 1, Name = "Homer", Age = 50, Job = "Planta Nuclear" },
               new() { ID = 2, Name = "March", Age = 45, Job = "Ama de Casa" }
            ];
        }

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            if (characters == null)
            {
                loadCharacters();
            }
            return View(characters);
        }

        [HttpGet]
        public IActionResult Create(int? ID)
        {
            return View();
        }

        [HttpPost, ActionName("Create")]
        [ValidateAntiForgeryToken]
        public IActionResult CreateIt()
        {
            int ID = int.Parse(Request.Form["ID"]);
            string Name = Request.Form["Name"];
            int Age = int.Parse(Request.Form["Age"]);
            string Job = Request.Form["Job"];

            characters.Add( new() { ID = ID, Name = Name, Age = Age, Job = Job });
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Update(int ID)
        {
            var character = characters.Find(character => character.ID == ID);
            return View(character);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Update()
        {
            int ID = int.Parse(Request.Form["ID"]);
            int index = characters.FindIndex(character => character.ID == ID); // Para Modificar un Item hay que saber su índice en la List.
            string Name = Request.Form["Name"];
            int Age = int.Parse(Request.Form["Age"]);
            string Job = Request.Form["Job"];

            characters[index].Name = Name;
            characters[index].Age = Age;
            characters[index].Job = Job;

            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Read(int ID)
        {
            var character = characters.Find(character => character.ID == ID);

            return View(character);
        }

        [HttpGet]
        public IActionResult Delete(int ID)
        {
            var characterID = characters.Find(character => character.ID == ID);

            return View(characterID);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteIt()
        {
            int ID = int.Parse(Request.Form["ID"]);

            characters.RemoveAll(character => character.ID == ID); // Para borrar un Item se puede usar la ID sin problema ya que la asigna el programa autoincremntandola.

            return RedirectToAction("Index");
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