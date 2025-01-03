const DOMPREPAY = {
    transfer: document.getElementById("transfer"),
    btn_transfer: document.getElementById("btn_transfer"),
    payment: document.getElementById("payment")
}

function showTransfer(how)
{
    DOMPREPAY.transfer.style.display = "block";
    DOMPREPAY.btn_transfer.style.display = "none";
    if (how == "Transferencia")
    {
        DOMPREPAY.payment.value = how;
    }
    else
    {
        DOMPREPAY.payment.value = "PayPal";
    }
}

function storePayment()
{
    let payment = DOMPREPAY.payment.value;
    localStorage.setItem("payment", JSON.stringify(payment));
    window.open('../checkout/index.html')
}