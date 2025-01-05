const DOMPREPAY = {
    transfer: document.getElementById("transfer"),
    btn_transfer: document.getElementById("btn-transfer"),
    payment: document.getElementById("payment"),
    next: document.getElementById("next"),
    total: document.getElementById("total")
}

function showTransfer(how)
{
    DOMPREPAY.transfer.style.display = "block";
    DOMPREPAY.btn_transfer.style.display = "none";
    DOMPREPAY.payment.value = how;

    DOMPREPAY.next.style.visibility = "visible";
}

function storePayment()
{
    let payment = DOMPREPAY.payment.value;
    localStorage.setItem("payment", JSON.stringify(payment));
    window.open('../checkout/index.html', '_self')
}

function showTotal()
{
    let data = JSON.parse(localStorage.getItem("car"));

    let total = 0;

    data.map(function (article) {
        if (article.qtty > 0 && article.check)
        {
            total += parseFloat(article.total);
        }
    });
    DOMPREPAY.total.innerHTML = total;
}

function getTotal()
{
    let data = JSON.parse(localStorage.getItem("car"));

    let total = 0;

    data.map(function (article) {
        if (article.qtty > 0 && article.check)
        {
            total += parseFloat(article.total);
        }
    });
    let igic = total * .07;
    let to_pay = 0;
    if (total >= 30)
    {
        let discount = total * .2;
        to_pay = (total - discount).toFixed(2);
    }
    else
    {
        to_pay = total;
    }

    let final = parseFloat(to_pay + igic).toFixed(2);
    console.log("Al final quedó: " + final);
    return final;
}