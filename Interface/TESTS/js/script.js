const DOM = {
    container: document.getElementById("container")
}

const imgs = ["img/fresa.webp", "img/limon.webp", "img/piña.jpg", "img/manga.webp"];

const alts = ["Fresas", "Limones", "Piña Tropical", "Manga"];

const items = ["Caja de Fresas x 2Kg.", "Bolsa de Limones x 2 Kg.", "Piña Tropical Congelada x 500 Gr." , "Manga Congelada x 500 Gr."];

const prices = [4, 1.5, 3, 2];

function showItems()
{
    html = "";
    for (var i = 0; i < 4; i++)
    {
        html += "<div id='container" + (i + 1) + "' class='inline_grid'>";
        html += "<div><img src='" + imgs[i] + "' alt='" + alts[i] + "' class='img'></div>"
        html += "<div><div><input type='hidden' value='" + (i + 1) + "'>";
        html += "<input id='art" + (i + 1) + "' type='number' value='1' onchange='calculate(this.value, " + prices[i] + ", total = document.getElementById(\"total" + (i + 1) + "\"), container = document.getElementById(\"container" + (i + 1) + "\"))' required>";
        html += "<label for='art" + (i + 1) + "'>" + items[i] + "</label></div><br>";
        html += "<div><input readonly type='number' id='price" + (i + 1) + "' value='" + prices[i] + "' step='.5'>";
        html += "<label for='price" + (i + 1) + "'>Precio</label></div><br>";
        html += "<div><input readonly type='number' id='total" + (i + 1) + "' step='.5' value='" + prices[i] + "'>";
        html += "<label for='total" + (i + 1) + "'>Total</label></div></div></div>";
    }

    DOM.container.innerHTML = html;
}

function calculate(qtty, price, total, container)
{
    if (qtty == 0)
    {
        container.style.display = "none";
    }
    total.value = qtty * price;
}