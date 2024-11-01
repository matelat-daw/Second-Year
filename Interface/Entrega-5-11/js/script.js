const DOM = {
    body: document.body
};

function changeStyle(style)
{
    switch (style)
    {
        case "dark":
            DOM.body.className = "dark";
            break;
        case "light":
            DOM.body.className = "light";
            break;
        // default:
        //     DOM.body.className = "reset-style";
    }

    let option = document.querySelector(`#style option[value=""]`);
    option.selected = true;
}