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
    message: document.getElementById("message") // Asigno a la variable message el h5 con id message del Díalogo;
};

function Musico(id, name, group, age, bday, [first, second, third])
{
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.group = group;
    this.age = age;
    this.bday = bday;
    this.first = first;
    this.second = second;
    this.third = third;
    this.showData = showData;
}

(function(){
  // AQUI - Recupera la colección del localStorage y muestralo en la tabla
  DOM.miFormulario.addEventListener("submit", guardarObjeto);
})()

function userProfile()
{

}

let musicos = [];

function guardarObjeto(e)
{
    // AQUI - Llamar a la función constructora del objeto.

    // if (musicos.length == 0)
    // {
    //     let musico1 = new Musico(1, "John Lennon", "The Beatles", 40, 1940, ["Guitarra", "Voz",  ""]);
    //     let musico2 = new Musico(2, "Paul McCartney", "The Beatles", 38, 1942, ["Bajo", "Voz", ""]);
    //     let musico3 = new Musico(3, "George Harrison", "The Beatles", 37, 1943, ["Guitarra", "Voz", "Coros"]);
    //     let musico4 = new Musico(4, "Ringo Start", "The Beatles", 40, 1940, ["Batería", "Voz", "Coros"]);
    //     let musico5 = new Musico(5, "Freddie Mercury", "Queen", 34, 1946, ["Piano", "Voz", ""]);
    //     let musico6 = new Musico(6, "Brian May", "Queen", 33, 1947, ["Guitarra", "Voz", ""]);
    //     let musico7 = new Musico(7, "Roger Taylor", "Queen", 31, 1949, ["Batería", "Coros", ""]);
    //     let musico8 = new Musico(8, "John Deacon", "Queen", 29, 1951, ["Bajo", "Coros", ""]);
    //     let musico9 = new Musico(9, "Paul Simon", "Simon & Garfunkel", 39, 1941, ["Guitarra", "Piano", "Voz"]);
    //     let musico10 = new Musico(10, "Arthur Garfunkel", "Simon & Garfunkel", 39, 1941, ["Guitarra", "Piano", "Voz"]);

    //     // AQUI - Hacer push en la colección.

    //     musicos.push(musico1);
    //     musicos.push(musico2);
    //     musicos.push(musico3);
    //     musicos.push(musico4);
    //     musicos.push(musico5);
    //     musicos.push(musico6);
    //     musicos.push(musico7);
    //     musicos.push(musico8);
    //     musicos.push(musico9);
    //     musicos.push(musico10);
    // }
    // else
    // {
    let options = DOM.miColeccion.options,
    len = options.length,
    data = [],
    i = 0;
    while (i < len)
    {
        if (options[i].selected)
            data[i] = options[i].value;
        i++;
    }

    console.log("La Data es: " + data[0] + " - " + data[1] + " - " + data[2]);

    let id = musicos.length + 1;
    let mName = DOM.staff.value;
    let group = DOM.group.value;
    let bday = DOM.bday.value;
    let now = new Date().getFullYear();
    let yearsOld = now - bday;

    console.log("El Músico pasado es: " + mNane);

    let musico = new Musico(id, mName, group, age, bday, data);
    musicos.push(musico);
    // AQUI - Actualizar la colección en el localStorage.
    localStorage.setItem("Musicos", JSON.stringify(musicos));
    // }

    mostrarObjetoEnTabla(id, DOM.staff.value, DOM.group.value, yearsOld, DOM.bday.value, data[0], data[1], data[2]);
    e.preventDefault(); // Para evitar el envío del formulario
}

function borrarObjeto(id){
  //AQUI - Borrar el objeto de la colección
    alert("Programa esta función para borrar el objeto con id " + id)
    const index = array.indexOf(id);
    array.splice(index, 1);

  //AQUI - Actualizar la colección en el localStorage
    localStorage.removeItem("Musicos");
    localStorage.setItem("Musicos", JSON.stringify(musicos));

  //AQUI - Redibujar la tabla HTML
    guardarObjeto(null);
}

function mostrarObjetoEnTabla(id, mName, group, yearsOld, year, data)
{
  let tr;
  let td;

  tr = document.createElement("tr");
  //
  td = document.createElement("td");
  td.textContent=id;
  tr.appendChild(td);
  //
  td = document.createElement("td");
  td.textContent=mName;
  tr.appendChild(td);
  //
  td = document.createElement("td");
  td.textContent=group;
  tr.appendChild(td);
  //
  td = document.createElement("td");
  td.textContent=yearsOld;
  tr.appendChild(td);
  //
  td = document.createElement("td");
  td.textContent=year;
  tr.appendChild(td);
  //
  td = document.createElement("td");
  td.textContent=data[0];
  tr.appendChild(td);
  //
  td = document.createElement("td");
  td.textContent=data[1];
  tr.appendChild(td);
  //
  td = document.createElement("td");
  td.textContent=data[2];
  tr.appendChild(td);
  //
  DOM.tabla.appendChild(tr); 
}

function showData()
{
    console.log(Musicos[0]);
}

function checkQtty(options) // Función que verifica la cantidad de fotos que se subieron para un evento, máximo 3, recibe el array files, el nombre del input.
{
    if(options.length > 3) // Si la cantidad de archivos agregados es mayor que 3.
    {
        toast(1, "Se ha Superado el Limite", "Has Selecionado Archivos de Más; Se Limitará la Subida Automáticamente a 3 fotos Ordenadas por Nombre o por Número Ascendentemente.");
        // Muestro un diálogo que solo se aceptarán 3 fotos y serán las tres primeras por orden alfabetico o numérico, ascendente.
        let list = []; // Creo una lista nueva del tipo DataTransfer.
        for(let i = 0; i < 3; i++) // Hago un bucle de 0 a 2.
           list.push(options[i])  // Agrego a la lista los 3 primeros Items selecionados.

        DOM.miColeccion = list.options // Pongo en el select, que tiene la ID miColeccion, la lista con los tres archivos.
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