const DOM = {
    table: document.getElementById("table"),
    create: document.getElementById("create"),
    update: document.getElementById("update"),
    delete: document.getElementById("delete"),
    id: document.getElementById("id"),
    nombre: document.getElementById("nombre"),
    grupo: document.getElementById("grupo"),
    alertaDelete: document.getElementById("alertaDelete"),
    titleDelete: document.getElementById("titleDelete"),
    messageDelete: document.getElementById("messageDelete"),
    alerta: document.getElementById("alerta"),
    title: document.getElementById("title"),
    message: document.getElementById("message"),
    update: document.getElementById("updateIt")
}

// document.addEventListener("DOMContentLoaded", () => { // Listener que es Llamado Cuando se Carga el DOM
    crudRead();
    fetch("http://localhost:3000/grupos").then(respuesta => respuesta.json())
        .then(grupos => populateSelect(grupos))
        .catch(error => toast(2, "ERROR:", "Ha Ocurrido el Error: " + error)); // Este fetch Solicita el Objeto Grupos al Servidor, y si Todo es Correcto le pasa el Objeto con los Grupos a la Función populateSelect(grupos).
//   });

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
            deleteAlumno("Se Eliminara un Alumno:", "Estas Seguro que Quieres Eliminar el Usuario con ID: " + DOM.id.value); // Muestra el Diálogo de Confirmación Para Eliminar, se Puede Cancelar o Acaptar.
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
        if (DOM.id.value == "") // Verifico los Campos del Formulario, Si la ID Está Vacia.
        {
            if (DOM.nombre.value != "" && DOM.grupo.value != "") //  Verifico si los Campos Nombre y Grupo Tienen Datos
            {
                crudCreate(); // Llamo al Método crudCreate().
            }
            else // Si No.
            {
                toast(1, "Falta Datos:", "¿Te Dejaste Algún Campo en Blanco? Verifica que Hayas Rellenado Todos los Datos"); // Mensaje de Error.
            }
        }
        else // Si No.
        {
            toast(1, "Actualizas Datos:", "Escribiste una ID, ¿Tal Vez Estés Intentando Actualizar un Alumno? Verifica si Has Pulsado el Botón Correcto. Gracias"); // Mensaje de Error.
        }
    }
    else // Si la String Recibida no es create(es update).
    {
        if (DOM.id.value != "" && DOM.nombre.value != "" && DOM.grupo.value != "") // Verifico los Campos del Formulario, Si Todos los Campos Tienen Datos.
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
                                                .catch(respuesta => toast(2, "Error de Conexión", "Lo Siento No hay Conexión con el Servidor. Asegurate de que el Servidor está en Ejecución. Error" + respuesta))
                                                .then(jsonData => drawTable(jsonData)); // Después de Leer los Datos del Servidor, Llamo a la función drawTable, Pasandole por Parametro los Datos.
}

function drawTable(data) // Dibuja la Tabla con los Datos del Servidor.
{
    let head = "<thead><tr><th>ID</th><th>Nombre</th><th>Grupo</th><th>Acciones</th></tr></thead>";
    let body = "";
    data.map(alumno => {
        body += `<tr><td> ${alumno.id} </td><td> ${alumno.nombre} </td><td> ${alumno.grupo} </td><td><input id="update" type="button" onclick="populateForm(${alumno.id}, '${alumno.nombre}', '${alumno.grupo}')" value="Actulizar Alumno" class="btn btn-primary">&nbsp;<input id="delete" type="button" onclick="crudDelete(${alumno.id})" value="Eliminar Alumno" class="btn btn-danger"></td></tr>`;
    });

    table.innerHTML = head.concat(body);
}

function populateForm(id, nombre, grupo)
{
    DOM.id.value = id;
    DOM.nombre.value = nombre;
    DOM.grupo.value = grupo;
    DOM.update.style.display = "block";
}

function formClean()
{
    DOM.id.value = "";
    DOM.nombre.value = "";
    DOM.grupo.value = "";
}

function crudCreate()
{
    let datosCreate = {
        nombre: DOM.nombre.value,
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
    // .then(response1 => toast(0, "Alumno Nuevo:", "Se Ha Agregado un Nuevo Alumno a la Base de Datos." + response1))
    .then(responce => formClean());
}

function crudUpdate(id)
{
    datosUpdate = {
        nombre: DOM.nombre.value,
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
    .then(responce => formClean());
    // .then( response => console.log("Se ha Actualizado el Usaurio: " + response))
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

function deleteAlumno(ttl, msg)
{
    DOM.titleDelete.innerHTML = ttl; // Muestro los mensajes en el diálogo.
    DOM.messageDelete.innerHTML = msg;
    DOM.alertaDelete.click(); // Lo hago aparecer pulsando el botón con ID alertaDelete.
}