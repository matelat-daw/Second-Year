const DOMDATA = {
    name: document.getElementById("client"),
    surname: document.getElementById("surname"),
    surname2: document.getElementById("surname2"),
    dni: document.getElementById("dni"),
    address: document.getElementById("address"),
    cp: document.getElementById("cp"),
    shipper: document.getElementById("shipper"),
    invoice: document.getElementById("invoice"),
    kind: document.getElementById("kind"),
    cif: document.getElementById("cif"),
    phone: document.getElementById("phone"),
    whatsapp: document.getElementById("whastapp"),
    email: document.getElementById("email")
};

function storeData()
{
    let name = DOMDATA.name.value;
    let surname = DOMDATA.surname.value;
    let surname2 = DOMDATA.surname2.value;
    let dni = DOMDATA.dni.value;
    let address = DOMDATA.address.value;
    let cp = DOMDATA.cp.value;
    let shipper = DOMDATA.shipper.value;
    let invoice = DOMDATA.invoice.value;
    let kind = DOMDATA.kind.value;
    let cif = DOMDATA.cif.value;
    let phone = DOMDATA.phone.value;
    let whatsapp = DOMDATA.whatsapp.value;
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

    console.log("El resultado es: " + JSON.stringify(result));
    localStorage.setItem("data", JSON.stringify(result));
    window.open("../prepay/index.html", "_self");
}