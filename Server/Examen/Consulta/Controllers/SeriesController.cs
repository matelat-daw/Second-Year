using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using PO02_01.Data;
using PO02_01.Models;

namespace PO02_01.Controllers
{
    [Authorize]
    public class SeriesController : Controller
    {
        private readonly SeriesContext _context;

        public SeriesController(SeriesContext context)
        {
            _context = context;
        }

        // GET: Series
        public async Task<IActionResult> Index()
        {
            var seriesContext = _context.Series.Include(s => s.Genre);
            return View(await seriesContext
                .OrderBy(s => s.SeriesName)
                .ToListAsync());
        }

        // GET: Series/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var serie = await _context.Series
                .Include(s => s.Genre)
                .Include(s => s.Recommendations)
                .FirstOrDefaultAsync(m => m.SeriesID == id);
            if (serie == null)
            {
                return NotFound();
            }

            return View(serie);
        }

        [Authorize(Roles = "Admin")]
        // GET: Series/Create
        public async Task<IActionResult> Create(int? GenreID)
        {
            ViewData["Genre"] = await _context.Genres.FirstOrDefaultAsync(s => s.GenreID == GenreID);
            return View();
        }

        // POST: Series/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Create(int? GenreID,[Bind("SeriesID,SeriesName,ReleaseDate,Description,GenreID")] Serie serie)
        {
            ViewData["Genre"] = await _context.Genres.FirstOrDefaultAsync(g => g.GenreID == GenreID);
            if (ModelState.IsValid)
            {
                _context.Add(serie);
                await _context.SaveChangesAsync();
                return RedirectToAction("Details", "Genres", new { Id = GenreID });
            }
            return View(serie);
        }

        private bool SerieExists(int id)
        {
            return _context.Series.Any(e => e.SeriesID == id);
        }
    }
}
