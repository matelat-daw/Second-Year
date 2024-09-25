using Microsoft.AspNetCore.Mvc;

namespace Ejercicio_1.Controllers
{
    public class SaludaLocalidadController : Controller
    {
        public string Index(string localidad)
        {
            // https://localhost:7178/SaludaLocalidad?localidad=El%20Sauzal Se pasa por Query String el dato, Nombre de la Localidad.
            return $"Hola a {localidad}";
        }
    }
}
