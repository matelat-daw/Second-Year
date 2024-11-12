let carrera = {
    nombre: "Maratón",
    distancia: 42,
    totalParticipantes: 300
}

// let nombre = carrera.nombre;
// let distancia = carrera.distancia;
// let totalParticipantes = carrera.totalParticipantes;

// console.log("Propiedades del Objeto: ", nombre + " - " + distancia + " - " + totalParticipantes);

// let {nombre, distancia, totalParticipantes} = carrera;

// console.log("Propiedades Destructuradas: ", nombre, " - " + distancia + " - " + totalParticipantes);

// let {nombre, distancia, totalParticipantes : inscritos} = carrera;

// console.log("Propiedades Destructuradas: ", nombre, " - " + distancia + " - " + inscritos);

// let {nombre, totalParticipantes, ...otrosDatos} = carrera; // El spread se escribe al final de los parámetro y permite cambiar el orden de las propiedades.

// console.log("Esta da: " + nombre, totalParticipantes, otrosDatos); // Maraton 300 y el objeto con la distancia.

// let [maraton,,, km4] = [42, 21, 8, 4]
// console.log(maraton, km4);

// let [maraton, km4, ...otrosDatos] = [42, 21, 8, 4]; // Este No Funciona.
// console.log(maraton, km4);

// let km4 = 8;
// let km8 = 4;
// [km4, km8] = [km8, km4]; // Invierte los valores destructurando.
// console.log(km4);
// console.log(km8);

carrera.map(carrea => carrera.nombre);

carrera.map(({nombre}) => `${nombre}`);