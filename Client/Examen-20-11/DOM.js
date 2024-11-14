// Crea Elementos en el DOM y les pone texto.

let li = document.createElement("li");

li.textContent = "2";

// $0.before(li); o $0.prepend(li); o $0.append(li); o $0.after(li); // before es antes del elemento (por fuera), prepend es dentro del elemento pero antes de todo el contenido, append es dentro del elemento después de todo el contenido y after es después del elemento (por fuera).

// Si se selecciona un Elemento en el inspector es $0.

// $0.before(li); // Mete el elemento li antes del elemento seleccionado $0.

// $0.remove.(li); // Remueve el elemento li del DOM.

// $0.remove(); // Remueve el Elemento $0, es el seleccioando en el inspector.

// $0.children[index]; // Selecciona el Hijo que está en el index usado, debe ser un número entre 0 y el (tamaño de la coleccion - 1) que se obtiene con childElementCount.


// Funciones del DOM Ejercicio de lista UL con 4 LI Numerados en Letras (Uno, Dos, Tres, Cuatro).

let firstLi = document.querySelector("li"); // Obtiene el Primer li de la Página

let seconLi = document.querySelector("li").nextElementSiling; // Obtiene el li que está a continuación del firstLi.

firstLi.before(secondLi); // Mueve el secondLi antes(before) de firstLi.


// Ejercicio con UL y LI con ID y con Clases.

let mainUl = document.querySelector("ul"); // Obtiene el Elemento ul Principal.

let pizza = document.getElementById("pizza"); // Obtengo el Elemento con ID pizza, el li con ID pizza que es hijo del mailUl.

mainUl.prepend(pizza); // Pongo el Elemento con ID pizza dentro del Elemento mailUl antes de todos los demás elementos.

let ulPizzaFruta = document.querySelector("ul").children[3]; // Selecciona el 4 elemento hijo de mainUl (Índice 3) y se lo asigno a la variable ulPizzaFruta, el elemento contiene las recetas de pizzas de fruta.

pizza.after(ulPizzaFruta); // Pongo la lista de pizzas de frutas ulPizzaFruta después de el elemento con ID pizza, que es el título de las recetas de pizzas de frutas.