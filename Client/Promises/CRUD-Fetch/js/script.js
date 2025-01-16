const DOM = {
    result: document.getElementById("result"),
    result2: document.getElementById("result2"),
    result3: document.getElementById("result3"),
    result4: document.getElementById("result4"),
    resultError: document.getElementById("resultError"),
    name: document.getElementById("name"),
    grupo: document.getElementById("grupo"),
    hidden: document.getElementById("hidden")
}

DOM.grupo.option.value = fetch("http://localhost:3000/grupos")

function unhide()
{
    DOM.hidden.style.display = "block";
}

function checkForm(e)
{
    e.preventDefault();
    if (DOM.name.value != "" && DOM.grupo.value != "")
    {
        crudCreate();
        DOM.hidden.style.display = "none";
    }
    else
    {
        alert("Te Dejaste Algún Campo en Blanco.");
    }
    return false;
}

function crudRead()
{
    fetch("http://localhost:3000/alumnos").then(respuesta => respuesta.json())
                                        .then(jsonData => result.innerHTML = JSON.stringify(jsonData));
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
    .then(response => result2.innerHTML = "Se ha Creado el Alumno : " + JSON.stringify(response));
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
    .then( response => result3.innerHTML = "Se ha Actualizado el Usaurio: " + response)
}

function crudDelete(id)
{
    fetch("http://localhost:3000/alumnos/" + id, {
        method: "DELETE"
        
    }).then(res => res.json)
    .catch(error => resultError.innerHTML = "Error al Intentar Eliminar: " + error)
    .then(respuesta => result4.innerHTML = "Se ha Eliminado el Alumno.")
}