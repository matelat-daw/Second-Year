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
    public class SeriesController(SeriesContext context) : Controller
    {

        // GET: Series
        public async Task<IActionResult> Index()
        {
            var seriesContext = context.Series.Include(s => s.Genre);
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

            var serie = await context.Series
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
        public async Task<IActionResult> Create(int? id)
        {
            ViewData["Genre"] = await context.Genres.FirstOrDefaultAsync(s => s.GenreID == id);
            return View();
        }

        // POST: Series/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Admin")]
        //public async Task<IActionResult> Create(int? id,[Bind("SeriesID, SeriesName, ReleaseDate, Description, GenreID")] Series serie)
        //{
        //    ViewData["Genre"] = await context.Genres.FirstOrDefaultAsync(g => g.GenreID == id);
        //    if (ModelState.IsValid)
        //    {
        //        context.Add(serie);
        //        await context.SaveChangesAsync();
        //        return RedirectToAction("Details", "Genres", new { Id = id });
        //    }
        //    return View(serie);
        //}

        public async Task<IActionResult> Create(int? id, [Bind("SeriesName, ReleaseDate, Description, GenreID")] Series serie)
        {
            ViewData["Genre"] = await context.Genres.FirstOrDefaultAsync(g => g.GenreID == id);
            if (ModelState.IsValid)
            {
                context.Add(serie);
                await context.SaveChangesAsync();
                return RedirectToAction("Details", "Genres", new { Id = id });
            }
            return View(serie);
        }
    }
}