function showCar()
{
    let data = JSON.parse(localStorage.getItem("car"));
    for (var i = 0; i < data.length; i++)
    {
        data[i].map(art => {<ul>
            <li>art.article art.label</li>
            <li>Precio: art.price</li>
            <li>Total art.article art.label: art.total</li>
        </ul>});
    }
}

function showData()
{

}

function showPayment()
{

}