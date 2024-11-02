const DOM = {
    body: document.body,
    mode: document.getElementById("mode")
};

// const prefersColorQuery = window.matchMedia('(prefers-color-scheme: dark)'),
//   changeTheme = e => {
//     document.body.classList[e.matches ? 'add':'remove']('dark');
//     console.log(e.matchMedia);
//   }

const prefersColorQuery = window.matchMedia('(prefers-color-scheme: no-preference)'),
  changeTheme = e => {
    document.body.classList[e.matches ? 'add':'remove']('dark');
    console.log(e.matchMedia);
  }

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

function changeMode()
{
    if (DOM.mode.checked)
    {
        DOM.body.className = "dark";
    }
    else
    {
        DOM.body.className = "light";
    }
}