const DOM = {
    pilots: document.getElementById("pilots"),
    pilots2: document.getElementById("pilots2"),
    complex: document.getElementById("complex"),
    years: document.getElementById("years"),
    years2: document.getElementById("years2"),
    id_i: document.getElementById("id_i"),
    people2000: document.getElementById("people2000"),
    laPalma: document.getElementById("laPalma"),
    laPalma2: document.getElementById("laPalma2"),
    laPalma3: document.getElementById("laPalma3"),
    sortPilots: document.getElementById("sortPilots")
};

let strMunicipios='[{"municipio":"Adeje","poblacion":47869,"isla":"Tenerife"},{"municipio":"Agulo","poblacion":1096,"isla":"La Gomera"},{"municipio":"Alajeró","poblacion":2017,"isla":"La Gomera"},{"municipio":"Arafo","poblacion":5551,"isla":"Tenerife"},{"municipio":"Arico","poblacion":7988,"isla":"Tenerife"},{"municipio":"Arona","poblacion":81216,"isla":"Tenerife"},{"municipio":"Barlovento","poblacion":1876,"isla":"La Palma"},{"municipio":"Breña Alta","poblacion":7204,"isla":"La Palma"},{"municipio":"Breña Baja","poblacion":5690,"isla":"La Palma"},{"municipio":"Buenavista del Norte","poblacion":4778,"isla":"Tenerife"},{"municipio":"Candelaria","poblacion":27985,"isla":"Tenerife"},{"municipio":"Fasnia","poblacion":2786,"isla":"Tenerife"},{"municipio":"Frontera","poblacion":4093,"isla":"El Hierro"},{"municipio":"Fuencaliente de la Palma","poblacion":1722,"isla":"La Palma"},{"municipio":"Garachico","poblacion":4871,"isla":"Tenerife"},{"municipio":"Garafía","poblacion":1667,"isla":"La Palma"},{"municipio":"Granadilla de Abona","poblacion":50146,"isla":"Tenerife"},{"municipio":"La Guancha","poblacion":5520,"isla":"Tenerife"},{"municipio":"Guía de Isora","poblacion":21368,"isla":"Tenerife"},{"municipio":"Güímar","poblacion":20190,"isla":"Tenerife"},{"municipio":"Hermigua","poblacion":1832,"isla":"La Gomera"},{"municipio":"Icod de los Vinos","poblacion":23254,"isla":"Tenerife"},{"municipio":"Los Llanos de Aridane","poblacion":20462,"isla":"La Palma"},{"municipio":"La Matanza de Acentejo","poblacion":9061,"isla":"Tenerife"},{"municipio":"La Orotava","poblacion":42029,"isla":"Tenerife"},{"municipio":"El Paso","poblacion":7622,"isla":"La Palma"},{"municipio":"El Pinar de El Hierro","poblacion":1870,"isla":"El Hierro"},{"municipio":"Puerto de la Cruz","poblacion":30468,"isla":"Tenerife"},{"municipio":"Puntagorda","poblacion":2110,"isla":"La Palma"},{"municipio":"Puntallana","poblacion":2506,"isla":"La Palma"},{"municipio":"Los Realejos","poblacion":36402,"isla":"Tenerife"},{"municipio":"El Rosario","poblacion":17370,"isla":"Tenerife"},{"municipio":"San Andrés y Sauces","poblacion":4141,"isla":"La Palma"},{"municipio":"San Cristóbal de La Laguna","poblacion":157503,"isla":"Tenerife"},{"municipio":"San Juan de la Rambla","poblacion":4828,"isla":"Tenerife"},{"municipio":"San Miguel de Abona","poblacion":20886,"isla":"Tenerife"},{"municipio":"San Sebastián de la Gomera","poblacion":9093,"isla":"La Gomera"},{"municipio":"Santa Cruz de La Palma","poblacion":15716,"isla":"La Palma"},{"municipio":"Santa Cruz de Tenerife","poblacion":207312,"isla":"Tenerife"},{"municipio":"Santa Úrsula","poblacion":14679,"isla":"Tenerife"},{"municipio":"Santiago del Teide","poblacion":11111,"isla":"Tenerife"},{"municipio":"El Sauzal","poblacion":8934,"isla":"Tenerife"},{"municipio":"Los Silos","poblacion":4693,"isla":"Tenerife"},{"municipio":"Tacoronte","poblacion":24134,"isla":"Tenerife"},{"municipio":"El Tanque","poblacion":2763,"isla":"Tenerife"},{"municipio":"Tazacorte","poblacion":4575,"isla":"La Palma"},{"municipio":"Tegueste","poblacion":11294,"isla":"Tenerife"},{"municipio":"Tijarafe","poblacion":2532,"isla":"La Palma"},{"municipio":"Valle Gran Rey","poblacion":4564,"isla":"La Gomera"},{"municipio":"Vallehermoso","poblacion":2901,"isla":"La Gomera"},{"municipio":"Valverde","poblacion":5005,"isla":"El Hierro"},{"municipio":"La Victoria de Acentejo","poblacion":9185,"isla":"Tenerife"},{"municipio":"Vilaflor de Chasna","poblacion":1667,"isla":"Tenerife"},{"municipio":"Villa de Mazo","poblacion":4843,"isla":"La Palma"}]';
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

function nombrePilotos() // Uso de Map, devuelve el mismo array.
{
    DOM.pilots.innerHTML = pilots.map(pilot => "<li style='font-weight: bold'>Nombre: " + pilot.name + "</li>" + (pilot.years > 20 ? "<li style='color: blue'>" : "<li style='color: red'>") + "Experiencia: " + pilot.years + "</li>").join("");

    DOM.pilots2.innerHTML = pilots.map(pilot => (`Nombre: ${pilot.name} Experiencia: ${pilot.years}`)).join("<br>");

    console.log(pilots.map(pilot => (`Nombre: ${pilot.name} Experiencia: ${pilot.years}`)).join("\n"));
}

function nombrePilotosComplejo()
{
    DOM.complex.innerHTML = JSON.stringify(pilots.map(pilot => "<li style='font-weight: bold'>Nombre: " + pilot.name + "</li>" + (pilot.years > 20 ? "<li style='color: blue'>" : "<li style='color: red'>") + "Experiencia: " + pilot.years + "</li>"));
}


function totalYears() // Filter devuelve un array diferente según la condición que se desee, en este caso obtuve los años de vuelo de los pilotos y los acumulé en result.
{
    let result = 0; // Filter Necesita una varaible externa para usar como acumulador.
    pilots.filter(pilot => result += pilot.years);
    DOM.years.innerHTML = "Los Pilotos Tienen: " + "<span style='color: green; font-size: 1.5em'>" + result + "</span> Años de Experiencia.";
}

function totalYears2() // Usando Reduce se puede retornar toda la función.
{
    DOM.years2.innerHTML = "Los Pilotos Tienen: <span style='color: green; font-size: 1.5em'>" + pilots.reduce((result, pilot) => result + pilot.years, 0) + "</span> Años de Experiencia.";
    
    // pilots.filter (piloto => piloto.years > 15).map(piloto => ({name: piloto.name, id: piloto.id})); // Nombre de los pilotos y su ID si tienen más de 15 añpos de experiencia.
}

function totalYears3() // Usando Reduce se puede retornar toda la función.
{
    DOM.years3.innerHTML = "Los Pilotos Tienen: <span style='color: green; font-size: 1.5em'>" + pilots.reduce((result, pilot) => result + pilot.years, 0) + "</span> Años de Experiencia.";
    
    
    // pilots.filter (piloto => piloto.years > 15).map(piloto => ({name: piloto.name, id: piloto.id})); // Nombre de los pilotos y su ID si tienen más de 15 añpos de experiencia.
}

function pilotIdI() // Devuelve el array completo pero solo las id y la inicial de los pilotos.
{
    result = "";
    pilots.filter(pilot => result += pilot.id + " - " + (pilot.name).charAt(0) + "<br>");
    DOM.id_i.innerHTML = result;
}

function people2000()
{
    let result = "";
    municipios = JSON.parse(strMunicipios);
    municipios.filter(municipio => municipio.poblacion < 2000 ? result += municipio.municipio + " - " + municipio.poblacion + " - " + municipio.isla + "<br>" : result);
    
    DOM.people2000.innerHTML = "Los Municipios de las Islas con una Población Inferior a 2000 Habitantes Son: <br>" + "<span style='color: green; font-size: 1.2em'>" + result + "</span> Habitantes.";

    municipios.filter(municipio => municipio.poblacion < 2000); // Correcta.

    municipios.filter(municipio => municipio.poblacion < 2000).map(municipio => ({municipio: municipio.municipio, poblacion: municipio.poblacion}));


    municipios.filter(municipio => municipio.poblacion < 2000).map(municipio => ({municipio: municipio.municipio, poblacion: municipio.poblacion})).sort((a, b) => a.población - b.poblacion); // Menor a Mayor.

    municipios.filter(municipio => municipio.poblacion < 2000).map(municipio => ({municipio: municipio.municipio, poblacion: municipio.poblacion})).sort((a, b) => b.población - a.poblacion); // A a la Z.

    municipios.filter(municipio => municipio.poblacion < 2000).map(municipio => ({municipio: municipio.municipio, poblacion: municipio.poblacion})).sort((a, b) => a.municipio.localeCompare(b.municipio)); // A a la Z.

    municipios.filter(municipio => municipio.poblacion < 2000).map(municipio => ({municipio: municipio.municipio, poblacion: municipio.poblacion})).sort((a, b) => b.municipio.localeCompare(a.municipio)); // A a la Z.

}

function laPalma()
{
    let result = 0;
    municipios = JSON.parse(strMunicipios);
    municipios.filter(municipio => municipio.isla == "La Palma"  ? result += municipio.poblacion : result);
    DOM.laPalma.innerHTML = "La Palma Tiene: " + "<span style='color: green; font-size: 1.5em'>" + result + "</span> Habitantes.";
}

function laPalma2()
{
    muni = JSON.parse(strMunicipios);
    DOM.laPalma2.innerHTML = "La Palma Tiene: <span style='color: green; font-size: 1.5em'>" + muni.reduce((pop, isla) => isla.isla == "La Palma" ? pop + isla.poblacion : pop, 0) + "</span> Habitantes.";
}

function laPalma3()
{
    muni = JSON.parse(strMunicipios);
    DOM.laPalma3.innerHTML = "La Palma Tiene: <span style='color: green; font-size: 1.5em'>" + muni.filter(municipio => municipio.isla == "La Palma").reduce((poblacionLaPalma, municipio) => poblacionLaPalma +  municipio.poblacion, 0) + "</span> Habitantes.";
}

function otraDeLaPalma()
{
    muni = JSON.parse(strMunicipios);
    muni.map(municipio => (`Municipio: ${municipio.municipio}, Poblacion: ${municipio.poblacion}`));
}

function Gomera()
{

}

function sortPilots()
{
    DOM.sortPilots.innerHTML = pilots.map(piloto => ({Nombre: piloto.name})).sort((a, b) => a.Nombre.localeCompare(b.Nombre));

    // DOM.sortPilots.innerHTML = pilots.map(piloto => (`Nombre: ${piloto.name}`).sort((a, b) => a.name.localeCompare(b.name)));
}

/* let array = [1, 2, 3, 4];
let accum = 0;
for (let i = 0; i < array.length; i++)
{
    accum += array[i];
}

console.log("El resultado es: " + accum);
document.getElementById("result").innerHTML = "El Resultado es: " + accum; */