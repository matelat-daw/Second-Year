using List_of_Objects.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace List_of_Objects.Controllers
{
    public class HomeController : Controller
    {
        public static List<CharacterModel>? characters;
        public static int AutoID;
        private readonly ILogger<HomeController> _logger;

        public void LoadCharacters()
        {
            characters =
            [
               new() { ID = 1, Name = "Homer", Age = 50, Job = "Planta Nuclear" },
               new() { ID = 2, Name = "March", Age = 45, Job = "Ama de Casa" }
            ];
            AutoID = characters.Count();
            AutoID++;
        }

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            if (characters == null)
            {
                LoadCharacters();
            }
            return View(characters);
        }

        [HttpGet]
        public IActionResult Create(int? ID)
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(CharacterModel character)
        {
            character.ID = int.Parse(Request.Form["ID"]);
            character.Name = Request.Form["Name"];
            character.Age = int.Parse(Request.Form["Age"]);
            character.Job = Request.Form["Job"];

            if (!ModelState.IsValid)
            {
                var errors = ModelState.SelectMany(m => m.Value.Errors.Select(s => new { m.Key, s.ErrorMessage }));

                Debug.WriteLine("El Error es: " + errors);

                Debug.WriteLine("La ID es: " + Request.Form["ID"]);
                Debug.WriteLine("El Nombre es: " + Request.Form["Name"]);
                Debug.WriteLine("La Edad es: " + Request.Form["Age"]);
                Debug.WriteLine("La Ocupación es: " + Request.Form["Job"]);
            }

            if (ModelState.IsValid)
            {
                characters.Add(character);
                AutoID++;
                return RedirectToAction("Index");
            }
            return View();
        }

        [HttpGet]
        public IActionResult Update(int ID)
        {
            var character = characters.Find(character => character.ID == ID);
            return View(character);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Update(CharacterModel character)
        {
            if (ModelState.IsValid)
            {
                int ID = int.Parse(Request.Form["ID"]);
                int index = characters.FindIndex(character => character.ID == ID); // Para Modificar un Item hay que saber su índice en la List.

                characters[index].Name = Request.Form["Name"];
                characters[index].Age = int.Parse(Request.Form["Age"]);
                characters[index].Job = Request.Form["Job"];

                return RedirectToAction("Index");
            }
            return View();
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

        // [HttpPost, ActionName("Delete")] // Se pone aquí la Acción a llamar y en el método se puede usar un alias, esto es si el get y el post tienen los mismos parámetros.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Delete()
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
