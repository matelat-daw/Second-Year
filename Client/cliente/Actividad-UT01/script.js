//DOM static selector
const DOM = {
    miFormulario: document.getElementById("mi_formulario"),
    idioma: document.getElementById("idioma"),
    group: document.getElementById("group"),
    staff: document.getElementById("staff"),
    bday: document.getElementById("bday"),
    miColeccion: document.getElementById("mi_coleccion"),
    tabla: document.getElementById("tabla_coleccion"),
    date: document.getElementById("date"),
    time: document.getElementById("time"),
    alerta: document.getElementById("alerta"), // La ID del botón del dialogo.
    title: document.getElementById("title"), // Asigno a la variable title el h4 con id title del Diálogo.
    message: document.getElementById("message"), // Asigno a la variable message el h5 con id message del Díalogo;
    delete: document.getElementById("delete")
};

function Musico(id, name, group, age, bday, data)
{
    this.id = id;
    this.name = name;
    this.group = group;
    this.age = age;
    this.bday = bday;
    this.first = data[0];
    this.second = data[1];
    this.third = data[2];
}

(function(){
  // AQUI - Recupera la colección del localStorage y muestralo en la tabla
  DOM.miFormulario.addEventListener("submit", guardarObjeto);
})()

function userProfile()
{

}

let musicos = [];
let musicoIndex = 1;

function guardarObjeto(e)
{
    let options = DOM.miColeccion.options,
    len = options.length;
    data = [],
    i = 0;
    let j = 0; // J contiene el tamaño del selector
    while (j < len && i < 4)
    {
        if (options[j].selected) // Si está seleccionado
        {
            data[i] = options[j].value;
            i++;
        }
        j++;
    }

    let id = musicoIndex;
    musicoIndex++;
    let mName = DOM.staff.value;
    let group = DOM.group.value;
    let bday = DOM.bday.value;
    let now = new Date().getFullYear();
    let yearsOld = now - bday;

    console.log("El Músico pasado es: " + mName);

    let musico = new Musico(id, mName, group, yearsOld, bday, data);
    musicos.push(musico);

    mostrarObjetoEnTabla(musicos);
    // AQUI - Actualizar la colección en el localStorage.
    localStorage.clear();
    localStorage.setItem("Musicos", JSON.stringify(musicos));

    DOM.group.value = "";
    DOM.staff.value = "";
    DOM.bday.value = "";
    DOM.miColeccion.value = "";
    yearsOld = 0;

    e.preventDefault(); // Para evitar el envío del formulario
}

function borrarObjeto(id, e)
{
  //AQUI - Borrar el objeto de la colección
    // alert("Programa esta función para borrar el objeto con id " + id)
    // const index = musicos.indexOf(id);
    const index = musicos.findIndex(item => item.id == id);
    musicos.splice(index, 1);

  //AQUI - Actualizar la colección en el localStorage
    // localStorage.removeItem("Musicos");
    localStorage.clear();
    localStorage.setItem("Musicos", JSON.stringify(musicos));

  //AQUI - Redibujar la tabla HTML
    // guardarObjeto(e);

    mostrarObjetoEnTabla(musicos)
}

// function mostrarObjetoEnTabla(id, mName, group, yearsOld, year, data)
function mostrarObjetoEnTabla(musicos)
{
  let tr;
  let td;
  DOM.tabla.innerHTML = "";

  musicos.forEach(musico => {
        tr = document.createElement("tr");
        //
        td = document.createElement("td");
        td.textContent = musico.id;
        tr.appendChild(td);
        //
        td = document.createElement("td");
        td.textContent = musico.name;
        tr.appendChild(td);
        //
        td = document.createElement("td");
        td.textContent = musico.group;
        tr.appendChild(td);
        //
        td = document.createElement("td");
        td.textContent = musico.age;
        tr.appendChild(td);
        //
        td = document.createElement("td");
        td.textContent = musico.bday;
        tr.appendChild(td);
        //
        td = document.createElement("td");
        td.textContent = musico.first;
        tr.appendChild(td);
        //
        td = document.createElement("td");
        td.textContent = musico.second;
        tr.appendChild(td);
        //
        td = document.createElement("td");
        td.textContent = musico.third;
        tr.appendChild(td);
        //
        DOM.tabla.appendChild(tr);
    });
}

function showData()
{
    console.log(Musicos[0]);
}

function checkQtty() // Función que verifica la cantidad de fotos que se subieron para un evento, máximo 3, recibe el array files, el nombre del input.
{
    let options = DOM.miColeccion.options,
    len = options.length;
    data = [],
    i = 0;
    let j = 0; // J contiene el tamalo del selector
    while (j < len)
    {
        if (options[j].selected) // Si está seleccionado
        {
            i++;
        }
        j++;
    }
    if(i > 3) // Si la cantidad items seleccionados es mayor que 3.
    {
        toast(1, "Se ha Superado el Limite", "Has Selecionado Más de Tres Opciones; Se Limitará la Subida Automáticamente a 3 las 3 Primeras.");
    }       
}

function showDate(country)
{
  let localDate = new Intl.DateTimeFormat(country, {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
    }).format(new Date());

    DOM.date.innerHTML = "La Fecha es: " + localDate;
    updateTime();
    setInterval(updateTime, 1000);
}

function updateTime()
{
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format the string with leading zeroes
  const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  DOM.time.innerHTML = clockStr;
}

function toast(warn, ttl, msg) // Función para mostrar el Dialogo con los mensajes de alerta, recibe, Código, Título y Mensaje.
{
    if (warn == 1) // Si el código es 1, es una alerta.
    {
        DOM.title.style.backgroundColor = "#000000"; // Pongo los atributos, color de fondo negro.
        DOM.title.style.color = "yellow"; // Y color del texto amarillo.
    }
    else if (warn == 0) // Si no, si el código es 0 es un mensaje satisfactorio.
    {
        DOM.title.style.backgroundColor = "#FFFFFF"; // Pongo los atributos, color de fondo blanco.
        DOM.title.style.color = "blue"; // Y el color del texto azul.
    }
    else // Si no, viene un 2, es una alerta de error.
    {
        DOM.title.style.backgroundColor = "#000000"; // Pongo los atributos, color de fondo negro.
        DOM.title.style.color = "red"; // Y color del texto rojo.
    }
    DOM.title.innerHTML = ttl; // Muestro el Título del dialogo.
    DOM.message.innerHTML = msg; // Muestro los mensajes en el diálogo.
    DOM.alerta.click(); // Lo hago aparecer pulsando el botón con ID alerta.
}