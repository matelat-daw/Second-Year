const DOM = {
    body: document.body,
    mode: document.getElementById("mode"),
    article: document.getElementById("article"),
    dark: document.getElementById("darkMode"),
    light: document.getElementById("lightMode")
};

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) // Verifica si El Navegador Soporta MatchMedia y si está Configurado el Modo dark.
{
    console.log("El Modo por Defect es: " + localStorage.getItem("style"));
    if (localStorage.getItem("style") == "dark")
    {
        localStorage.setItem("style", "dark");
        DOM.dark.style.display = "none";
        DOM.body.className = "dark"; // True, Pone la Página en modo Dark.
        if (DOM.article != null)
            DOM.article.src = "../img/kiwi-dark.jpg";
    }
    else
    {
        DOM.light.style.display = "none";
        DOM.body.className = "light"; // False, Pone la Página en Modo Light.
    }
}
else
{
    DOM.light.style.display = "none";
    DOM.body.className = "light"; // False, Pone la Página en Modo Light.
}

function changeStyle(style) // Cambia los Estilos de la Página, Según se Seleccione en el Selector y Dependoendo de como esté el Switch(Normal/Alto Contraste).
{
    switch (style)
    {
        case "dark":
            if (DOM.article != null)
                DOM.article.src = "../img/kiwi-dark.jpg";
            DOM.light.style.display = "block";
            DOM.dark.style.display = "none";
            DOM.body.className = "dark";
            break;
        case "light":
            if (DOM.article != null)
                DOM.article.src = "../img/kiwi.jpg";
            DOM.dark.style.display = "block";
            DOM.light.style.display = "none";
            DOM.body.className = "light";
            break;
    }
    localStorage.setItem("style", style);
}

var size = 2;

function changeSize(where)
{
    const fontSizes = ["small", "medium", "large", "x-large", "xx-large"];

    var style = window.getComputedStyle(DOM.body, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    console.log("Size de las Fuente del Body es: " + fontSize);

    switch (where)
    {
        case "up":
            size += 1;
            if (size <= 4)
            {
                DOM.body.style.fontSize = fontSizes[size];
            }
            else
            {
                size -= 1;
            }
            break;
        case "down":
            size -= 1;
            if (size >= 0)
            {
                DOM.body.style.fontSize = fontSizes[size];
            }
            else
            {
                size += 1;
            }
            break;
    }
}
// function changeMode(mode) // Cambia Entre Normal y Alto Contraste.
// {
//     // switch (mode)
//     // {
//     //     case "high":
//     //         if (localStorage.getItem("style") == "dark")
//     //         {
//     //             DOM.body.className = "dark-hight";
//     //         }
//     //         else
//     //         {
//     //             DOM.body.className = "light-hight";
//     //         }
//     //         break;
//     //     default:
//     //         if (localStorage.getItem("style") == "dark")
//     //         {
//     //             DOM.body.className = "dark";
//     //         }
//     //         else
//     //         {
//     //             DOM.body.className = "light";
//     //         }
//     // }
//     // if (DOM.mode.checked && DOM.body.className == "dark")
//     // {
//     //     DOM.body.className = "dark-hight";
//     // }
//     // else if (DOM.mode.checked && DOM.body.className == "light")
//     // {
//     //     DOM.body.className = "light-hight";
//     // }
//     // else if (!DOM.mode.checked && DOM.body.className == "light-hight")
//     // {
//     //     DOM.body.className = "light";
//     // }
//     // else
//     // {
//     //     DOM.body.className = "dark";
//     // }
// }