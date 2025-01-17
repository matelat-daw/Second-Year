const DOM = {
    resultError: document.getElementById("resultError"),
    table: document.getElementById("table"),
    create: document.getElementById("create"),
    update: document.getElementById("update"),
    delete: document.getElementById("delete"),
    id: document.getElementById("id"),
    name: document.getElementById("name"),
    grupo: document.getElementById("grupo"),
    hidden: document.getElementById("hidden")
}

document.addEventListener("DOMContentLoaded", () => {
    crudRead();
    fetch("http://localhost:3000/grupos").then(respuesta => respuesta.json())
        .then(options => populateSelect(options))
  });

function populateSelect(options)
{
    options.map(grupo => {
        let option = document.createElement("option");
        option.text = grupo.grupo;
        option.value = grupo.grupo;
        DOM.grupo.add(option);
      });
}

function unhide()
{
    DOM.hidden.style.display = "block";
}

function checkForm(e)
{
    e.preventDefault();
    if (e.target == DOM.create)
    {
        console.log("Presioné: " + DOM.create.value);
        verify("create");
    }
    else if (e.target == DOM.update)
    {
        console.log("Presioné: " + DOM.update.value);
        verify("update")
    }
    else
    {
        if (DOM.id.value != null)
            crudDelete(DOM.id.value)
    }
    
    return false;
}

function verify(what)
{
    if (what == "create")
    {
        if (DOM.id.value == null && DOM.name.value != "" && DOM.grupo.value != "")
        {
            crudCreate();
            DOM.hidden.style.display = "none";
        }
        else
        {
            alert("Te Dejaste Algún Campo en Blanco.");
        }
    }
    else
    {
        if (DOM.id.value != null && DOM.name.value != "" && DOM.grupo.value != "")
        {
            crudCreate();
            DOM.hidden.style.display = "none";
        }
        else
        {
            alert("Te Dejaste Algún Campo en Blanco.");
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
        body += "<tr><td>" + alumno.id + "</td><td>" + alumno.nombre + "</td><td>" + alumno.grupo + "</td></tr>";
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
    .catch(error => resultError.innerHTML = "Error al Crear: " + error)
    // .then(response => result2.innerHTML = "Se ha Creado el Alumno : " + JSON.stringify(response));
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
    // .then( response => result3.innerHTML = "Se ha Actualizado el Usaurio: " + response)
}

function crudDelete(id)
{
    fetch("http://localhost:3000/alumnos/" + id, {
        method: "DELETE"
        
    }).then(res => res.json)
    .catch(error => resultError.innerHTML = "Error al Intentar Eliminar. Parece que esa ID de Alumno no Existe." + error)
    // .then(respuesta => result4.innerHTML = "Se ha Eliminado el Alumno.")
}