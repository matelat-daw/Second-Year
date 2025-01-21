let cadena = prompt("Ingresa una palabra: "); // Así Ingresa Texto.
let num1 = Number (prompt("Ingrea el primer número: ")); // La Palabra Number hace que la entrada sea un Número.
let num2 = +prompt("Ingresa el segundo número: "); // El Signo + Hace que la entrada sea un número.
let num3 = parseInt (prompt("Ingrea el segundo número: ")); // Con parseInt También se Consigue un Número.
let result = num1 + num2;
alert ("El resultado es: " + result);
confirm ("Estás de Acuerdo que el Resultado es: " + result);
document.body.innerHTML = "<h2>El resultado de la suma de los números: " + num1 + " y " + num2 + " es: " + result + " y la cadena quedó: " + cadena.substring(1, 3) + "</h2>"; // Escribe en el body, la función substring muestra dos caracteres desde el 1 incluido hata el 3 sin incluir, la función substr muetra 3 caracteres desde el 1 hasta el 3 incluido pero está obsoleta.
let resultado = document.getElementById("resultado"); // En caso que haya un html con un elemento con ID resultado se puede obtener el Elemento por su ID.
console.log("Quedó: " + result); // Se Muestra el resultado por consola.
resultado.innerHTML = result; // Se Muestra en el Ellemento en su innerHTML el resultado de la suma de los dos números.

let h="Hola";
let m="Mundo";
let string = h.concat(m); // string = "HolaMundo".

h.startsWith("H");
h.endsWith("a"); // Devuelven true o false.

h.includes("o"); // Devuelva true si contiene la letra.

let numberCollection = [1, 2, 3, 4 ,5];

numberCollection.includes(3); // Devuelve true si contiene el número.

h.repeat(2); // Repite 2 veces la cadena.

h.replace("la", "al"); // Reemplaza el texto "la" en la cadena por el Texto "al".

h.slice(1, 3); // De la cadena "Hola" queda "ol".

h.substring(1, 3); // De la cadena "Hola" queda "ol".

h.substr(1,3); // Método Obsoleto (Deprecated), comienza a guardar a partir de 1 y va hasta 3. De la cadena "Hola" queda "ola".

numberCollection.splice(2, 0, 6, 9); // Agrega al array numberCollection los número 6 y 9 en la posición 3 y 4 (a partir del índice 2).

// Plantilla de Cadena de Caracteres.
`${h} ${m}` // "Hola Mundo".


let dias = " lun mar mié ";
let array = dias.split(" "); // Devuelve un Array con 5 posiciones: "" "lun", "mar", "mié" y "".
dias.trim(); // Quita los espacion de delante y detrás.
dias.trim().split(" "); // Devuelve un array con tres posiciones, hace el trim de los espacios y deja "lun", "mar", "mié".
dias.trim().split(" ").join(", "); // Vuelva a poner todo en una string con los tres datos separados por ", ".


let persona1={};
persona1.nombre="Juan";
persona1.apellido1="García";
persona1.apellido2="González"; // Crea el Objeto Persona1.
let persona2 = new Object;
persona2.nombre="Antonio"; // Notación de puntos
persona2['apellido1']="Pérez"; // Notación de corchetes
persona2.apellido2 = "Pérez"; // Crea el Objeto Persona2.
let persona3 = {nombre: "Ana", apellido1: "Díaz", apellido2: "Díaz"}; //Crea el Objeto Persona3.
function mostrarNombre(){console.log(`${this.nombre} ${this.apellido1} ${this.apellido2}`)} // Crea la función mostrarNombre.
persona1.mostrar=mostrarNombre; // Agrega a Persona1 el Atributo/Propiedad mostrar y le asigna la función mostrarNombre.
persona2.mostrar=mostrarNombre; // Agrega a Persona2 el Atributo/Propiedad mostrar y le asigna la función mostrarNombre.
persona3.mostrar=mostrarNombre; // Agrega a Persona3 el Atributo/Propiedad mostrar y le asigna la función mostrarNombre.
persona1.mostrar(); // Llama a la función mostrar().
listaPersonas = []; // Cresa un array Lista de Personas.
listaPersonas.push(persona1); // Agrega a la lista la persona1.
listaPersonas.push(persona2); // Agrega a la lista la persona2.
listaPersonas.push(persona3); // Agrega a la lista la persona3.
listaPersonas.forEach(persona => {persona.mostrar()}); // Hace un bucle con foreach recorriendo el array listaPersonas y usa la función mostrar en cada persona.


const userObj = {
    username: "Maria",
    email: "maria@mail.com"
}; // Crea un Objeto.
  
  localStorage.setItem('user', JSON.stringify(userObj));

  let data = localStorage.getItem('user');


  