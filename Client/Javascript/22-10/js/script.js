const DOM = {
    result: document.getElementById("result"),
    result2: document.getElementById("result2"),
    result3: document.getElementById("result3"),
    result4: document.getElementById("result4"),
    result5: document.getElementById("result5")
};

let pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Francisco Javier González Pérez",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

  var jobs = [{receptionist: "James"}, 
    {programmer: "Steve"},
    {designer: "Alicia"}];

function idInitials()
{
    let pilots6 = pilots.map(pilot => ({ id: pilot.id, iniciales: pilot.name.split(" ").map(iniciales => iniciales[0]).join("")})).sort((a, b) => a.id - b.id);
console.log(pilots6);

let pilots7 = pilots.map(pilot => ({ id: pilot.id, iniciales: pilot.name.split(" ").map(iniciales => iniciales[0]).join("")})).sort((a, b) => b.id - a.id);
console.log(pilots7);

let pilots8 = pilots.map(pilot => ({ id: pilot.id, iniciales: pilot.name.split(" ").reduce((inic, palabra) => (inic + palabra[0]), '')}));
console.log(pilots8);
}

var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];
  
  let jediPersonnelAsc = personnel.filter(person => person.isForceUser).sort((a, b) => a.id - b.id); // Ordena por Números Ascendente.

  let jediPersonnelDesc = personnel.filter(person => person.isForceUser).sort((a, b) => b.id - a.id); // Ordena por Números Descendente.

  let jediSortedAsc = personnel.filter(person => person.isForceUser).sort((a, b) => a.name.localeCompare(b.name)); // Ordena por Orden Alfabético, A - Z.

  let jediSortedDesc = personnel.filter(person => person.isForceUser).sort((a, b) => b.name.localeCompare(a.name)); // Ordena por Orden Alfabético, Z - A.


  let programadores=[
    {nombre: 'Antonio', apellido1: 'García', apellido2: 'González', edad: 25, lenguajes: ['C++','JS', 'PHP']},
    {nombre: 'Ana', apellido1: 'Pérez', apellido2: 'Días', edad: 30, lenguajes: ['C','JS', 'Java']},
    {nombre: 'Pedro', apellido1: 'Abad', apellido2: 'García', edad: 24, lenguajes: ['Python','JS', 'Java','C++']}
    ];


    let redu = programadores.reduce((acc, item) => acc + (acc ? " - " : "") + item.nombre, "");


    let lenguajesAna = programadores[1].lenguajes;
    console.log(lenguajesAna);
    let lenguajesPedro = programadores[2].lenguajes;
    console.log(lenguajesPedro);

    let lenguajesAnaPedro = [...lenguajesAna , ...lenguajesPedro ];
    console.log(lenguajesAnaPedro);
    let lenguajesAnaPedroNoRepeat = new Set([...lenguajesAna,...lenguajesPedro]);
    console.log(lenguajesAnaPedroNoRepeat);
    let lenguajesAnaPedroArray = Array.from(new Set([...lenguajesAna,...lenguajesPedro]));
    console.log(lenguajesAnaPedroArray);
    let programmer = programadores.map(programador => {return { ...programador, menorDe25: (programador.edad <= 25 ? true : false)}});
    console.log(programmer);



    
    let a = [1,2,3,4,5];
    let b = a.splice(2,1).map(i => `Num: ${i}`);
    console.log(a);
    console.log(b);

    let people = [{"Name":"Bob","Age":"45"},{"Name":"Jim","Age":"45"}]

    let result = people.splice(people.findIndex(({Name}) => Name == "Bob"), 1).map(Name => ({Name: Name.Name, Age: Name.Age}));
    console.log(people);
    console.log(result);