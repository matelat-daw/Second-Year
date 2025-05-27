using List_of_Objects.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace List_of_Objects.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.Controller" />
    public class HomeController : Controller
    {
        /// <summary>
        /// The characters
        /// </summary>
        public static List<CharacterModel>? characters;
        /// <summary>
        /// The automatic identifier
        /// </summary>
        public static int AutoID;
        /// <summary>
        /// The logger
        /// </summary>
        private readonly ILogger<HomeController> _logger;

        /// <summary>
        /// Loads the characters.
        /// </summary>
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

        /// <summary>
        /// Initializes a new instance of the <see cref="HomeController"/> class.
        /// </summary>
        /// <param name="logger">The logger.</param>
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Indexes this instance.
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            if (characters == null)
            {
                LoadCharacters();
            }
            return View(characters);
        }

        /// <summary>
        /// Creates the specified identifier.
        /// </summary>
        /// <param name="ID">The identifier.</param>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Create(int? ID)
        {
            return View();
        }

        /// <summary>
        /// Creates the specified character.
        /// </summary>
        /// <param name="character">The character.</param>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(CharacterModel character)
        {
            if (ModelState.IsValid)
            {
                characters.Add(character);
                AutoID++;
                return RedirectToAction("Index");
            }
            return View();
        }

        /// <summary>
        /// Updates the specified identifier.
        /// </summary>
        /// <param name="ID">The identifier.</param>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Update(int ID)
        {
            var character = characters.Find(character => character.ID == ID);
            return View(character);
        }

        /// <summary>
        /// Updates the specified character.
        /// </summary>
        /// <param name="character">The character.</param>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Update(CharacterModel character)
        {
            if (ModelState.IsValid)
            {
                int ID = int.Parse(Request.Form["ID"]); // SeAsigna a ID el Valor que Llega del Formulario del Campo ID.
                int index = characters.FindIndex(character => character.ID == ID); // Se Obtiene el Índice, Para Modificar un Item hay que saber su índice en la List.

                characters[index].Name = character.Name;
                characters[index].Age = character.Age;
                characters[index].Job = character.Job;

                return RedirectToAction("Index");
            }
            return View();
        }

        /// <summary>
        /// Reads the specified identifier.
        /// </summary>
        /// <param name="ID">The identifier.</param>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Read(int ID)
        {
            var character = characters.Find(character => character.ID == ID);

            return View(character);
        }

        /// <summary>
        /// Deletes the specified identifier.
        /// </summary>
        /// <param name="ID">The identifier.</param>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Delete(int ID)
        {
            var characterID = characters.Find(character => character.ID == ID);

            return View(characterID);
        }

        // [HttpPost, ActionName("Delete")] // Se pone aquí la Acción a llamar y en el método se puede usar un alias, esto es si el get y el post tienen los mismos parámetros.
        /// <summary>
        /// Deletes this instance.
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Delete()
        {
            int ID = int.Parse(Request.Form["ID"]);

            characters.RemoveAll(character => character.ID == ID); // Para borrar un Item se puede usar la ID sin problema ya que la asigna el programa autoincremntandola.

            return RedirectToAction("Index");
        }

        /// <summary>
        /// Privacies this instance.
        /// </summary>
        /// <returns></returns>
        public IActionResult Privacy()
        {
            return View();
        }

        /// <summary>
        /// Errors this instance.
        /// </summary>
        /// <returns></returns>
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
