const DOM = {
    table: document.getElementById("table"),
    create: document.getElementById("create"),
    update: document.getElementById("update"),
    delete: document.getElementById("delete"),
    id: document.getElementById("id"),
    name: document.getElementById("name"),
    grupo: document.getElementById("grupo")
}

document.addEventListener("DOMContentLoaded", () => { // Listener que es Llamado Cuando se Carga el DOM
    crudRead();
    fetch("http://localhost:3000/grupos").then(respuesta => respuesta.json())
        .then(grupos => populateSelect(grupos))
        .catch(error => toast(2, "ERROR:", "Ha Ocurrido el Error: " + error)); // Este fetch Solicita el Objeto Grupos al Servidor, y si Todo es Correcto le pasa el Objeto con los Grupos a la Función populateSelect(grupos).
  });

function populateSelect(options) // Rellena las Opciones del Select al Cargar la Página, Recibe el Objeto con los Grupos.
{
    options.map(grupo => {
        let option = document.createElement("option"); // Creo una Option para el Select.
        option.text = "Grupo: " + grupo.grupo; // Le Asigno el Grupo al Texto para Mostrar.
        option.value = grupo.grupo; // Asigno al Valor de Option el Grupo.
        DOM.grupo.add(option); // Agrego el Option al Select con ID grupo.
      });
}

function checkForm(e) // Al Pulsar Cualquier de los Botónes Llama a este Método y le Pasa el Evento.
{
    if (e.target == DOM.create) // Si se Pulsó el Botón Create.
    {
        verify("create"); // Llama al Método Verify Pasandole Como Parámetro la string create.
    }
    else if (e.target == DOM.update) // Si no, Si El botón Pulsado es Update.
    {
        verify("update"); // Llama al Método Verify Pasandole Como Parámetro la string update.
    }
    else // Si no se Pulso Ninguno de los Botones Anteriores, se Pulso Delete.
    {
        if (DOM.id.value != "") // Verifico si el Campo ID NO está Vacio.
        {
            deleteAlumno("Estas Seguro que Quieres Eliminar el Usuario con ID: " + DOM.id.value);
            // crudDelete(DOM.id.value); // Si no Está Vacio Llamo al Método crudDelete, Pasandole como Parámetro la ID (El Valor del Campo con ID id).
        }
        else // Si el Campo Está Vacio.
        {
            toast(1, "Faltan la ID:", "Para Eliminar un Alumno Debes Pasar su ID. Verifica que Hayas Rellenado el Campo ID. Gracias"); // Mensaje de Errorr.
        }
    }
}

function verify(what) // Método para Verificar si se Pulsó Create o Update, Recibe como Parámetro una String
{
    if (what == "create") // Si la String Recivida es create.
    {
        if (DOM.id.value == "" && DOM.name.value != "" && DOM.grupo.value != "") // Verifico los Campos del Formulario, Si la ID Está Vacia y los Campos Nombre y Grupo Tienen Datos.
        {
            crudCreate(); // Llamo al Método crusCreate()
        }
        else // Si No.
        {
            toast(1, "Faltan Datos:", "¿Te Dejaste Algún Campo en Blanco? o Quisas Escribiste una ID, tal Vez Estés Intentando Actualizar un Alumno. Verifica que Hayas Rellenado Todos los Datos y que Hayas Pulsado el Botón Correcto. Gracias"); // Mensaje de Error.
        }
    }
    else // Si la String Recibida no es create.
    {
        if (DOM.id.value != "" && DOM.name.value != "" && DOM.grupo.value != "") // Verifico los Campos del Formulario, Si la ID Tiene Datos y los Campos Nombre y Grupo Tienen Datos.
        {
            crudUpdate(DOM.id.value); // Llamo al Método crudUpdate, Pasandole Como Parametro la ID del Campo id del Formulario.
        }
        else // Si No.
        {
            toast(1, "Faltan Datos:", "¿Te Dejaste Algún Campo en Blanco?. Verifica que Hayas Rellenado Todos los Datos. Gracias"); // Mensaje de Error.
        }
    }
}

async function crudRead()
{
    await fetch("http://localhost:3000/alumnos").then(respuesta => respuesta.json())
                                        .then(jsonData => drawTable(jsonData));
}

function drawTable(data)
{
    let head = "<thead><tr><th>ID</th><th>Nombre</th><th>Grupo</th></tr></thead>";
    let body = "";
    data.map(alumno => {
        body += `<tr><td> ${alumno.id} </td><td> ${alumno.nombre} </td><td> ${alumno.grupo} </td></tr>`;
    });

    table.innerHTML = head.concat(body);
}

function crudCreate()
{
    let datosCreate = {
        nombre: DOM.name.value,
        grupo: DOM.grupo.value
    }
    fetch("http://localhost:3000/alumnos", {
        method: "POST",
        body: JSON.stringify(datosCreate),
        headers: {
            "Content-Type": "application/json"
        },
    }).then(res => res.json())
    .catch(error => toast(2, "", "Error al Crear: " + error))
    .then(response1 => toast(0, "Alumno Nuevo:", "Se Ha Agregado un Nuevo Alumno a la Base de Datos." + response1))
    .then(responce2 => console.log("Se Ha Creado el Alumno: " + responce2));
}

function crudUpdate(id)
{
    datosUpdate = {
        nombre: DOM.name.value,
        grupo: DOM.grupo.value
    }
    fetch("http://localhost:3000/alumnos/" + id, {
        method: "PATCH",
        body: JSON.stringify(datosUpdate),
        headers: {
            "Content-Type": "application/json"
        },
    }).then(res => res.json())
    .catch(error => resultError.innerHTML = "Error al Actualizar: " + error)
    .then( response => console.log("Se ha Actualizado el Usaurio: " + response))
}

function crudDelete(id)
{
    fetch("http://localhost:3000/alumnos/" + id, {
        method: "DELETE"
        
    }).then(res => res.json)
    .catch(error => toast(2, "La ID No Existe", "Error al Intentar Eliminar. Parece que esa ID de Alumno no es Valida."))
    // .catch(error => resultError.innerHTML = "Error al Intentar Eliminar. Parece que esa ID de Alumno no Existe." + error)
    .then(respuesta => toast(0, "Alumno Eliminado:", "Se Ha Eliminado el Alumno con ID: " + id))
}

function toast(warn, ttl, msg) // Función para mostrar el Dialogo con los mensajes de alerta, recibe, Código, Título y Mensaje.
{
    var alerta = document.getElementById("alerta"); // La ID del botón del dialogo.
    var title = document.getElementById("title"); // Asigno a la variable title el h4 con id title.
    var message = document.getElementById("message"); // Asigno a la variable message el h5 con id message;
    if (warn == 1) // Si el código es 1, es una alerta.
    {
        title.style.backgroundColor = "#000000"; // Pongo los atributos, color de fondo negro.
        title.style.color = "yellow"; // Y color del texto amarillo.
    }
    else if (warn == 0) // Si no, si el código es 0 es un mensaje satisfactorio.
    {
        title.style.backgroundColor = "#FFFFFF"; // Pongo los atributos, color de fondo blanco.
        title.style.color = "blue"; // Y el color del texto azul.
    }
    else // Si no, viene un 2, es una alerta de error.
    {
        title.style.backgroundColor = "#000000"; // Pongo los atributos, color de fondo negro.
        title.style.color = "red"; // Y color del texto rojo.
    }
    title.innerHTML = ttl; // Muestro el Título del dialogo.
    message.innerHTML = msg; // Muestro los mensajes en el diálogo.
    alerta.click(); // Lo hago aparecer pulsando el botón con ID alerta.
}

function deleteAlumno(msg)
{
    var alertaDelete = document.getElementById("alertaDelete");
    var message = document.getElementById("message2");

    message.innerHTML = msg; // Muestro los mensajes en el diálogo.
    alertaDelete.click(); // Lo hago aparecer pulsando el botón con ID alertaDelete.
}