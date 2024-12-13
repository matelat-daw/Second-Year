using Microsoft.EntityFrameworkCore;
using PO02_01.Data;
using Microsoft.AspNetCore.Identity;

var builder = WebApplication.CreateBuilder(args);

var seriesConnectionString = builder.Configuration.GetConnectionString("SeriesConnection") ?? throw new InvalidOperationException("Connection string 'SeriesConnection' not found.");
builder.Services.AddDbContext<SeriesContext>(options => options.UseSqlServer(seriesConnectionString));
var leslieConnectionString = builder.Configuration.GetConnectionString("LeslieSeriesConnection") ?? throw new InvalidOperationException("Connection string 'LeslieSeriesConnection' not found.");
builder.Services.AddDbContext<LeslieContext>(options => options.UseSqlServer(leslieConnectionString));

builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = false)
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<LeslieContext>();

// Add services to the container.
builder.Services.AddControllersWithViews();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();

app.Run();
