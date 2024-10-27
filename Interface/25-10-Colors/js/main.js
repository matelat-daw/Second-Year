const DOM = {
    body: document.getElementById("body"),
    header: document.getElementById("header"),
    nav: document.getElementById("nav"),
    aside: document.getElementById("aside"),
    main: document.getElementById("main"),
    footer: document.getElementById("footer"),
    anchor: document.querySelectorAll("a"),
    list: document.querySelectorAll("li"),
    select: document.getElementById("style")
};

let body_color = DOM.body.style.color;
let body_backcolor = DOM.body.style.backgroundColor;
let header_color = DOM.header.style.backgroundColor;
let nav_color = DOM.nav.style.backgroundColor;
let aside_color = DOM.nav.style.backgroundColor;
let main_color = DOM.nav.style.backgroundColor;
let footer_color = DOM.nav.style.backgroundColor;
// let nav_anchor = DOM.nav.style.backgroundColor;
// let nav_li = DOM.nav.style.backgroundColor;

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
            DOM.header.stylebackgroundcolor = "cyan";
            // DOM.nav.style.backgroundColor = "green";
            DOM.aside.style.backgroundColor = "green";
            DOM.footer.style.backgroundColor = "red";
            for (let i = 0; i < DOM.anchor.length; i++)
            {
                DOM.anchor[i].style.color = "darkslategray";
            }
            for (let i = 0; i < DOM.list.length; i++)
            {
                DOM.list[i].style.color = "darkslategray";
            }
            break;
        case "sober":
            DOM.body.style.color = "rgb(f3, ea, e8)";
            DOM.body.style.backgroundColor = "rgb(28, 12, 07)";
            // DOM.header.stylebackgroundcolor = "cyan";
            // DOM.nav.style.backgroundColor = "rgb(ea, c9, 44)";
            DOM.aside.style.backgroundColor = "rgb(234, 201, 68)";
            DOM.footer.style.backgroundColor = "rgb(80, 80, 80)";
            for (let i = 0; i < DOM.anchor.length; i++)
            {
                DOM.anchor[i].style.color = "darkslategray";
            }
            for (let i = 0; i < DOM.list.length; i++)
            {
                DOM.list[i].style.color = "darkslategray";
            }
            break;
        case "asset":
            break;
        case "elegant":
            break;
        default:
    }

    let option = document.querySelector(`#style option[value=""]`);
    option.selected = true;
}

function defaultColor()
{
    DOM.body.style.color = body_color;
    DOM.body.style.backgroundColor = body_backcolor;
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
    }
}