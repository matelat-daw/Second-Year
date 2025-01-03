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

function storeCar(event)
{
    event.preventDefault();
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