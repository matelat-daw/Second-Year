const DOM = {
    body: document.getElementById("body"),
    header: document.getElementById("header"),
    nav: document.getElementById("nav"),
    aside: document.getElementById("aside"),
    main: document.getElementById("main"),
    select: document.getElementById("style"),
    footer: document.getElementById("footer"),
    footer_text: document.getElementById("footer-text"),
    anchor: document.querySelectorAll("a"),
    list: document.querySelectorAll('li:not(#aside-li-1):not(#aside-li-2):not(#aside-li-3):not(#aside-li-4)'),
    button: document.querySelectorAll("button")
};

let body_color = DOM.body.style.color;
let body_backcolor = DOM.body.style.backgroundColor;
let header_backcolor = DOM.header.style.backgroundColor;
let header_color = DOM.header.style.color;
let nav_color = DOM.nav.style.backgroundColor;
let aside_color = DOM.nav.style.backgroundColor;
let main_color = DOM.nav.style.backgroundColor;
let footer_color = DOM.nav.style.backgroundColor;

console.log("El color de fondo del body es: " + body_backcolor.toString());
console.log("El color de fuentes del body es: " + body_color.toString());

function changeStyle(style)
{
    defaultColor();
    switch (style)
    {
        case "young":
            DOM.body.style.color = "darkslategray";
            DOM.body.style.backgroundColor = "blue";
            DOM.header.style.backgroundColor = "cyan";
            DOM.nav.style.backgroundColor = "green";
            DOM.aside.style.backgroundColor = "green";
            DOM.footer.style.backgroundColor = "red";
            DOM.footer_text.style.color = "black";
            for (let i = 0; i < DOM.anchor.length; i++)
            {
                DOM.anchor[i].style.color = "darkslategray";
            }
            for (let i = 0; i < DOM.list.length; i++)
            {
                DOM.list[i].style.color = "darkslategray";
                DOM.list[i].style.backgroundColor = "orange";
            }
            for (let i = 0; i < DOM.button.length; i++)
            {
                DOM.button[i].style.background = "red";
            }
            break;
        case "sober":
            DOM.body.style.color = "#f0f0f0";
            DOM.body.style.backgroundColor = "#0f0f0f";
            DOM.header.style.backgroundColor = "#808080";
            DOM.header.style.color = "#F0F0F0";
            DOM.nav.style.backgroundColor = "#a0a0a0";
            DOM.aside.style.backgroundColor = "#a0a0a0";
            DOM.footer.style.backgroundColor = "rgb(80, 80, 80)";
            DOM.footer_text.style.color = "black";
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
            DOM.body.style.color = "#f0f0f0";
            DOM.body.style.backgroundColor = "magenta";
            DOM.header.style.backgroundColor = "salmon";
            DOM.header.style.color = "#f0f0f0";
            DOM.nav.style.backgroundColor = "lightblue";
            DOM.aside.style.backgroundColor = "lightblue";
            DOM.footer.style.backgroundColor = "orange";
            for (let i = 0; i < DOM.anchor.length; i++)
            {
                DOM.anchor[i].style.color = "darkslategray";
            }
            for (let i = 0; i < DOM.list.length; i++)
            {
                DOM.list[i].style.color = "darkslategray";
                DOM.list[i].style.backgroundColor = "blue";
            }
            for (let i = 0; i < DOM.button.length; i++)
            {
                DOM.button[i].style.background = "pink";
            }
            break;
        case "elegant":
            DOM.body.style.color = "#f3eae8";
            DOM.body.style.backgroundColor = "#281207";
            DOM.header.style.backgroundColor = "#281207";
            DOM.header.style.color = "#F0F0F0";
            DOM.nav.style.backgroundColor = "#c0c0c0";
            DOM.aside.style.backgroundColor = "#c0c0c0";
            DOM.footer.style.backgroundColor = "rgb(80, 80, 80)";
            for (let i = 0; i < DOM.anchor.length; i++)
            {
                DOM.anchor[i].style.color = "darkslategray";
            }
            for (let i = 0; i < DOM.list.length; i++)
            {
                DOM.list[i].style.color = "darkslategray";
                DOM.list[i].style.backgroundColor = "#562414";
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