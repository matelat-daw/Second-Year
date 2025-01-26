const DOM = {
    form: document.getElementById("form"),
    form_submit: document.getElementById("form_submit"),
    username: document.getElementById("username"),
    pass: document.getElementById("pass"),
    check: document.getElementById("check"),
    userdata: document.getElementById("userdata"),
    surname: document.getElementById("surname"),
    phone: document.getElementById("phone"),
    cp: document.getElementById("cp"),
    year: document.getElementById("year"),
    document: document.getElementById("document"),
    dni: document.getElementById("dni"),
    par: document.getElementById("par"),
    emp: document.getElementById("emp"),
    account: document.getElementById("account_required"),
    title: document.getElementById("title"), // Elemento small.
    desc: document.getElementById("desc"), // Elemeto small.
    tit: document.getElementById("tit"), // Elemento input.
    des: document.getElementById("des"), // Elemento textarea.
    music: document.getElementById("music"),
    handmade: document.getElementById("handmade"),
    sport: document.getElementById("sport"),
    art: document.getElementById("art"),
    games: document.getElementById("games"),
    lecture: document.getElementById("lecture"),
    aficiones: document.getElementById("aficiones"),
    checkboxes: document.querySelectorAll("input[type='checkbox']"),
    hobby: document.getElementById("hobby_required")
};

const ERROR = {
    username_error: document.getElementById("username_error"),
    pass_error: document.getElementById("pass_error"),
    userdata_error: document.getElementById("userdata_error"),
    surname_error: document.getElementById("surname_error"),
    phone_error: document.getElementById("phone_error"),
    cp_error: document.getElementById("cp_error"),
    doc_error: document.getElementById("doc_error"),
    dni_error: document.getElementById("dni_error"),
    account_error: document.getElementById("account_error"),
    anio_error: document.getElementById("anio_error"),
    hobby_error: document.getElementById("hobby_error"),
    title_error: document.getElementById("title_error"),
    desc_error: document.getElementById("desc_error")
};

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
            case "username_error":
                if (DOM.username.validationMessage != "")
                {
                    element.innerHTML = DOM.username.validationMessage;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                }
                break;
            case "pass_error":
                if (DOM.pass.validationMessage != "")
                {
                    element.innerHTML = DOM.pass.validationMessage;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                }
                break;
            case "userdata_error":
                if (DOM.userdata.validationMessage != "")
                {
                    element.innerHTML = DOM.userdata.validationMessage;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                }
                break;
            case "surname_error":
                if (DOM.surname.validationMessage != "")
                {
                    element.innerHTML = DOM.surname.validationMessage;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                }
                break;
            case "phone_error":
                if (DOM.phone.validationMessage != "")
                {
                    element.innerHTML = DOM.phone.validationMessage;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                }
                break;
            case "cp_error":
                if (DOM.cp.validationMessage != "")
                {
                    element.innerHTML = DOM.cp.validationMessage;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                }
                break;
            case "doc_error":
                if (DOM.document.validationMessage != "")
                {
                    element.innerHTML = DOM.document.validationMessage;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                }
                break;
            case "dni_error":
                if (DOM.dni.disabled)
                {
                    element.innerHTML = DOM.dni.validationMessage;
                    error = true;
                }
                else
                {
                    if (DOM.dni.validationMessage != "")
                    {
                        element.innerHTML = DOM.dni.validationMessage;
                        error = true;
                    }
                    else
                    {
                        element.innerHTML = "";
                    }
                }
                break;
            case "account_error":
                if (DOM.account.style.visibility != "hidden")
                {
                    element.innerHTML = DOM.account.innerHTML;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                }
                break;
            case "anio_error":
                if (DOM.year.validationMessage != "")
                {
                    element.innerHTML = DOM.year.validationMessage;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                }
                break;
            case "title_error":
                if (DOM.tit.validationMessage != "")
                {
                    element.innerHTML = DOM.tit.validationMessage;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                }
                break;
            case "desc_error":
                if (DOM.des.validationMessage != "")
                {
                    element.innerHTML = DOM.des.validationMessage;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                }
                break;
            case "hobby_error":
                if (DOM.hobby.style.visibility != "hidden")
                {
                    element.innerHTML = DOM.hobby.innerHTML;
                    error = true;
                }
                else
                {
                    element.innerHTML = "";
                }
                break;
        }
    });
    return error;
}

DOM.form_submit.addEventListener("click", () => {
    checkErrors();
});

DOM.par.addEventListener("click", () => {
    DOM.account.style.visibility = "hidden";
});

DOM.emp.addEventListener("click", () => {
    DOM.account.style.visibility = "hidden";
});

DOM.tit.addEventListener("input", function()
{
    DOM.title.innerHTML = DOM.tit.value.length;
});

DOM.des.addEventListener("input", function()
{
    DOM.desc.innerHTML = DOM.des.value.length;
});

DOM.check.addEventListener("click", function()
{
    togglePass(DOM.pass, DOM.check)
});

DOM.document.addEventListener("change", () =>
{
    enableDNI(DOM.document, DOM.dni)
});

// DOM.form.addEventListener("submit", (e) =>
// {
//     error = checkErrors();
//     if (error)
//     {
//         e.preventDefault();
//         checkErrors();
//     }
//     else
//     {
//         let result = verify(DOM.dni.value);
//         if (!result) // Verifica si el DNI es Correcto.
//         {
//             e.preventDefault();
//         }
//         else
//         {
//             if (hobbies.length <= 1) // Verifica si no se Seleccionó Más de 1 Hobby.
//             {
//                 e.preventDefault();
//             }
//             else // Si se Selecionó Más de 1.
//             {
//                 DOM.aficiones.value = hobbies.join(", ");
//             }
//         }
//     }
// });

DOM.form.addEventListener("submit", (e) => {
    if (checkErrors()) {
        console.log('error');
        e.preventDefault();
    } else if (!verify(DOM.dni.value)){
        e.preventDefault();
    } else if (hobbies.length > 1) {
        DOM.aficiones.value = hobbies.join(", ");
        console.log('error');
    } else
    {
        e.preventDefault();
    }
});

for (var year = 1920 ; year <= 2010; year++) // Bucle para Agregar los Años al Selector del Año de Nacimiento desde 1920 a 2010.
{  
    const option = document.createElement("option");
    option.text = year;
    option.value = year;
    
    DOM.year.appendChild(option);   
}

let hobbies = []; // Array de Aficiones, Contendrá las Aficiones Seleccionadas de los Checkboxes, Hay que Agregar un Event Listener a cada Checkbox.

DOM.checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", () => {
        if (checkbox.id != DOM.check) {
            if (checkbox.checked) {
                hobbies.push(checkbox.value);
            } else {
                fixHobbies(checkbox.value);
            }
            checkHobbies();
        }
    });
});

// DOM.music.addEventListener("click", () =>
// {
//     if (DOM.music.checked) // Si el Checkbox music Está Chequeado.
//     {
//         hobbies.push(DOM.music.value); // Lo Agrega al Array.
//     }
//     else // Si se Deselecciona.
//     {
//         fixHobbies(DOM.music.value); // Llama a la Función fixHobbies Pasandole el Valor del Checkbox por Parametro.
//     }
//     checkHobbies();
// });

// DOM.handmade.addEventListener("click", () =>
// {
//     if (DOM.handmade.checked)
//     {
//         hobbies.push(DOM.handmade.value);
//     }
//     else
//     {
//         fixHobbies(DOM.handmade.value);
//     }
//     checkHobbies();
// });

// DOM.sport.addEventListener("click", () =>
// {
//     if (DOM.sport.checked)
//     {
//         hobbies.push(DOM.sport.value);
//     }
//     else
//     {
//         fixHobbies(DOM.sport.value);
//     }
//     checkHobbies();
// });

// DOM.art.addEventListener("click", () =>
// {
//     if (DOM.art.checked)
//     {
//         hobbies.push(DOM.art.value);
//     }
//     else
//     {
//         fixHobbies(DOM.art.value);
//     }
//     checkHobbies();
// });

// DOM.games.addEventListener("click", () =>
// {
//     if (DOM.games.checked)
//     {
//         hobbies.push(DOM.games.value);
//     }
//     else
//     {
//         fixHobbies(DOM.games.value);
//     }
//     checkHobbies();
// });

// DOM.lecture.addEventListener("click", () =>
// {
//     if (DOM.lecture.checked)
//     {
//         hobbies.push(DOM.lecture.value)
//     }
//     else
//     {
//         fixHobbies(DOM.lecture.value);
//     }
//     checkHobbies();
// });

function fixHobbies(hobby) // Función fixHobbies Recibe el Valor del Input Type Checkbox.
{
    let index = hobbies.indexOf(hobby); // Obtiene el Índice en el Array.
    hobbies.splice(index, 1); // Lo Elimina del Array.
}

function checkHobbies() // Función Para Verificar la Cantidad de Aficiones que se Han Añadido.
{
    if (hobbies.length > 1) // Si en el Array Hay Más de 1.
    {
        DOM.hobby.style.visibility = "hidden"; // Oculta el Mensaje Selecciona al Menos 2 Aficiones.
    }
    else // Si no Hay 1 o Más de 1 Afición.
    {
        DOM.hobby.style.visibility = "visible"; // Muestra el Mensaje.
    }
}

function togglePass(pass, check) // Función que Cambia el Tipo de Dato del Input Type Password, Dependiendo de si se Chequea el Input Type Checkbox, Recibe el Input Password y el Checkbox.
{
    pass.type = check.checked ? "text" : "password"; // Si el Checkbox Está Chequeado, lo Convierte a Tipo Texto, si no a Tipo Password.
}

function enableDNI(selector, dni) // Activa el Input para el Número de DNI, Recibe el Selector de tipo y el Input del DNI/NIE.
{
    if (selector.value != "") // Si el Valor del Selector no está Vacío.
    {
        dni.disabled = false; // Habilita el Input del DNI/NIE.
    }
    else // Si Está Vacio.
    {
        dni.disabled = true; // Lo Deshabilita.
    }
}

function verify(dni) {
    const expresion_regular_dni = /^[XYZ]?\d{2,9}[A-Z]$/;
    if (expresion_regular_dni.test(dni)) {
        let numero = dni.substr(0, dni.length - 1).replace('X', 0).replace('Y', 1).replace('Z', 2);
        const letra = dni.substr(dni.length - 1, 1).toUpperCase();
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        if (letras[numero % 23] !== letra) {
            alert('El D.N.I. o N.I.E. es Incorrecto, Verifica que los Números y la Letra o Letras Estén Bien.');
            return false;
        }
        return true;
    }
    alert('El D.N.I. o N.I.E. es Incorrecto, Verifica que los Números y la Letra o Letras Estén Bien.');
    return false;
}