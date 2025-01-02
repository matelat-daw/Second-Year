const DOMPREPAY = {
    transfer: document.getElementById("transfer"),
    btn_transfer: document.getElementById("btn_transfer"),
    payment: document.getElementById("payment")
}

function showTransfer(how)
{
    DOM.transfer.style.display = "block";
    DOM.btn_transfer.style.display = "none";
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
    let result = [{
        payment: payment
    }];
    localStorage.setItem("payment", JSON.stringify(result));
    window.open('../checkout/index.html')
}