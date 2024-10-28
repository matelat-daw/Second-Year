const DOM = {
    body: document.getElementById("body"),
    header: document.getElementById("header"),
    nav: document.getElementById("nav"),
    aside: document.getElementById("aside"),
    main: document.getElementById("main"),
    select: document.getElementById("style"),
    footer: document.getElementById("footer"),
    footer_text: document.getElementById("footer-text"),
    anchor: document.querySelectorAll("a:not(#email)"),
    list: document.querySelectorAll('li:not(#aside-li-1):not(#aside-li-2):not(#aside-li-3):not(#aside-li-4)'),
    button: document.querySelectorAll("button")
}; // Se excluyen los li con ID aside-l1-1 / 4, los que están en el Aside(Ya que el Aside Tiene un Fondo y si se le Aplica a los li del Aside, No Queda Bien) y el enlace del footer con ID email(Pare Verlo Mejor en los Estilos Sobrio y Elegante).

let body_color = DOM.body.style.color;
console.log("Color del Body" + body_color);
let body_backcolor = DOM.body.style.backgroundColor;
let header_backcolor = DOM.header.style.backgroundColor;
let header_color = DOM.header.style.color;
let nav_color = DOM.nav.style.backgroundColor;
let aside_color = DOM.nav.style.backgroundColor;
let main_color = DOM.nav.style.backgroundColor;
let footer_color = DOM.nav.style.backgroundColor;

function changeStyle(style)
{
    defaultColor();
    switch (style)
    {
        case "young":
            DOM.body.className = "young";
            // for (let i = 0; i < DOM.anchor.length; i++)
            // {
            //     DOM.anchor[i].style.color = "darkslategray";
            // }
            // for (let i = 0; i < DOM.list.length; i++)
            // {
            //     DOM.list[i].style.color = "darkslategray";
            //     DOM.list[i].style.backgroundColor = "orange";
            // }
            // for (let i = 0; i < DOM.button.length; i++)
            // {
            //     DOM.button[i].style.background = "red";
            // }
            break;
        case "sober":
            DOM.body.className = "sober";
            for (let i = 0; i < DOM.anchor.length; i++)
            {
                DOM.anchor[i].style.color = "darkslategray";
            }
            for (let i = 0; i < DOM.list.length; i++)
            {
                DOM.list[i].style.color = "lightgray";
                DOM.list[i].style.backgroundColor = "#404040";
            }
            for (let i = 0; i < DOM.button.length; i++)
            {
                DOM.button[i].style.background = "grey";
            }
            break;
        case "asset":
            DOM.body.className = "asset";
            for (let i = 0; i < DOM.anchor.length; i++)
            {
                DOM.anchor[i].style.color = "darkslategray";
            }
            for (let i = 0; i < DOM.list.length; i++)
            {
                DOM.list[i].style.color = "darkslategray";
                DOM.list[i].style.backgroundColor = "#4040ff";
            }
            for (let i = 0; i < DOM.button.length; i++)
            {
                DOM.button[i].style.background = "pink";
            }
            break;
        case "elegant":
            DOM.body.className = "elegant";
            for (let i = 0; i < DOM.anchor.length; i++)
            {
                DOM.anchor[i].style.color = "darkslategray";
            }
            for (let i = 0; i < DOM.list.length; i++)
            {
                DOM.list[i].style.color = "darkslategray";
                DOM.list[i].style.backgroundColor = "#865444";
            }
            for (let i = 0; i < DOM.button.length; i++)
            {
                DOM.button[i].style.background = "#ffd700";
            }
            break;
    }

    let option = document.querySelector(`#style option[value=""]`);
    option.selected = true;
}

function defaultColor()
{
    DOM.body.style.color = body_color;
    console.log(body_color);
    DOM.body.style.backgroundColor = body_backcolor;
    DOM.header.style.backgroundColor = header_backcolor;
    DOM.header.style.color = header_color;
    DOM.nav.style.backgroundColor = nav_color;
    DOM.aside.style.backgroundColor = aside_color;
    DOM.main.style.backgroundColor = main_color;
    DOM.footer.style.backgroundColor = footer_color;
    for (let i = 0; i < DOM.anchor.length; i++)
    {
        DOM.anchor[i].style.color = body_color;
    }
    for (let i = 0; i < DOM.list.length; i++)
    {
        DOM.list[i].style.color = body_color;
        DOM.list[i].style.backgroundColor = body_backcolor;
    }
    for (let i = 0; i < DOM.button.length; i++)
    {
        DOM.button[i].style.background = "#198754"
    }
}