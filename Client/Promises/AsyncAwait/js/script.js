function hola()
{
    let html = "<h1>Hola Mundo!</h1>";
    setTimeout(document.body.innerHTML = html, 5000);
}

var contadorDeClicks = 0;

let promesa4Clicks;

function prometer4Clicks()
{
    let promesa = new Promise (fucntion(llamarAlThen, llamarAlCatch)
    {
        if (contadorDeClicks >= 4)
            llamarAlThen("3Sí, Lo has Conseguido.");
        else
            llamarAlCatch("3No, No has cumplido tu Promesa.")
        setTimeout(comprobarPormesa, 5000);
    });
}

function iniciarPromesa4Clicks()
{

}