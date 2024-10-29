const DOM = {
    body: document.body
};

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
        case "hight":
            DOM.body.className = "hi_contrast";
            break;
        default:
            DOM.body.className = "reset-style";
    }

    let option = document.querySelector(`#style option[value=""]`);
    option.selected = true;
}