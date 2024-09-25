using Microsoft.AspNetCore.Mvc;

namespace Ejercicio_1.Controllers
{
    public class DespedidaController : Controller
    {
        public string Index(string name, int age, int ID)
        {
            // https://localhost:7178/Despedida/Index/16?name=C%C3%A9sar&age=56 Se pasa a la URL la ID por Segmento y los datos por Query String.
            return $"El usuario con ID: " + ID + " y nombre " + name + " se despide a sus " + age + " años";
        }
    }
}
