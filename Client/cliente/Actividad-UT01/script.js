//DOM static selector
const DOM = {
  miFormulario: document.getElementById("mi_formulario"),
  idioma: document.getElementById("idioma"),
  group: document.getElementById("group"),
  staff: document.getElementById("staff"),
  bday: document.getElementById("bday"),
  miColeccion: document.getElementById("mi_coleccion"),
  tabla: document.getElementById("tabla_coleccion"),
  date: document.getElementById("date"),
  time: document.getElementById("time")
};

function Musico(id, name, surname, group, age, bday, first, second, third, showData)
{
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.group = group;
    this.age = age;
    this.bday = bday;
    this.first = first;
    this.second = second;
    this.third = third;
    this.showData = showData;
}

(function(){
  // AQUI - Recupera la colección del localStorage y muestralo en la tabla
  DOM.miFormulario.addEventListener("submit", guardarObjeto);
})()

function userProfile()
{

}

let musicos = [];

function guardarObjeto(e)
{
    // AQUI - Llamar a la función constructora del objeto.

    if (musicos.length == 0)
    {
        let musico1 = new Musico(1, "John Lennon", "The Beatles", 40, 1940, "Guitarra", "Voz",  "");
        let musico2 = new Musico(2, "Paul McCartney", "The Beatles", 38, 1942, "Bajo", "Voz", "");
        let musico3 = new Musico(3, "George Harrison", "The Beatles", 37, 1943, "Guitarra", "Voz", "Coros");
        let musico4 = new Musico(4, "Ringo Start", "The Beatles", 40, 1940, "Batería", "Voz", "Coros");
        let musico5 = new Musico(5, "Freddie Mercury", "Queen", 34, 1946, "Piano", "Voz", "");
        let musico6 = new Musico(6, "Brian May", "Queen", 33, 1947, "Guitarra", "Voz", "");
        let musico7 = new Musico(7, "Roger Taylor", "Queen", 31, 1949, "Batería", "Coros", "");
        let musico8 = new Musico(8, "John Deacon", "Queen", 29, 1951, "Bajo", "Coros", "");
        let musico9 = new Musico(9, "Paul Simon", "Simon & Garfunkel", 39, 1941, "Guitarra", "Piano", "Voz");
        let musico10 = new Musico(10, "Arthur Garfunkel", "Simon & Garfunkel", 39, 1941, "Guitarra", "Piano", "Voz");

        // AQUI - Hacer push en la colección.

        musicos.push(musico1);
        musicos.push(musico2);
        musicos.push(musico3);
        musicos.push(musico4);
        musicos.push(musico5);
        musicos.push(musico6);
        musicos.push(musico7);
        musicos.push(musico8);
        musicos.push(musico9);
        musicos.push(musico10);

        // AQUI - Actualizar la colección en el localStorage.

        localStorage.setItem("Musicos", JSON.stringify(musicos));
    }    

    // let select = document.getElementById('mi_coleccion'),
    options = DOM.miColeccion.options,
    len = options.length,
    data = [],
    i = 0;
    while (i < len)
    {
        if (options[i].selected)
            data[i] = options[i].value;
        i++;
    }

    let id = 1;
    let now = new Date().getFullYear();
    let staff = (DOM.bday.value).getFullYear();

    let yearsOld = now - staff;

    mostrarObjetoEnTabla(id, DOM.group.value, DOM.staff.value, DOM.bday.value, yearsOld, data[0], data[1], data[2]);
    e.preventDefault(); // Para evitar el envío del formulario
}

function borrarObjeto(id){
  //AQUI - Borrar el objeto de la colección
    alert("Programa esta función para borrar el objeto con id " + id)
    const index = array.indexOf(id);
    array.splice(index, 1);

  //AQUI - Actualizar la colección en el localStorage
    localStorage.removeItem("Musicos");
    localStorage.setItem("Musicos", JSON.stringify(musicos));

  //AQUI - Redibujar la tabla HTML
    guardarObjeto(null);
}

function mostrarObjetoEnTabla(miTexto, miNumero, inst1, inst2, inst3){
  let tr;
  let td;

  tr = document.createElement("tr");
  //
  td = document.createElement("td");
  td.textContent=miTexto;
  tr.appendChild(td);
  //
  td = document.createElement("td");
  td.textContent=miNumero;
  tr.appendChild(td);
  //
  td = document.createElement("td");
  td.textContent=inst1;
  tr.appendChild(td);
  //
  td = document.createElement("td");
  td.textContent=inst2;
  tr.appendChild(td);
  //
  td = document.createElement("td");
  td.textContent=inst3;
  tr.appendChild(td);
  //
  DOM.tabla.appendChild(tr); 
}

function showData()
{
    console.log(Musicos[0]);
}

// function populateCollection()
// {
//     let option;

//     option = document.createElement("option");
//     option.value = "Voz";
//     option.innerHTML = "Voz";
//     mi_coleccion.appendChild(option);

//     option = document.createElement("option");
//     option.value = "Guitarra";
//     option.innerHTML = "Guitarra";
//     mi_coleccion.appendChild(option);

//     option = document.createElement("option");
//     option.value = "Coros";
//     option.innerHTML = "Coros";
//     mi_coleccion.appendChild(option);
// }

function showDate(country)
{
  let localDate = new Intl.DateTimeFormat(country, {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
    }).format(new Date());

    DOM.date.innerHTML = "La Fecha es: " + localDate;
    updateTime();
    setInterval(updateTime, 1000);
}

function updateTime()
{
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format the string with leading zeroes
  const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  DOM.time.innerHTML = clockStr;
}