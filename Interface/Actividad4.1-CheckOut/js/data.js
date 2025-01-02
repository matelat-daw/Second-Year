const DOMDATA = {
    name: document.getElementById("client"),
    surname: document.getElementById("surname"),
    surname2: document.getElementById("surname2"),
    dni: document.getElementById("dni"),
    address: document.getElementById("address"),
    cp: document.getElementById("cp"),
    shipper1: document.getElementById("shipper1"),
    shipper2: document.getElementById("shipper2"),
    shipper3: document.getElementById("shipper3"),
    invoice: document.getElementById("invoice"),
    kind1: document.getElementById("kind1"),
    kind2: document.getElementById("kind2"),
    cif: document.getElementById("cif"),
    phone: document.getElementById("phone"),
    whatsapp1: document.getElementById("whatsapp1"),
    whatsapp2: document.getElementById("whatsapp2"),
    email: document.getElementById("email")
};

function storeData()
{
    let shipper;
    let kind;
    let whatsapp;
    let name = DOMDATA.name.value;
    let surname = DOMDATA.surname.value;
    let surname2 = DOMDATA.surname2.value;
    let dni = DOMDATA.dni.value;
    let address = DOMDATA.address.value;
    let cp = DOMDATA.cp.value;

    if (DOMDATA.shipper1.checked)
    {
        shipper = DOMDATA.shipper1.value;
    }
    else if (DOMDATA.shipper2.checked)
    {
        shipper = DOMDATA.shipper2.value;
    }
    else
    {
        shipper = DOMDATA.shipper3.value;
    }

    let invoice = DOMDATA.invoice.value;

    if (DOMDATA.kind1.checked)
    {
        kind = DOMDATA.kind1.value;
    }
    else
    {
        kind = DOMDATA.kind2.value;
    }

    let cif = DOMDATA.cif.value;
    let phone = DOMDATA.phone.value;

    if (DOMDATA.whatsapp1.checked)
    {
        whatsapp = DOMDATA.whatsapp1.value;
    }
    else
    {
        whatsapp = DOMDATA.whatsapp2.value;
    }

    let email = DOMDATA.email.value;

    let result = [{
        name: name,
        surname: surname,
        surname2: surname2,
        dni: dni,
        address: address,
        cp: cp,
        shipper: shipper,
        invoice: invoice,
        kind: kind,
        cif: cif,
        phone: phone,
        whatsapp: whatsapp,
        email: email,
    }];

    localStorage.setItem("data", JSON.stringify(result));
    window.open("../prepay/index.html", "_self");
}