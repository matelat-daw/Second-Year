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
    
    public class RecommendationsController : Controller
    {
        private readonly SeriesContext _context;

        public RecommendationsController(SeriesContext context)
        {
            _context = context;
        }

        // GET: Recommendations
        public async Task<IActionResult> Index()
        {
            var seriesContext = _context.Recommendation.Include(r => r.Serie);
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

            var recommendation = await _context.Recommendation
                .Include(r => r.Serie)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (recommendation == null)
            {
                return NotFound();
            }

            return View(recommendation);
        }

        // GET: Recommendations/Create
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Create(int SerieID)
        {
            ViewData["Serie"] = await _context.Series.FirstOrDefaultAsync(s => s.SeriesID == SerieID);
            return View();
        }

        // POST: Recommendations/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Create(int SerieID, [Bind("Id,Title,Description,SerieId")] Recommendation recommendation)
        {
            ViewData["Serie"] = await _context.Series.FirstOrDefaultAsync(s => s.SeriesID == SerieID);
            if (ModelState.IsValid)
            {
                _context.Add(recommendation);
                await _context.SaveChangesAsync();
                return RedirectToAction("Details", "Series", new { Id = SerieID });
            }
            return View(recommendation);
        }

        private bool RecommendationExists(int id)
        {
            return _context.Recommendation.Any(e => e.Id == id);
        }
    }
}
