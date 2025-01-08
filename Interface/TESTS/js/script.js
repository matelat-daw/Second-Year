const DOM = {
    contenedor: document.getElementById("contenedor")
}

const imgs = ["../img/fresa.webp", "../img/limon.webp", "../img/piña.jpg", "../img/manga.webp"];

const alts = ["Fresas", "Limones", "Piña Tropical", "Manga"];

const items = ["Caja de Fresas x 5 Kg.", "Bolsa de Limones x 2 Kg.", "Piña Tropical Congelada x 500 Gr." , "Manga Congelada x 500 Gr."];

const prices = [4, 1.5, 3, 2];

function showItems()
{
    html = "<fieldset><legend>Tu Compra</legend>";
    for (var i = 0; i < 4; i++)
    {
        html += "<div id='contenedor" + (i + 1) + "' class='inline_grid'><div><img src='" + imgs[i] + "' alt='" + alts[i] + "' class='img'></div><div><div><input id='qtty" + (i + 1) + "' type='number' value='1' onchange='calculate(this.value, " + prices[i] + ", document.getElementById(\"total" + (i + 1) + "\"), document.getElementById(\"contenedor" + (i + 1) + "\"), document.getElementById(\"label" + (i + 1) + "\"))' required><label id='label" + (i + 1) + "' for='qtty" + (i + 1) + "'>" + items[i] + "</label></div><br><div><input readonly type='number' id='price" + (i + 1) + "' value='" + prices[i] + "' step='.5'><label for='price" + (i + 1) + "'>Precio</label></div><br><div><input readonly type='number' id='total" + (i + 1) + "' step='.5' value='" + prices[i] + "'><label for='total" + (i + 1) + "'>Total</label></div><br><input id='check" + (i + 1) + "' type='checkbox' checked><label for='check" + (i + 1) + "'>Facturar</label>&nbsp;&nbsp;&nbsp;<input type='button' onclick='quit(document.getElementById(\"qtty" + (i + 1) + "\"), document.getElementById(\"contenedor" + (i + 1) + "\"))' value='Eliminar'></div></div>";
    }

    html += "<div class='inline_grid'><div><img src='../img/rare.jpg' alt='Pera con Forma de Buda' class='img'></div><div><input id='qtty5' disabled><label id='lart5' for='qtty5'>Pera con Forma de Buda(Sin Stock)</label></div></div><br></fieldset><div class='next'><input type='submit' value='Siguiente'></div>";

    DOM.contenedor.innerHTML = html;
}

function calculate(qtty, price, total, contenedor, label)
{
    if (qtty == 0)
    {
        contenedor.style.display = "none";
    }
    else if (qtty == 1)
    {
        switch (label.textContent)
        {
            case "Cajas de Fresas x 5 Kg.":
                label.textContent = "Caja de Fresas x 5 Kg.";
                break;
            case "Bolsas de Limones x 2 Kg.":
                label.textContent = "Bolsa de Limones x 2 Kg.";
                break;
        }
    }
    else
    {
        switch (label.textContent)
        {
            case "Caja de Fresas x 5 Kg.":
                label.textContent = "Cajas de Fresas x 5 Kg.";
                break;
            case "Bolsa de Limones x 2 Kg.":
                label.textContent = "Bolsas de Limones x 2 Kg.";
                break;
        }
    }

    total.value = qtty * price;
}

function quit(qtty, container)
{
    qtty.value = 0;
    container.style.display = "none";
}

function storeCar(event)
{
    event.preventDefault();

    const DOMCAR = {
        qtty1: document.getElementById("qtty1"),
        label1: document.getElementById("label1"),
        price1: document.getElementById("price1"),
        total1: document.getElementById("total1"),
        check1: document.getElementById("check1"),
        qtty2: document.getElementById("qtty2"),
        label2: document.getElementById("label2"),
        price2: document.getElementById("price2"),
        total2: document.getElementById("total2"),
        check2: document.getElementById("check2"),
        qtty3: document.getElementById("qtty3"),
        label3: document.getElementById("label3"),
        price3: document.getElementById("price3"),
        total3: document.getElementById("total3"),
        check3: document.getElementById("check3"),
        qtty4: document.getElementById("qtty4"),
        label4: document.getElementById("label4"),
        price4: document.getElementById("price4"),
        total4: document.getElementById("total4"),
        check4: document.getElementById("check4")
    };

    let qtty1 = DOMCAR.qtty1.value;
    let label1 = DOMCAR.label1.textContent;
    let price1 = DOMCAR.price1.value;
    let total1 = DOMCAR.total1.value;
    let check1 = DOMCAR.check1.checked;
    let qtty2 = DOMCAR.qtty2.value;
    let label2 = DOMCAR.label2.textContent;
    let price2 = DOMCAR.price2.value;
    let total2 = DOMCAR.total2.value;
    let check2 = DOMCAR.check2.checked;
    let qtty3 = DOMCAR.qtty3.value;
    let label3 = DOMCAR.label3.textContent;
    let price3 = DOMCAR.price3.value;
    let total3 = DOMCAR.total3.value;
    let check3 = DOMCAR.check3.checked;
    let qtty4 = DOMCAR.qtty4.value;
    let label4 = DOMCAR.label4.textContent;
    let price4 = DOMCAR.price4.value;
    let total4 = DOMCAR.total4.value;
    let check4 = DOMCAR.check4.checked;

    let result = [{
        qtty: qtty1,
        label: label1,
        price: price1,
        total: total1,
        check: check1
    },
    {
        qtty: qtty2,
        label: label2,
        price: price2,
        total: total2,
        check: check2
    },
    {
        qtty: qtty3,
        label: label3,
        price: price3,
        total: total3,
        check: check3
    },
    {
        qtty: qtty4,
        label: label4,
        price: price4,
        total: total4,
        check: check4
    }];

    localStorage.setItem("car", JSON.stringify(result));
    window.open("../data/index.html", "_self");
}

const DOM = {
    body: document.body,
    main: document.getElementById("main"),
    select: document.getElementById("style"),
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

if (localStorage.getItem("fontSize") != null)
{
    DOM.body.style.fontSize = localStorage.getItem("fontSize");
}
else
{
    localStorage.setItem("index", "2");
}

const fontSizes = ["small", "medium", "large", "x-large", "xx-large"];

function changeSize(how)
{
    let style = window.getComputedStyle(DOM.body, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);

    if (localStorage.getItem("fontSize") != null)
    {
        let size = parseInt(localStorage.getItem("index"));

        if (how == "up")
        {
            localStorage.setItem("index", ++size);
            if (localStorage.getItem("index") <= 4)
            {
                DOM.body.style.fontSize = fontSizes[localStorage.getItem("index")];
                localStorage.setItem("fontSize", fontSizes[localStorage.getItem("index")]);
            }
            else
            {
                localStorage.setItem("index", --size);
            }
        }
        else
        {
            localStorage.setItem("index", --size);
            if (size >= 0)
            {
                DOM.body.style.fontSize = fontSizes[localStorage.getItem("index")];
                localStorage.setItem("fontSize", fontSizes[localStorage.getItem("index")]);
            }
            else
            {
                localStorage.setItem("index", ++size);
            }
        }
    }
    else
    {
        localStorage.setItem("fontSize", "large");
        changeSize(how);
    }
}

function visit(url)
{
    window.open(url, "_self");
}

function checkout(url)
{
    window.open(url, "_self")
}