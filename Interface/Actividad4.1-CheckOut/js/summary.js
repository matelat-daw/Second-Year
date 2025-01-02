function showCar()
{
    let container = document.getElementById("car");
    let data = JSON.parse(localStorage.getItem("car"));

    let html = "";
    html += "<ul>"
    data.map(function (art) {
        if (art.price > 0 && art.total > 0)
        {
            html += "<li>" + art.article + " " + art.label + "</li>";
            html += "<li>Precio: " + art.price + " €</li>";
            html += "<li>Total " + art.article + " " + art.label + ": " + art.total + " €</li>";
        }
    });
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
        html += "<li>Nombre: " + dato.name + " " + dato.surname + dato.surname2 + "</li>";
        html += "<li>DNI: " + dato.dni + "</li>";
        html += "<li>Dirección: " + dato.address + " Código Postal: " + dato.cp + "</li>";
        html += "<li>Entrega: " + dato.shipper + " a " + dato.kind + "</li>";
        html += "<li>Teléfono: " + dato.phone + " E-mail: " + dato.email + "</li>";
        html += "<li>Contacto por WhatsApp: " + dato.whatsapp + "</li>";
    });
    html +="</ul>";
    container.innerHTML = html;
}

function showPayment()
{

}