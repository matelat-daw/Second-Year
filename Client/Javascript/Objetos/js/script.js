let musicos = [];

function coleccionHardcodeada()
{
    let musico1 = {name: "John", surname: "Lennon", group: "The Beatles", age: 40, bday: 1940, instrument: {first: "Guitarra", second: "Voz", third: "", place: 1}};
    let musico2 = {name: "Paul", surname: "McCartney", group: "The Beatles", age: 38, bday: 1942, instrument: {first: "Bajo", second: "Voz", third: "", place: 2}};
    let musico3 = {name: "George", surname: "Harrison", group: "The Beatles", age: 37, bday: 1943, instrument: {first: "Guitarra", second: "Voz", third: "Coros", place: 3}};
    let musico4 = {name: "Ringo", surname: "Start", group: "The Beatles", age: 40, bday: 1940, instrument: {first: "Batería", second: "Voz", third: "Coros", place: 4}};
    let musico5 = {name: "Freddie", surname: "Mercury", group: "Queen", age: 34, bday: 1946, instrument: {first: "Piano", second: "Voz", third: "", place: 1}};
    let musico6 = {name: "Brian", surname: "May", group: "Queen", age: 33, bday: 1947, instrument: {first: "Guitarra", second: "Voz", third: "", place: 2}};
    let musico7 = {name: "Roger", surname: "Taylor", group: "Queen", age: 31, bday: 1949, instrument: {first: "Batería", second: "Coros", third: "", place: 3}};
    let musico8 = {name: "John", surname: "Deacon", group: "Queen", age: 29, bday: 1951, instrument: {first: "Bajo", second: "Coros", third: "", place: 4}};
    let musico9 = {name: "Paul", surname: "Simon", group: "Simon & Garfunkel", age: 39, bday: 1941, instrument: {first: "Guitarra", second: "Piano", third: "Voz", place: 1}};
    let musico10 = {name: "Arthur", surname: "Garfunkel", group: "Simon & Garfunkel", age: 39, bday: 1941, instrument: {first: "Guitarra", second: "Piano", third: "Voz", place: 1}};

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

    object.innerHTML = "";
    musicos.forEach(musico => object.innerHTML += musico.name + "<br>");

    console.log(musicos);
}

function coleccionPorCodigo()
{
    let musico1 = {};
    musico1.name = "John";
    musico1.surname = "Lennon";
    musico1.group = "The Beatles";
    musico1.age = 40;
    musico1.bday = 1940;
    musico1.instrument = {};
    musico1.instrument.first = "Guitarra";
    musico1.instrument.second = "Voz";
    musico1.instrument.third = "";
    musico1.instrument.place = 1;

    let musico2 = {};
    musico2.name = "Paul";
    musico2.surname = "McCartney";
    musico2.group = "The Beatles";
    musico2.age = 38;
    musico2.bday = 1942;
    musico2.instrument = {};
    musico2.instrument.first = "Bajo";
    musico2.instrument.second = "Voz";
    musico2.instrument.third = "";
    musico2.instrument.place = 2;

    let musico5 = {};
    musico5.name = "Freddie";
    musico5.surname = "Mercury";
    musico5.group = "Queen";
    musico5.age = 34;
    musico5.bday = 1946;
    musico5.instrument = {};
    musico5.instrument.first = "Piano";
    musico5.instrument.second = "Voz";
    musico5.instrument.third = "";
    musico5.instrument.place = 1;

    let musico6 = {};
    musico6.name = "Brian";
    musico6.surname = "May";
    musico6.group = "Queen";
    musico6.age = 33;
    musico6.bday = 1947;
    musico6.instrument = {};
    musico6.instrument.first = "Guitarra";
    musico6.instrument.second = "Voz";
    musico6.instrument.third = "";
    musico6.instrument.place = 2;

    let musico3 = {};
    musico3["name"] = "George";
    musico3["surname"] = "Harrison";
    musico3["group"] = "The Beatles";
    musico3["age"] = 37;
    musico3["bday"] = 1943;
    musico3["instrument"] = {};
    musico3["instrument"].first = "Guitarra";
    musico3["instrument"].second = "Voz";
    musico3["instrument"].third = "Coros";
    musico3["instrument"].place = 3;

    let musico4 = {};
    musico4["name"] = "Ringo";
    musico4["surname"] = "Star";
    musico4["group"] = "The Beatles";
    musico4["age"] = 3
    musico4["bday"] = 40;
    musico4["instrument"] = {};
    musico4["instrument"].first = "Batería";
    musico4["instrument"].second = "Voz";
    musico4["instrument"].third = "Coros";
    musico4["instrument"].place = 4;

    let musico7 = {};
    musico7["name"] = "Roger";
    musico7["surname"] = "Taylor";
    musico7["group"] = "Queen";
    musico7["age"] = 31;
    musico7["bday"] = 1949;
    musico7["instrument"] = {};
    musico7["instrument"].first = "Guitarra";
    musico7["instrument"].second = "Voz";
    musico7["instrument"].third = "Coros";
    musico7["instrument"].place = 3;

    let musico8 = {};
    musico8["name"] = "John";
    musico8["surname"] = "Deacon";
    musico8["group"] = "Queen";
    musico8["age"] = 29
    musico8["bday"] = 1951;
    musico8["instrument"] = {};
    musico8["instrument"].first = "Batería";
    musico8["instrument"].second = "Voz";
    musico8["instrument"].third = "Coros";
    musico8["instrument"].place = 4;

    let musico9 = {};
    musico9.name = "Paul";
    musico9.surname = "Simon";
    musico9.group = "Simon & Garfunkel";
    musico9.age = 39;
    musico9.bday = 1941;
    musico9.instrument = {};
    musico9.instrument.first = "Guitarra";
    musico9.instrument.second = "Piano";
    musico9.instrument.third = "Voz";
    musico9.instrument.place = 1;

    let musico10 = {};
    musico10["name"] = "Arthur";
    musico10["surname"] = "Garfunkel";
    musico10["group"] = "Simon & Garfunkel";
    musico10["age"] = 39;
    musico10["bday"] = 1941;
    musico10["instrument"] = {};
    musico10["instrument"].first = "Guitarra";
    musico10["instrument"].second = "Piano";
    musico10["instrument"].third = "Voz";
    musico10["instrument"].place = 1;

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

    object.innerHTML = "";
    musicos.forEach(musico => object.innerHTML += musico.name + " " + musico.surname + " <span class='color_blue'>Integrante de</span> <span class='color_yellow'>" + musico.group + "</span><br>");

    console.log(musicos);
}

function obtenerJSON(string) // Devuelve el array de objetos.
{
    console.log(string); // Muestra en la consola lo que se para por parametro, es una string.
    let data = JSON.parse(string); // Asigna a data el JSON.parse de la string.
    console.log(data); // Muestra data en la consola, es el array de objetos.
    return string; // Retorna la cadena de texto.
}

function persist() // Alamacena los datos en LocalStorage.
{
    localStorage.setItem("Musicos", JSON.stringify(musicos)); // Para Almacenar en LocalStorage un Array de Objetos hay que pasarlo a string primero con JSON.stringify(name).
    hide.style.display = "block";
}

function show(group)
{
    let objeto = JSON.parse(localStorage.getItem("Musicos")); // Para Obtener los datos como un array de Objetos hay que usar la función JSON.parse("Name").

    objeto.forEach(musico => { if(group == musico.group) // Se recorre todo el Objeto y si el Grupo del Objeto es el seleccionado en el selector por el Usuario.
    {
        result.innerHTML += musico.name + " " + musico.surname + "<br>"; // Se muestran en pantalla el nombre y apellido de los músicos de ese grupo.
    }});
    hide.style.display = "none";
}