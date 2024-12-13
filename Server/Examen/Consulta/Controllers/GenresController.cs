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
    public class GenresController : Controller
    {
        private readonly SeriesContext _context;

        public GenresController(SeriesContext context)
        {
            _context = context;
        }

        // GET: Genres
        public async Task<IActionResult> Index()
        {
            return View(await _context.Genres.Include(g => g.Series).OrderByDescending(g => g.GenreName).ToListAsync());
        }

        // GET: Genres/Details/5
        [Authorize(Roles = "Admin, Manager")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var genre = await _context.Genres
                .Include(g => g.Series)
                .FirstOrDefaultAsync(m => m.GenreID == id);
            if (genre == null)
            {
                return NotFound();
            }

            return View(genre);
        }

        private bool GenreExists(int id)
        {
            return _context.Genres.Any(e => e.GenreID == id);
        }
    }
}
