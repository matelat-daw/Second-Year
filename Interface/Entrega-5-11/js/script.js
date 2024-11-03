const DOM = {
    body: document.body,
    mode: document.getElementById("mode")
};

// DOM.body.className = "light";

const prefersColorQuery = window.matchMedia('(prefers-color-scheme: dark)'),
  changeTheme = e => {
    document.body.classList[e.matches ? 'add':'remove']('dark');
    console.log(e.matchMedia);
  }

  prefersColorQuery = window.matchMedia('(prefers-color-scheme: light)'),
  changeTheme = e => {
    document.body.classList[e.matches ? 'add':'remove']('light');
    console.log(e.matchMedia);
  }

function changeStyle(style)
{
    switch (style)
    {
        case "dark":
            DOM.body.className = "dark";
            if (DOM.mode.checked)
            {
                DOM.body.className = "dark-hight";
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

function changeMode()
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