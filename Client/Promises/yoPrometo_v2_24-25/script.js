let contadorDeClicks=0;
let contadorDeTeclas=0;
document.addEventListener("click", ()=>{contadorDeClicks++;
                                        console.log("CLICK!!");
                                    });

let promesa4CLicks;
// CREAR promesa
function prometer4Clicks(){    
    let promesa = new Promise (function(llamarAlThen, llamarAlCatch){
            function comprobarPromesa(){
                if (contadorDeClicks >= 4)
                        llamarAlThen("3SI. ¡¡Muy Bien!! ... Has cumplido tu promesa de hacer 4 clicks en 5 segundos")
                    else
                        llamarAlCatch("3NO. ¡¡VAYA!! NO has cumplido tu promesa de hacer 4 clicks en 5 segundos")
            }
            setTimeout(comprobarPromesa, 5000);
           
    })
    return promesa;
    
}

// USAR promesa
async function iniciarPromesa4Clicks(){
    promesa4CLicks = await prometer4Clicks()
    .then(respuesta=>console.log(respuesta))
    .catch(respuesta=>console.log(respuesta))
}



console.log("1. Iniciar promesa de hacer 4 clicks");
console.log("2. Dispones de 5 segundos para cumplirla");
iniciarPromesa4Clicks();