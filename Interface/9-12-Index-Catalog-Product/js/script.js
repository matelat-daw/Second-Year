const DOM = {
    body: document.body,
    mode: document.getElementById("mode"),
    article: document.getElementById("article")
};

localStorage.setItem("style") = "";

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) // Verifica si El Navegador Soporta MatchMedia y si está Configurado el Modo dark.
{
    DOM.body.className = "dark"; // True, Pone la Página en modo Dark.
    DOM.article.src = "../img/kiwi-dark.jpg";
}
else
{
    DOM.body.className = "light"; // False, Pone la Página en Modo Light.
}

function changeStyle(style) // Cambia los Estilos de la Página, Según se Seleccione en el Selector y Dependoendo de como esté el Switch(Normal/Alto Contraste).
{
    switch (style)
    {
        case "dark":
            DOM.article.src = "../img/kiwi-dark.jpg";
            DOM.body.className = "dark";
            if (DOM.mode.checked) // Si el Switch (Normal/Alto Contraste) está Seleccionado.
            {
                DOM.body.className = "dark-hight"; // Activa el Modo Alto Contraste del Estilo Seleccionado
            }
            break;
        case "light":
            DOM.article.src = "../img/kiwi.jpg";
            DOM.body.className = "light";
            if (DOM.mode.checked)
            {
                DOM.body.className = "light-hight";
            }
            break;
    }
    localStorage.setItem("style") = style;

    // let option = document.querySelector(`#style option[value=""]`);
    // option.selected = true;
}

function changeMode(mode) // Cambia Entre Normal y Alto Contraste.
{
    switch (mode)
    {
        case "high":
            if (localStorage.getItem("style") == "dark")
            {
                DOM.body.className = "dark-hight";
            }
            else
            {
                DOM.body.className = "light-hight";
            }
            break;
        default:
            if (localStorage.getItem("style") == "dark")
            {
                DOM.body.className = "dark";
            }
            else
            {
                DOM.body.className = "light";
            }
    }
    if (DOM.mode.checked && DOM.body.className == "dark")
    {
        DOM.body.className = "dark-hight";
    }
    else if (DOM.mode.checked && DOM.body.className == "light")
    {
        DOM.body.className = "light-hight";
    }
    else if (!DOM.mode.checked && DOM.body.className == "light-hight")
    {
        DOM.body.className = "light";
    }
    else
    {
        DOM.body.className = "dark";
    }
}