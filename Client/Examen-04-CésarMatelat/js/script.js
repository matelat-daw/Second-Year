const DOM = {
    form: document.getElementById("frmsolicitud"),
    form_submit: document.getElementById("submit"),
    nombre: document.getElementById("nombre"),
    dni: document.getElementById("dni"),
    mayor_edad: document.getElementById("mayor-edad"),
    sexo: document.getElementById("sexo"),
    cod_postal: document.getElementById("cod-postal"),
    deportes: document.getElementById("select-deportes"),
    sports: document.querySelectorAll("options")
}

const ERROR = {
    error_nombre: document.getElementById("error_nombre"),
    error_dni: document.getElementById("error_dni"),
    error_cod_postal: document.getElementById("error_cod-postal"),
    error_deportes: document.getElementById("error_deportes"),
}

let error;
checkErrors();

function checkErrors()
{
    error = false;
    Object.keys(ERROR).forEach(key =>
    {
        const element = ERROR[key];
        switch(key)
        {
            case "error_nombre":
                if (DOM.nombre.validationMessage)
                {
                    element.innerHTML = DOM.nombre.validationMessage;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                    element.style.visibility = "hidden";
                }
                break;
            case "error_dni":
                if (DOM.dni.validationMessage)
                {
                    element.innerHTML = DOM.dni.validationMessage;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                    element.style.visibility = "hidden";
                }
                break;
            case "error_cod_postal":
                if (DOM.cod_postal.validationMessage)
                {
                    element.innerHTML = DOM.cod_postal.validationMessage;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                    element.style.visibility = "hidden";
                }
                break;
            case "error_deportes":
                if (DOM.deportes.validationMessage)
                {
                    element.innerHTML = DOM.cod_postal.validationMessage;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                    element.style.visibility = "hidden";
                }
                break;
        }
    });
    return error;
}

let sports = []; // Array de Aficiones, Contendrá las Aficiones Seleccionadas de los Checkboxes, Hay que Agregar un Event Listener a cada Checkbox.

function checkSports() // Función Para Verificar la Cantidad de Aficiones que se Han Añadido.
{
    DOM.deportes.forEach(option => {
        option.addEventListener("click", () => {
            if (option.selected) {
                sports.push(option.value);
            } else {
                fixSports(option.value);
            }
            checkSports();
        });
    });
    if (sports.length >= 1) // Si en el Array Hay Más de 1.
    {
        DOM.error_deportes.style.visibility = "hidden"; // Oculta el Mensaje Selecciona al Menos 2 Aficiones.
    }
    else // Si no Hay 1 o Más de 1 Afición.
    {
        DOM.error_deportes.style.visibility = "visible"; // Muestra el Mensaje.
    }
}

function fixSports(sport) // Función fixHobbies Recibe el Valor del Input Type Checkbox.
{
    let index = sports.indexOf(sport); // Obtiene el Índice en el Array.
    sports.splice(index, 1); // Lo Elimina del Array.
}

DOM.mayor_edad.addEventListener("click", function()
{
    if (DOM.mayor_edad.checked)
    {
        DOM.mayor_edad.value = "S";
    }
    else
    {
        DOM.mayor_edad.disabled;
        DOM.mayor_edad.checked;
        DOM.mayor_edad.value = "N";
    }
});

DOM.deportes.addEventListener("click", () => {
    checkSports();
});

DOM.form_submit.addEventListener("click", () => {
    checkErrors();
});

DOM.form.addEventListener("submit", (e) => {
    if (checkErrors()) {
        e.preventDefault();
    } else {
        DOM.sports.value = sports.join(", ");
    }
});