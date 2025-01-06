const DOMPREPAY = {
    transfer: document.getElementById("transfer"),
    btn_transfer: document.getElementById("btn-transfer"),
    payment: document.getElementById("payment"),
    next: document.getElementById("next"),
    total: document.getElementById("total")
}

function showTransfer(how) // Este Método Se Llama Cuando el Cliente Presiona El Botón Transferencia Bancaria o Pago por PayPal, Recibe el Texto Apropiado Según el Botón Pulsado.
{
    DOMPREPAY.transfer.style.display = "block"; // Muestra el Contenedor con los Datos Para la Transferencia.
    DOMPREPAY.btn_transfer.style.display = "none"; // Oculta el Botón Transferencia Bancaria.
    DOMPREPAY.payment.value = how; // Asigna a la Forma de Pago el Texto Recibido por Parametro.

    DOMPREPAY.next.style.visibility = "visible"; // Hace Visible el Botón Siguiente, Doy por Hecho que el Cliente ha Realizado la Transferencia o el Pago por PayPal.
}

function storePayment() // Almaceno en localStorage el Método de Pago.
{
    let payment = DOMPREPAY.payment.value;
    localStorage.setItem("payment", JSON.stringify(payment));
    window.open('../checkout/index.html', '_self');
}

function showTotal() // Llamo a Este Método Para Mostrar el Total a Pagar con el Impuesto ya Agregado y el Descuento Aplicado en Caso que Corresponda.
{
    let total = getTotal(); // Asigna a la Variable total la llamada al Método getTotal() que Obtiene el total a Pagar.

    DOMPREPAY.total.innerHTML = total; // Muestra el Total a Pagar en Pantalla.
}

function getTotal() // El Pago por PayPal Llama a Este Método Para Saber Cuanto Hay que Pagar en PayPal.
{
    let data = JSON.parse(localStorage.getItem("car")); // Asigno a data el Contenido del localStorage de los Artículos del Carro.

    let total = 0; // Variable para el total de los Artículos Comprados.

    data.map(function (article) {
        if (article.qtty > 0 && article.check)
        {
            total += parseFloat(article.total);
        }
    }); // Mapeo los Datos en data para Obtener el Total a Pagar de Todos los Artículos.
    let igic = (total * .07).toFixed(2); // Asigno a igic el Impuesto del 7% del Total.
    let to_pay = 0; // Asigno a to_pay 0, se usa para Tener el Valor del Total a Pagar con o sin Descuento.
    if (total >= 30) // Si el Total es 30€ o Más.
    {
        let discount = total * .2; // Aplico un Descuento de 20%.
        to_pay = parseFloat(total - discount).toFixed(2); // Asigno a to_pay el Total a Pagar Menos el Descuento.
    }
    else // Si el Total a Pagar es menos de 30€.
    {
        to_pay = total; // to_pay es el Mismo Total.
    }

    let final = (parseFloat(to_pay) + parseFloat(igic)).toFixed(2); // Asigno a final la Suma del Total a Pagar Más el IGIC (el 7% del Precio Total sin Descuento.)
    return final; // Devuelvo el Total a Pagar con el IGIC y el Descuento si Aplica.
}