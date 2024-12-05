const DOM = {
    body: document.body,
    mode: document.getElementById("mode"),
    article: document.getElementById("article"),
    dark: document.getElementById("darkMode"),
    light: document.getElementById("lightMode")
};

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) // Verifica si El Navegador Soporta MatchMedia y si está Configurado el Modo dark.
{
    changeStyle("dark", "default");
}
else
{
    changeStyle("light", "default");
}

function changeStyle(style, where) // Cambia los Estilos de la Página, Según se Seleccione en el Selector y Dependoendo de como esté el Switch(Normal/Alto Contraste).
{
    if (localStorage.getItem("style") != null)
    {
        let mode = localStorage.getItem("style");
        if (where == "default")
        {
            styleIt(mode);
        }
        else
        {
            styleIt(style);
        }
    }
    else
    {
        styleIt(style);
    }
}

function styleIt(style)
{
    if (style == "dark")
    {
        if (DOM.article != null)
            DOM.article.src = "../img/kiwi-dark.jpg";
        DOM.light.style.display = "block";
        DOM.dark.style.display = "none";
        DOM.body.className = style;
    }
    else
    {
        if (DOM.article != null)
            DOM.article.src = "../img/kiwi.jpg";
        DOM.dark.style.display = "block";
        DOM.light.style.display = "none";
        DOM.body.className = style;
    }
    localStorage.setItem("style", style);
}

var size = 2;

function changeSize(where)
{
    const fontSizes = ["small", "medium", "large", "x-large", "xx-large"];

    let style = window.getComputedStyle(DOM.body, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);

        if (where == "up")
        {
            size += 1;
            if (size <= 4)
            {
                DOM.body.style.fontSize = fontSizes[size];
            }
            else
            {
                size -= 1;
            }
        }
        else
        {
            size -= 1;
            if (size >= 0)
            {
                DOM.body.style.fontSize = fontSizes[size];
            }
            else
            {
                size += 1;
            }
        }
}

function visit(url)
{
    window.open(url, "_self");
}