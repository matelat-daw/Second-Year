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
  ]
export function ejercicio1(nombre, apellido1, apellido2, sexo, edad, equipo){
  let deportista = {};
  deportista["nombre"] = nombre;
  deportista["apellido1"] = apellido1;
  deportista["apellido2"] = apellido2;
  deportista["sexo"] = sexo;
  deportista["edad"] = edad;
  deportista["equipo"] = equipo;

  return deportista;
}
export function ejercicio2(nombre, apellido1, apellido2, sexo, edad, equipo){
      this.nombre = nombre;
      this.apellido1 = apellido1;
      this.apellido2 = apellido2;
      this.sexo = sexo;
      this.edad = edad;
      this.equipo = equipo;
}
export function ejercicio3(deportista){
    let stringDeportista = `${deportista.nombre}, ${deportista.apellido1}, ${deportista.apellido2}`;
    return stringDeportista;
}
export function ejercicio4(anio, mes, dia, ...idiomas){
    let arrayFechas;
    let indice = 0;
    arrayFechas[indice] = idiomas.forEach(indice, idioma =>
    new Intl.DateTimeFormat(indice++, idioma, {
      day: "2-digit",
      month: "long",
      year: "numeric",
      }).format(new Date(anio,mes,dia)));
}
export function ejercicio5(deportista){
    deportista.participaEn.carrera = "cuatroKm";
    deportista.participaEn.tiempoEnSegundos = 0;
    deportista.participaEn.distanciaKm = 4;
}
export function ejercicio6(pNombre){
    let numeros = localStorage.getItem(pNombre);
    let result = 0;

    for (var i = 0; i < numeros.length; i++) // Lo Siento no me acordé como hacer el forEach.
    {
      result += numero[i];
    }
    return result;
}
export function ejercicio7(arrayDeportistas){
  let deportistas = arrayDeportistas.map(deportista => ({...deportista, Categoria: deportista.edad < 35 ? "ABS" : deportista.edad < 45 ? "M35" : deportista.edad < 55 ? "M45" : "M55"}));
  return deportistas;
}
export function ejercicio8(arrayDeportistas, pNombre){
    let deportistas;
    deportistas = arrayDeportistas.filter(deportistas => deportistas.nombre != pNombre).map(deportista => deportista);
    return deportistas;
}
export function ejercicio9(arrayDeportistas, pEquipo){
  let equipo = arrayDeportistas.equipo; // Destructuración de Equipo.
  // let deportistas = "<ul>" + arrayDeportistas.filter(deportista => deportista.equipo == pEquipo).map(deportista => `<li>${deportista.nombre}</li>`) + "</ul>";
  let deportistas = `<ul>${arrayDeportistas.filter(deportista => equipo == pEquipo).map(deportista => `<li>${deportista.nombre}</li>`)}</ul>`;
  return deportistas;
}
export function ejercicio10(arrayDeportistas, pEquipo){
    let deportistas = arrayDeportistas.filter(deportista => deportista.equipo == pEquipo).reduce((numeroDeDeportitas, deportista) => numeroDeDeportitas = deportista.length, 0);
    return deportistas;
}
export function ejercicio11(arrayDeportistas, pEquipo){
  let deportistas = arrayDeportistas.filter(deportista => deportista.equipo == pEquipo).map(deportista => ({...deportista, tiempoTotal: deportista.reduce((totalTiempo, participaEn) => totalTiempo += participaEn.tiempoEnSegundos)}));
  return deportistas;
}
export function ejercicio12(arrayDeportistas){
  let numDorsal = 1000;
  let deportistas = arrayDeportistas.map(deportista => ({...deportista, numDorsal: numDorsal++})).sort((a, b) => a.numDorsal, b.numDorsal);
  return deportistas;
}