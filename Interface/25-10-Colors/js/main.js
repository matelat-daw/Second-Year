const DOM = {
    body: document.getElementById("body"),
    header: document.getElementById("header"),
    nav: document.getElementById("nav"),
    aside: document.getElementById("aside"),
    main: document.getElementById("main"),
    select: document.getElementById("style"),
    list: document.querySelector(".list-group-item"),
    anchor: document.querySelector(".nav-link"),
    footer: document.getElementById("footer"),
    footer_text: document.getElementById("footer-text"),
    button: document.querySelector(".btn")
};

function css( element, property )
{
    return window.getComputedStyle(element, null).getPropertyValue(property);
}

function changeStyle(style)
{
    switch (style)
    {
        case "young":
            DOM.body.className = "young";
            break;
        case "sober":
            DOM.body.className = "sober";
            break;
        case "asset":
            DOM.body.className = "asset";
            break;
        case "elegant":
            DOM.body.className = "elegant";
            break;
        default:
            DOM.body.className = "reset-style";
    }

    let option = document.querySelector(`#style option[value=""]`);
    option.selected = true;
}