const DOMPREPAY = {
    transfer: document.getElementById("transfer"),
    btn_transfer: document.getElementById("btn-transfer"),
    payment: document.getElementById("payment"),
    next: document.getElementById("next")
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