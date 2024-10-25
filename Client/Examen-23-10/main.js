// import * as ejercicios from "./matelat.js"; // Funciona, Importa Todas.

// const ejercicios = await import ("./matelat.js"); // Funciona, Importa Todas. asynchronous?.

import { ejercicio1, ejercicio2, ejercicio3, ejercicio4, ejercicio5 } from "./matelat.js"; // Hay que Escribir los Nombres de Todas las Funciones que se Quiere Importar.

// DOM con la ID de los Elementos, para Mostrar los Resultados.
const DOM = {
    resutlado1: document.getElementById("resutlado1"),
    resutlado2: document.getElementById("resutlado2"),
    resutlado3: document.getElementById("resutlado3"),
    resutlado4: document.getElementById("resutlado4"),
    resutlado5: document.getElementById("resutlado5")
};

//Array para realizar pruebas
let programadores=[
    {nombre: 'Antonio', apellido1: 'García', apellido2: 'González', edad: 25, experiencia: 4,
lenguajes: ['C++','JS', 'PHP']},
    {nombre: 'Ana', apellido1: 'Pérez', apellido2: 'Días', edad: 30, experiencia: 5, lenguajes:
['C','JS', 'Java']},
    {nombre: 'Pedro', apellido1: 'Abad', apellido2: 'García', edad: 24, experiencia: 15, lenguajes:
['Python','JS', 'Java','C++']}
];

(function(){
    // DOM.resutlado1.innerHTML = ejercicios.ejercicio1(programadores); // Este Caso Funciona con los Dos Primeros Imports.

    // DOM.resutlado2.innerHTML = ejercicios.ejercicio2(programadores);

    // DOM.resutlado3.innerHTML = ejercicios.ejercicio3(programadores);

    // DOM.resutlado4.innerHTML = ejercicios.ejercicio4(programadores,4);

    // DOM.resutlado5.innerHTML = ejercicios.ejercicio5(programadores, "Ana");

    DOM.resutlado1.innerHTML = ejercicio1(programadores); // Así Funciona con Todos los Nombres, si se Usa la Importación Dinámica crea la lista completa de Funciones Importadas.
    DOM.resutlado2.innerHTML = ejercicio2(programadores);
    DOM.resutlado3.innerHTML = ejercicio3(programadores);
    DOM.resutlado4.innerHTML = ejercicio4(programadores, 4);
    DOM.resutlado5.innerHTML = ejercicio5(programadores, "Pedro");
})()