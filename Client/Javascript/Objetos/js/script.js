let musicos = [];

function coleccionHardcodeada()
{
    let musico1 = {name: "John", surname: "Lennon", group: "The Beatles", age: 40, bday: 1940, instruments: {first: "Guitarra", second: "Voz", third: "", place: 1}};
    let musico2 = {name: "Paul", surname: "McCartney", group: "The Beatles", age: 38, bday: 1942, instruments: {first: "Bajo", second: "Voz", third: "", place: 2}};
    let musico3 = {name: "George", surname: "Harrison", group: "The Beatles", age: 37, bday: 1943, instruments: {first: "Guitarra", second: "Voz", third: "Coros", place: 3}};
    let musico4 = {name: "Ringo", surname: "Start", group: "The Beatles", age: 40, bday: 1940, instruments: {first: "Batería", second: "Voz", third: "Coros", place: 4}};
    let musico5 = {name: "Freddie", surname: "Mercury", group: "Queen", age: 34, bday: 1946, instruments: {first: "Piano", second: "Voz", third: "", place: 1}};
    let musico6 = {name: "Brian", surname: "May", group: "Queen", age: 33, bday: 1947, instruments: {first: "Guitarra", second: "Voz", third: "", place: 2}};
    let musico7 = {name: "Roger", surname: "Taylor", group: "Queen", age: 31, bday: 1949, instruments: {first: "Batería", second: "Coros", third: "", place: 3}};
    let musico8 = {name: "John", surname: "Deacon", group: "Queen", age: 29, bday: 1951, instruments: {first: "Bajo", second: "Coros", third: "", place: 4}};
    let musico9 = {name: "Paul", surname: "Simon", group: "Simon & Garfunkel", age: 39, bday: 1941, instruments: {first: "Guitarra", second: "Piano", third: "Voz", place: 1}};
    let musico10 = {name: "Arthur", surname: "Garfunkel", group: "Simon & Garfunkel", age: 39, bday: 1941, instruments: {first: "Guitarra", second: "Piano", third: "Voz", place: 1}};

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

    // object.innerHTML = "";
    // musicos.forEach(musico => object.innerHTML = "<h3>" + musico.name + "</h3>");

    // console.log(musicos);

    return musicos;
}

function coleccionPorCodigo()
{
    let musico1 = {};
    musico1.name = "John";
    musico1.surname = "Lennon";
    musico1.group = "The Beatles";
    musico1.age = 40;
    musico1.bday = 1940;
    musico1.instruments = {};
    musico1.instruments.first = "Guitarra";
    musico1.instruments.second = "Voz";
    musico1.instruments.third = "";
    musico1.instruments.place = 1;
    musico1.mostrar = mostrarTodo;

    let musico2 = {};
    musico2.name = "Paul";
    musico2.surname = "McCartney";
    musico2.group = "The Beatles";
    musico2.age = 38;
    musico2.bday = 1942;
    musico2.instruments = {};
    musico2.instruments.first = "Bajo";
    musico2.instruments.second = "Voz";
    musico2.instruments.third = "";
    musico2.instruments.place = 2;
    musico2.mostrar = mostrarTodo;

    let musico5 = {};
    musico5.name = "Freddie";
    musico5.surname = "Mercury";
    musico5.group = "Queen";
    musico5.age = 34;
    musico5.bday = 1946;
    musico5.instruments = {};
    musico5.instruments.first = "Piano";
    musico5.instruments.second = "Voz";
    musico5.instruments.third = "";
    musico5.instruments.place = 1;
    musico5.mostrar = mostrarTodo;

    let musico6 = {};
    musico6.name = "Brian";
    musico6.surname = "May";
    musico6.group = "Queen";
    musico6.age = 33;
    musico6.bday = 1947;
    musico6.instruments = {};
    musico6.instruments.first = "Guitarra";
    musico6.instruments.second = "Voz";
    musico6.instruments.third = "";
    musico6.instruments.place = 2;
    musico6.mostrar = mostrarTodo;

    let musico3 = {};
    musico3["name"] = "George";
    musico3["surname"] = "Harrison";
    musico3["group"] = "The Beatles";
    musico3["age"] = 37;
    musico3["bday"] = 1943;
    musico3["instruments"] = {};
    musico3["instruments"]["first"] = "Guitarra";
    musico3["instruments"]["second"] = "Voz";
    musico3["instruments"]["third"] = "Coros";
    musico3["instruments"]["place"] = 3;
    musico3["mostrar"] = mostrarTodo;

    let musico4 = {};
    musico4["name"] = "Ringo";
    musico4["surname"] = "Star";
    musico4["group"] = "The Beatles";
    musico4["age"] = 3
    musico4["bday"] = 40;
    musico4["instruments"] = {};
    musico4["instruments"]["first"] = "Batería";
    musico4["instruments"]["second"] = "Voz";
    musico4["instruments"]["third"] = "Coros";
    musico4["instruments"]["place"] = 4;
    musico4["mostrar"] = mostrarTodo;

    let musico7 = {};
    musico7["name"] = "Roger";
    musico7["surname"] = "Taylor";
    musico7["group"] = "Queen";
    musico7["age"] = 31;
    musico7["bday"] = 1949;
    musico7["instruments"] = {};
    musico7["instruments"]["first"] = "Guitarra";
    musico7["instruments"]["second"] = "Voz";
    musico7["instruments"]["third"] = "Coros";
    musico7["instruments"]["place"] = 3;
    musico7["mostrar"] = mostrarTodo;

    let musico8 = {};
    musico8["name"] = "John";
    musico8["surname"] = "Deacon";
    musico8["group"] = "Queen";
    musico8["age"] = 29
    musico8["bday"] = 1951;
    musico8["instruments"] = {};
    musico8["instruments"]["first"] = "Batería";
    musico8["instruments"]["second"] = "Voz";
    musico8["instruments"]["third"] = "Coros";
    musico8["instruments"]["place"] = 4;
    musico8["mostrar"] = mostrarTodo;

    let musico9 = {};
    musico9.name = "Paul";
    musico9.surname = "Simon";
    musico9.group = "Simon & Garfunkel";
    musico9.age = 39;
    musico9.bday = 1941;
    musico9.instruments = {};
    musico9.instruments.first = "Guitarra";
    musico9.instruments.second = "Piano";
    musico9.instruments.third = "Voz";
    musico9.instruments.place = 1;
    musico9.mostrar = mostrarTodo;

    let musico10 = {};
    musico10["name"] = "Arthur";
    musico10["surname"] = "Garfunkel";
    musico10["group"] = "Simon & Garfunkel";
    musico10["age"] = 39;
    musico10["bday"] = 1941;
    musico10["instruments"] = {};
    musico10["instruments"]["first"] = "Guitarra";
    musico10["instruments"]["second"] = "Piano";
    musico10["instruments"]["third"] = "Voz";
    musico10["instruments"]["place"] = 1;
    musico10["mostrar"] = mostrarTodo;

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

    // object.innerHTML = "";
    // musicos.forEach(musico => object.innerHTML = "<h3>" + musico.name + " " + musico.surname + " <span class='color_blue'>Integrante de</span> <span class='color_yellow'>" + musico.group + "</span></h3>");

    // console.log(musicos);
    return musicos;
}

// function obtenerJSON(string) // Devuelve el array de objetos.
// {
//     console.log(string); // Muestra en la consola lo que se para por parametro, es una string.
//     let data = JSON.parse(string); // Asigna a data el JSON.parse de la string.
//     console.log(data); // Muestra data en la consola, es el array de objetos.
//     return string; // Retorna la cadena de texto.
// }

function guardaEnLocalStorage(clave, coleccion) // Alamacena los datos en LocalStorage.
{
    localStorage.setItem(clave, JSON.stringify(coleccion)); // Para Almacenar en LocalStorage un Array de Objetos hay que pasarlo a string primero con JSON.stringify(name).
    // hide.style.display = "block";
}

function mostrarMusico(group)
{
    let objeto = JSON.parse(localStorage.getItem("Musicos")); // Para Obtener los datos como un array de Objetos hay que usar la función JSON.parse("Name").
    result.innerHTML = "";

    objeto.forEach(musico => { if(group == musico.group) // Se recorre todo el Objeto y si el Grupo del Objeto es el seleccionado en el selector por el Usuario.
    {
        result.innerHTML += "<h3>" + musico.name + " " + musico.surname + "</h3>"; // Se muestran en pantalla el nombre y apellido de los músicos de ese grupo.
    }});
    hide.style.display = "none";
}

// let last_group = ""; // Variable temporal que tiene el nombre de los grupos al cambiar, de entrada es una string vacia.
// result.innerHTML = "";

musicos.forEach(group => {group.mostrar()});

function mostrar()
{
    // if (last_group != this.group) // Si el Grupo que llega del objeto es distinto al último grupo.
    // {
        console.log(this.group); // Muestra por consola el grupo.
        document.body.innerHTML += "<h3>" + this.group + "</h3>"; // Muestra los Grupos en el body.
        // last_group = this.group; // Asigna a last_group en grupo del contexto.
    // }
}