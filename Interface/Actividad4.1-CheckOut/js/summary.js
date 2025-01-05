function showCar()
{
    let container = document.getElementById("car");
    let data = JSON.parse(localStorage.getItem("car"));

    let total = 0;
    let html = "";
    html += "<ul>"
    data.map(function (article) {
        if (article.qtty > 0 && article.check)
        {
            html += "<li>" + article.qtty + " " + article.label + "</li>";
            html += "<li>Precio: " + article.price + " €</li>";
            html += "<li>Total " + article.qtty + " " + article.label + ": " + article.total + " €</li>";
            total += parseFloat(article.total);
        }
    });
    html += "<li><strong>Total a Pagar: " + total + " €</strong></li>";
    html +="</ul>";
    container.innerHTML = html;
}

function showData()
{
    let container = document.getElementById("data");
    let data = JSON.parse(localStorage.getItem("data"));

    let html = "";
    html += "<ul>"
    data.map(function (dato) {
        html += "<li>Nombre: " + dato.name + " " + dato.surname + " " + dato.surname2 + "</li>";
        html += "<li>DNI: " + dato.dni + "</li>";
        html += "<li>Dirección: " + dato.address + " Código Postal: " + dato.cp + "</li>";
        if (dato.kind == "Particular")
        {
            html += "<li>Entrega: " + dato.shipper + " a " + dato.kind + "</li>";
        }
        else
        {
            html += "<li>Entrega: " + dato.shipper + " a " + dato.kind + " CIF: " + dato.cif +  "</li>";
        }
        html += "<li>Teléfono: " + dato.phone + " E-mail: " + dato.email + "</li>";
        html += "<li>Contacto por WhatsApp: " + dato.whatsapp + "</li>";
    });
    html +="</ul>";
    container.innerHTML = html;
}

function showPayment()
{
    let container = document.getElementById("payment");

    let html = "";
    html += "<ul>"
    html += "<li>Método de Pago: " + localStorage.getItem("payment") + "</li>";
    html +="</ul>";

    container.innerHTML = html;
}