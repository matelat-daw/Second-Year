function run()
{
    let cadena = prompt("Ingresa una palabra: ");
    let num1 = Number (prompt("Ingrea el primer número: "));
    let num2 = +prompt("Ingrea el segundo número: ");
    // let num2 = parseInt (prompt("Ingrea el segundo número: "));
    let result = num1 + num2;
    document.body.innerHTML = "<h2>El resultado de la suma de los números: " + num1 + " y " + num2 + " es: " + result + " y la cadena quedó: " + cadena.substring(1, 3) + "</h2>"; // Escribe en el body, la función substring muestra dos caracteres desde el 1 incluido hata el 3 sin incluir, la función substr muetra 3 caracteres desde el 1 hasta el 3 incluido pero está obsoleta.
    let resultado = document.getElementById("resultado");
    console.log("Quedó: " + result);
    resultado.innerHTML = result;
}