const DOM = {
    result: document.getElementById("result"),
    result2: document.getElementById("result2"),
    result3: document.getElementById("result3"),
    result2: document.getElementById("result2"),
    result3: document.getElementById("result3"),
    resultError: document.getElementById("resultError")
}

function crudRead()
{
    fetch("http://localhost:3000/alumnos").then(respuesta => respuesta.json())
                                        .then(jsonData => result.innerHTML = JSON.stringify(jsonData));
}

function crudCreate()
{
    let datosCreate = {
        nombre: "Pedro",
        grupo: "A"
    }
    fetch("http://localhost:3000/alumnos", {
        method: "POST",
        body: JSON.stringify(datosCreate),
        headers: {
            "Content-Type": "application/json"
        },
    }).then(res => res.json())
    .catch(error => resultError.innerHTML = "Error al Crear: " + error)
    .then(response => result2.innerHTML = "Se ha Creado el Alumno : " + JSON.stringify(response))
}

function crudUpdate()
{
    datosUpdate = {
        nombre: "Evangelina",
        grupo: "A"
    }
    fetch("http://localhost:3000/alumnos/2", {
        method: "PATCH",
        body: JSON.stringify(datosUpdate),
        headers: {
            "Content-Type": "application/json"
        },
    }).then(res => res.json())
    .catch(error => resultError.innerHTML = "Error al Actalizar: " + error)
    then( response => result3.innerHTML = "Se ha Actualizado el Usaurio: " + response)
}

function crudDelete()
{
    fetch("http://localhost:3000/alumnos/3", {
        method: "DELETE"
        
    }).then(res => res.json)
    .catch(error => resultError.innerHTML = "Ha Habido un Error: " + error)
    .then(respuesta => result4.innerHTML = "Se ha Eliminado el Alumno.")
}