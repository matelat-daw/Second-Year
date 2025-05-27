using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PO02_01.Data;
using PO02_01.Models;

namespace PO02_01.Controllers
{
    [Authorize]
    
    public class RecommendationsController(SeriesContext context) : Controller
    {

        // GET: Recommendations
        public async Task<IActionResult> Index()
        {
            var seriesContext = context.Recommendation.Include(r => r.Series);
            return View(await seriesContext.ToListAsync());
        }

        // GET: Recommendations/Details/5
        [Authorize(Roles = "Admin, Manager")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var recommendation = await context.Recommendation
                .Include(r => r.Series)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (recommendation == null)
            {
                return NotFound();
            }

            return View(recommendation);
        }

        // GET: Recommendations/Create
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Create(int id)
        {
            ViewData["Serie"] = await context.Series.FirstOrDefaultAsync(s => s.SeriesID == id);
            return View();
        }

        // POST: Recommendations/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Create(int id, [Bind("Title, Description, SeriesId")] Recommendation recommendation)
        {
            ViewData["Serie"] = await context.Series.FirstOrDefaultAsync(s => s.SeriesID == id);
            if (ModelState.IsValid)
            {
                context.Add(recommendation);
                await context.SaveChangesAsync();
                return RedirectToAction("Details", "Series", new { Id = id });
            }
            return View(recommendation);
        }
    }
}