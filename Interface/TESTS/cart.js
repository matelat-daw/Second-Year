const DOMCAR = {
    qtty1: document.getElementById("qtty1"),
    label1: document.getElementById("label1"),
    price1: document.getElementById("price1"),
    total1: document.getElementById("total1"),
    qtty2: document.getElementById("qtty2"),
    label2: document.getElementById("label2"),
    price2: document.getElementById("price2"),
    total2: document.getElementById("total2"),
    qtty3: document.getElementById("qtty3"),
    label3: document.getElementById("label3"),
    price3: document.getElementById("price3"),
    total3: document.getElementById("total3"),
    qtty4: document.getElementById("qtty4"),
    label4: document.getElementById("label4"),
    price4: document.getElementById("price4"),
    total4: document.getElementById("total4")
};

function storeCar(event)
{
    event.preventDefault();
    let qtty1 = DOMCAR.qtty1.value;
    let label1 = DOMCAR.label1.textContent;
    let price1 = DOMCAR.price1.value;
    let total1 = DOMCAR.total1.value;
    let qtty2 = DOMCAR.qtty2.value;
    let label2 = DOMCAR.label2.textContent;
    let price2 = DOMCAR.price2.value;
    let total2 = DOMCAR.total2.value;
    let qtty3 = DOMCAR.qtty3.value;
    let label3 = DOMCAR.label3.textContent;
    let price3 = DOMCAR.price3.value;
    let total3 = DOMCAR.total3.value;
    let qtty4 = DOMCAR.qtty4.value;
    let label4 = DOMCAR.label4.textContent;
    let price4 = DOMCAR.price4.value;
    let total4 = DOMCAR.total4.value;

    let result = [{
        qtty: qtty1,
        label: label1,
        price: price1,
        total: total1
    },
    {
        qtty: qtty2,
        label: label2,
        price: price2,
        total: total2
    },
    {
        qtty: qtty3,
        label: label3,
        price: price3,
        total: total3
    },
    {
        qtty: qtty4,
        label: label4,
        price: price4,
        total: total4
    }];

    localStorage.setItem("car", JSON.stringify(result));
    window.open("../data/index.html", "_self");
}

function check(element, price, total, container, label)
{
    if (element.value == 0)
    {
        container.style.display = "none";
    }
    else if (element.value == 1)
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

    let total1 = element.value * price.value;
    let igic = total1 * .07;
    let totalIgic = total1 + igic;

    if (total1 >= 30)
    {
        discount = total1 * 0.2;
        total1 = total1 - discount;
    }
    total.value = total1;
}