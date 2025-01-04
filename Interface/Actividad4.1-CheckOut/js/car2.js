const DOM2 = {
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
        html += "<div id='contenedor" + (i + 1) + "' class='inline_grid'><div><img src='" + imgs[i] + "' alt='" + alts[i] + "' class='img'></div><div><div><input id='art" + (i + 1) + "' type='number' value='1' onchange='calculate(this.value, " + prices[i] + ", document.getElementById(\"total" + (i + 1) + "\"), document.getElementById(\"contenedor" + (i + 1) + "\"), document.getElementById(\"label" + (i + 1) + "\"))' required><label id='label" + (i + 1) + "' for='art" + (i + 1) + "'>" + items[i] + "</label></div><br><div><input readonly type='number' id='price" + (i + 1) + "' value='" + prices[i] + "' step='.5'><label for='price" + (i + 1) + "'>Precio</label></div><br><div><input readonly type='number' id='total" + (i + 1) + "' step='.5' value='" + prices[i] + "'><label for='total" + (i + 1) + "'>Total</label></div></div></div>";
    }

    html += "<div class='inline_grid'><div><img src='../img/rare.jpg' alt='Pera con Forma de Buda' class='img'></div><div><input id='art5' type='number' disabled><label id='lart5' for='art5'>Pera con Forma de Buda(Sin Stock)</label></div></div><br></fieldset><div class='next'><input type='submit' value='Siguiente'></div>";

    DOM2.contenedor.innerHTML = html;
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

function storeCar(event)
{
    event.preventDefault();

    const DOMCAR = {
        art1: document.getElementById("art1"),
        label1: document.getElementById("label1"),
        price1: document.getElementById("price1"),
        total1: document.getElementById("total1"),
        art2: document.getElementById("art2"),
        label2: document.getElementById("label2"),
        price2: document.getElementById("price2"),
        total2: document.getElementById("total2"),
        art3: document.getElementById("art3"),
        label3: document.getElementById("label3"),
        price3: document.getElementById("price3"),
        total3: document.getElementById("total3"),
        art4: document.getElementById("art4"),
        label4: document.getElementById("label4"),
        price4: document.getElementById("price4"),
        total4: document.getElementById("total4")
    };

    let art1 = DOMCAR.art1.value;
    let label1 = DOMCAR.label1.textContent;
    let price1 = DOMCAR.price1.value;
    let total1 = DOMCAR.total1.value;
    let art2 = DOMCAR.art2.value;
    let label2 = DOMCAR.label2.textContent;
    let price2 = DOMCAR.price2.value;
    let total2 = DOMCAR.total2.value;
    let art3 = DOMCAR.art3.value;
    let label3 = DOMCAR.label3.textContent;
    let price3 = DOMCAR.price3.value;
    let total3 = DOMCAR.total3.value;
    let art4 = DOMCAR.art4.value;
    let label4 = DOMCAR.label4.textContent;
    let price4 = DOMCAR.price4.value;
    let total4 = DOMCAR.total4.value;

    let result = [{
        article: art1,
        label: label1,
        price: price1,
        total: total1
    },
    {
        article: art2,
        label: label2,
        price: price2,
        total: total2
    },
    {
        article: art3,
        label: label3,
        price: price3,
        total: total3
    },
    {
        article: art4,
        label: label4,
        price: price4,
        total: total4
    }];

    localStorage.setItem("car", JSON.stringify(result));
    window.open("../data/index.html", "_self");
}