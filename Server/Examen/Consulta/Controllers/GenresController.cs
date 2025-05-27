using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PO02_01.Data;

namespace PO02_01.Controllers
{
    [Authorize]
    public class GenresController(SeriesContext context) : Controller
    {

        // GET: Genres
        public async Task<IActionResult> Index()
        {
            return View(await context.Genres.Include(g => g.Series).OrderByDescending(g => g.GenreName).ToListAsync());
        }

        // GET: Genres/Details/5
        [Authorize(Roles = "Admin, Manager")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var genre = await context.Genres
                .Include(g => g.Series)
                .FirstOrDefaultAsync(m => m.GenreID == id);
            if (genre == null)
            {
                return NotFound();
            }

            return View(genre);
        }
    }
}