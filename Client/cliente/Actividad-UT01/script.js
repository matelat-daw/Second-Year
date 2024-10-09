//DOM static selector
const DOM = {
    miFormulario: document.getElementById("mi_formulario"), // ID del Formulario.
    idioma: document.getElementById("idioma"), // Selector de Idioma.
    group: document.getElementById("group"), // Input que Contiene el Grupo de Música.
    staff: document.getElementById("staff"), // Input que Contiene el Nombre del Músico.
    bday: document.getElementById("bday"), // Input con la Fecha de Nacimiento del Músico.
    miColeccion: document.getElementById("mi_coleccion"), // Selector de Instrumentos de los Músicos.
    tbody: document.getElementById("tabla_coleccion"), // Cuerpo de la Tabla Donde se muestran los Datos de los Músicos.
    date: document.getElementById("date"), // Muestra la Fecha en el Idioma Seleccionado por el Usuario.
    time: document.getElementById("time"), // Muestra el Reloj.
    alerta: document.getElementById("alerta"), // La ID del botón del dialogo.
    title: document.getElementById("title"), // Asigno a la variable title el h4 con id title del Diálogo.
    message: document.getElementById("message"), // Asigno a la variable message el h5 con id message del Díalogo;
    delete: document.getElementById("delete") // ID del botón para Borrar un Músico.
};

function Musico(id, group, name, age, bday, data) // Función que se Usa para Crear un Objeto de la Clase Musico.
{
    this.id = id;
    this.group = group;
    this.name = name;
    this.age = age;
    this.bday = bday;
    this.data = data.join(" - ");
    // this.second = data[1];
    // this.third = data[2];
}

let lSM = localStorage.getItem("Musicos"); // ASigna a lSM lo almacenado en localStorage Musicos.
let lSID = localStorage.getItem("ID"); // Asigna a lSID lo almacenado en localStorage ID.
if (lSID === null) // Si en localStorage ID no hay nada es null
{
    localStorage.setItem("ID", 1); // Le Asigna el Valor 1, Será la Primera ID de los Músicos.
}
let musicos = []; // Declaro el Array musicos, contendrá todos los Objertos musico.

(function(){
  // AQUI - Recupera la colección del localStorage y muestralo en la tabla
    if (lSM !== null) // Si el localStorage Musicos no es null.
    {
            musicos = JSON.parse(localStorage.getItem("Musicos")); // Hago el JSON.parse a la cadena almacenada en localStorage Musicos y lo asigno al Array musicos.
            mostrarObjetoEnTabla(musicos); // Llamo a la función mostrarObjetoEnTabla y le paso el Array con los Músicos.
    }
  DOM.miFormulario.addEventListener("submit", guardarObjeto); // Captura el evento click del Botón Submit del Fomulario con ID miFormulario.
})()

function guardarObjeto(e) // Función que Guarda los Objetos, Recive el Evento.
{
    let options = DOM.miColeccion.options; // Asigna a la Variable options Todas las Opciones del Selector.
    let len = options.length; // Obtiene la Cantidad de opciones(options es un array y tiene tamaño length).
    let data = []; // El Array data Contendrá los Atributos Instrumentos de los Músicos.
    let i = 0; // Será el Índice del Array de Datos.
    let j = 0; // J Cuenta Hasta la cantidad de Options del Selector.
    while (j < len && i < 4) // Mientras j sea Menor que la cantidad de opciones e i sea Menor que 4
    {
        if (options[j].selected) // Si Está Seleccionada la Opción.
        {
            data[i] = options[j].value; // Agrega el Valor de la Opción al Array data en la Posición i.
            i++; // Incrementa el Índice del Array data.
        }
        j++; // Incrementa j.
    }

    let ID = parseInt(localStorage.getItem("ID")); // Obtengo en la variable ID la ID de localStorage ID.
    let group = DOM.group.value; // Asigna a group el contenido del input con ID group.
    let mName = DOM.staff.value; // Asigna a mName el contenido del input con ID staff(Nombre del Músico).
    let bday = DOM.bday.value; // Asigna a bday el contenido del input con ID bday.
    let now = new Date().getFullYear(); // Asigna a now El Corriente Año.
    let yearsOld = now - bday; // Asigna a yearsOld el Resultado de Restar al Año Actual el Año de Nacimiento del Músico.

    let musico = new Musico(ID, group, mName, yearsOld, bday, data); // Crea un Nuevo Músico Llamando al Constructor de la Función Musico.
    musicos.push(musico); // Agrega el Músico al Array musicos.

    mostrarObjetoEnTabla(musicos); // Muestra en la Tabla la Lista de Músicos.
    // AQUI - Actualizar la colección en el localStorage.

    localStorage.setItem("ID", JSON.stringify(++ID)); // Incrementa localStorage ID, Hay que Preincrementar, si no Nunca se Produce el Incremento.
    localStorage.setItem("Musicos", JSON.stringify(musicos)); // Almacena los Músicos en localStorage.

    DOM.miFormulario.reset(); // Limpia el Formulario.

    e.preventDefault(); // Para evitar el envío del formulario
}

function borrarObjeto(id) // Función para Eliminar un Músico del Array de Músicos.
{
  //AQUI - Borrar el objeto de la colección
    // alert("Programa esta función para borrar el objeto con id " + id)
    const index = musicos.findIndex(item => item.id == id); // Asigna a index el Índice del Objeto en el Array musicos.

    if (index > -1) // Si el Índice Existe es diferente de -1.
    {
        musicos.splice(index, 1); // Elimina el Objeto del Array por su Índice.
    }

  //AQUI - Actualizar la colección en el localStorage

    localStorage.setItem("Musicos", JSON.stringify(musicos)); // Almacena los Músicos en localStorage.

  //AQUI - Redibujar la tabla HTML

    mostrarObjetoEnTabla(musicos); // Muestra los Músicos en la Tabla.
}

function mostrarObjetoEnTabla(musicos) // Muestro los Músicos en el Cuerpo de la Tabla(tbody).
{
  let tr; // Fila.
  let td; // Columna.
  DOM.tbody.innerHTML = ""; // Limpio el Contenido del body de la Tabla Donde Están las Columnas con los Datos de los Músicos.

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
        td.textContent = musico.data;
        tr.appendChild(td);
        //
        // td = document.createElement("td");
        // td.textContent = musico.second;
        // tr.appendChild(td);
        // //
        // td = document.createElement("td");
        // td.textContent = musico.third;
        // tr.appendChild(td);
        //
        DOM.tbody.appendChild(tr); // Adjunto al Cuerpo de la Tabla la Fila con todas las Columnas Creadas con Todos los Datos de los Músicos.
    });
}

function checkQtty() // Función que verifica la cantidad de Instrumentos que se seleccionaron, máximo 3.
{
    let options = DOM.miColeccion.options;
    let len = options.length;
    let i = 0; // Cantidad de Items Seleccionados.
    let j = 0; // J contiene el tamaño del selector.
    while (j < len)
    {
        if (options[j].selected) // Si está seleccionado.
        {
            i++;
        }
        j++;
    }
    if(i > 3) // Si la cantidad items seleccionados es mayor que 3.
    {
        toast(1, "Se ha Superado el Limite", "Has Selecionado Más de Tres Opciones, Se Limitará la Subida Automáticamente a las 3 Primeras Opciones Seleccionadas.");
    }       
}

function showDate(country) // Función que Muestra la Fecha en el Idioma Seleccionado por el Usuario.
{
  let localDate = new Intl.DateTimeFormat(country, {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
    }).format(new Date());

    DOM.date.innerHTML = "La Fecha es: " + localDate;
    updateTime(); // Llama a la Función updateTime() que Muestra el Reloj en Pnatalla.
    setInterval(updateTime, 1000); // Y la Llama cada 1000 milisegundos(1 segundo).
}

function updateTime() // Muestra el Reloj en Pantalla.
{
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

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
    DOM.alerta.click(); // Lo hago aparecer Usando la Función click() del botón con ID alerta.
}