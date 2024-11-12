let momentoCero = new Date(0); // Obtiene la fecha 1/1/1970, el TimeStamp es 0 y devuelve: Thu Jan 01 1970 00:00:00 GMT+0000.
console.log(momentoCero);
let antesDeCero = new Date(-1); // El día anterior al momento 0.

Date.parse("1970-01-01 00:00:0000"); // A partir de la fecha se obtiene el 0.

let fecha = new Date("2021-10-30 00:00"); // Da la Fecha Sab 30 de Octubre de 2021 hora 00:00.

let timeStamp = fecha.getTime(); // Obtiene el TimeStamp de la fecha, el tiempo en milisegundos.

let fecha2 = new Date("2020/30/30"); // Devuelve NaN ya que la fecha(30 del 30 de 2020) no está en un formato correcto.

let unDia = 24*60*60*1000; // Un Día (24 Hs.) en milisegundos.

let unaHora = 60*60*1000; // Una Hora en milisegundos.


let oct30 = new Date(2021,9,30,0,0); // El mes 9 es Octubre, ya que cuentan desde 0.
let oct31 = new Date(2021,9,31,0,0);
let nov01 = new Date(2021,10,1,0,0);

console.log("Horas del 30 al 31 de oct.: " + (oct31.getTime() - oct30.getTime())/unaHora);
console.log("Horas del 31 de oct. al 1 de nov.: " + (nov01.getTime() - oct31.getTime())/unaHora);

let fecah3=new Date(2021,10,30);
fecha3.setFullYear(2022);
console.log(fch.getFullYear());

new Intl.DateTimeFormat("es", {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
    }).format(new Date(2021,09,10,8,0)); // Domingo 10 de Octubre a las 8:00 Formato Español.


let importe=125.86;
Intl.NumberFormat('es-ES', { style: 'currency',
currency: 'EUR' }).format(importe); // Formato de moneda en Español.

// second Segundos numeric o 2-digit.
// fractionalSecondDigits Dígitos de las fracciones de segundos: 1, 2 o 3.
// timeZoneName Nombre de la zona horaria: long o short