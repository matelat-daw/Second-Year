const DOM = {
    body: document.getElementById("body"),
    header: document.getElementById("header"),
    nav: document.getElementById("nav"),
    aside: document.getElementById("aside"),
    main: document.getElementById("main"),
    footer: document.getElementById("fotter"),
    anchor: document.querySelectorAll("a"),
    list: document.querySelectorAll("li")
};

function changeStyle(style)
{
    switch (style)
    {
        case "young":
            DOM.body.style.color = "gray";
            DOM.body.style.backgroundColor = "blue";
            DOM.nav.style.backgroundColor = "green";
            DOM.aside.style.backgroundColor = "green";
            DOM.footer.style.backgroundColor = "red";
            for (let i = 0; i < DOM.anchor.length; i++)
            {
                DOM.anchor[i].style.color = "gray";
            }
            for (let i = 0; i < DOM.list.length; i++)
            {
                DOM.list[i].style.color = "gray";
            }
            break;
        case "sober":
            break;
        case "asset":
            break;
        case "elegant":
            break;
        default:
            DOM.body.style.color = "black";
            DOM.body.style.backgroundColor = "white";
            for (let i = 0; i < DOM.anchor.length; i++)
            {
                DOM.anchor[i].style.color = "black";
            }
            for (let i = 0; i < DOM.list.length; i++)
            {
                DOM.list[i].style.color = "black";
            }
    }
}