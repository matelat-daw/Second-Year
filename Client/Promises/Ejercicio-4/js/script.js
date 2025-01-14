let deportistas=[
    {nombre: 'Antonio', apellido1: 'García', apellido2: 'González', sexo: 'H', edad:25, equipo: 'Trotamundos',
                participaEn:[ {carrera: 'ochoKm',tiempoEnSegundos: 1855, distanciaKm: 8},
                              {carrera: 'mediaMaraton',tiempoEnSegundos: 4855, distanciaKm: 21},
                              {carrera: 'maraton',tiempoEnSegundos: 6055, distanciaKm: 42}
                            ]},
    {nombre: 'Juan', apellido1: 'Carballo', apellido2: 'Delgado', sexo: 'H', edad:45, equipo: 'Clator',
                participaEn:[ {carrera: 'ochoKm',tiempoEnSegundos: 1955, distanciaKm: 8},
                              {carrera: 'maraton',tiempoEnSegundos: 6155, distanciaKm: 42}
                            ]},
    {nombre: 'Ayoze', apellido1: 'Mesa', apellido2: 'Herrera', sexo: 'H', edad:38, equipo: 'Clator',
                participaEn:[ {carrera: 'ochoKm',tiempoEnSegundos: 1975, distanciaKm: 8},
                              {carrera: 'mediaMaraton',tiempoEnSegundos: 4985, distanciaKm: 21},
                              {carrera: 'maraton',tiempoEnSegundos: 6188, distanciaKm: 42}
                            ]},
    {nombre: 'Antonio', apellido1: 'Galván', apellido2: 'Vera', sexo: 'H', edad:61, equipo: 'Trotamundos',
                participaEn:[ {carrera: 'cuatroKm',tiempoEnSegundos: 995, distanciaKm: 4},
                              {carrera: 'ochoKm',tiempoEnSegundos: 2055, distanciaKm: 8},
                              {carrera: 'mediaMaraton',tiempoEnSegundos: 5855, distanciaKm: 21}
                            ]},
    {nombre: 'Carmen', apellido1: 'Morales', apellido2: 'Vera', sexo: 'M', edad:35, equipo: 'Trotamundos',
                participaEn:[ {carrera: 'cuatroKm',tiempoEnSegundos: 1055, distanciaKm: 4},
                              {carrera: 'ochoKm',tiempoEnSegundos: 2255, distanciaKm: 8},
                              {carrera: 'mediaMaraton',tiempoEnSegundos: 5985, distanciaKm: 21}
                            ]}
];

let contador=0;
const MAX = 4;
let resultado=0;

// CREAR promesa
async function promesaCuentaKilometros(name){    
    let promesa=new Promise (function(llamarAlThen, llamarAlCatch){
            function contar(){
                if (deportistas.some(deportista => deportista.nombre == name))
                {
                    console.log("El Deportista Está.");
                    contador += deportistas.filter(corredor => corredor.nombre == name).reduce((kilometros, corredor) => kilometros + corredor.participaEn.distanciaKm, 0);
                    console.log("El Contador marca: " + contador);
                    llamarAlThen(contador);
                }
                else
                    llamarAlCatch("Parece que ese Deportista no Existe.");
            }
            setTimeout(contar, 4000);
    })
    return promesa;
}

await promesaCuentaKilometros("Juan").then(nuevoValor=>{
    resultado += nuevoValor;
    console.log(`1. El valor del contador es ${nuevoValor}`)
})
.catch(error=>console.log(error));

await promesaCuentaKilometros("Carmen").then(nuevoValor=>{
    resultado += nuevoValor;
    console.log(`2. El valor del contador es ${nuevoValor}`)
})
.catch(error=>console.log(error));