const DOM = {
    body: document.body,
    mode: document.getElementById("mode")
};

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) // Verifica si El Navegador Soporta MatchMedia y si está Configurado el Modo dark.
{
    DOM.body.className = "dark"; // True, Pone la Página en modo Dark.
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
            DOM.body.className = "dark";
            if (DOM.mode.checked) // Si el Switch (Normal/Alto Contraste) está Seleccionado.
            {
                DOM.body.className = "dark-hight"; // Activa el Modo Alto Contraste del Estilo Seleccionado
            }
            break;
        case "light":
            DOM.body.className = "light";
            if (DOM.mode.checked)
            {
                DOM.body.className = "light-hight";
            }
            break;
    }

    let option = document.querySelector(`#style option[value=""]`);
    option.selected = true;
}

function changeMode() // Cambia Entre Normal y Alto Contraste.
{
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