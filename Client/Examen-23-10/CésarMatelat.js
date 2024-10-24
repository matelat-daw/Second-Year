export function ejercicio1 (programadores){
    let resultado;
    /*  - Colección con todos los programadores. 
        - Para cada programador un objeto complejo con nombre, apellido1 
        y apellido2
        - Ordenados por nombre de forma ascendente*/

        resultado = programadores.map((programador => programador.nombre + " - " + programador.apellido1 + " - " + programador.apellido2)).sort((a, b) => a.localeCompare(b));
        console.log(resultado);

    return resultado;
}

export function ejercicio2 (programadores){
    let resultado;
    /*  Colección con todos lo programadores incluyendo para cada programador los
        atributos originales más el atributo categoría que puede tener 2 valores:
        “junior” si tiene menos de 5 años de experiencia
        “senior” si tiene 5 o más años de experiencia.*/
    resultado = programadores.map(programador => {return { ...programador, categoría: (programador.edad <= 25 ? "junior" : "senior")}});

    return resultado;
}

export function ejercicio3 (programadores){
    let resultado;
    /*  Suma Total de años de experiencia de los programadores mayor que 24 años*/

    resultado = programadores.reduce((experiencia, programador) => experiencia + programador.experiencia, 0);
    return resultado;
}

export function ejercicio4 (programadores, anios){
    let resultado;
    /*  Colección de programadores cuya experiencia es superior número de años
        pasado por parámetro.*/
    resultado = programadores.filter(programador => programador.experiencia > anios);
    return resultado;
}

export function ejercicio5 (programadores, nombre){
    let resultado;
    /*  Retorna el objeto programador cuyo nombre es el nombre pasado por parámetros*/
    resultado = programadores.filter(programador => programador.nombre == nombre);
    return resultado;
}

export function ejercicio6 (programadores, nombre){
    let resultado;
    /*  Retorna TRUE si hay algún programador cuyo nombre es el nombre pasado por parámetros.
        En caso contrario retorna FALSE*/
        resultado = programadores.filter(programador => programador.nombre == nombre);
        if (resultado.length > 0)
        {
            resultado = true;
        }
        else
        {
            resultado = false;
        }
    return resultado;
}

export function ejercicio7 (/*programa los parámetros*/ ){
    /* La función tiene un número variable de parámetros.
       El primero es una clave y resto son lenguajes de programación
       La función guarda en el localStorage con la clave los lengajes como
       un string separados por comas.
       Ejemplo de paso de parámetros:
       ejercicio7("lenguajes", "PHP", "C++", "Java")
       Se almacena con la clave lenguajes el string "PHP,C++,Java"

    */
       let resultado;
       resultado = lenguaje.map(lenguaje1 => lenguaje1);
       localStorage.setItem("lenguajes", JSON.stringify(resultado));
}

export function ejercicio8 (nombre, apellido1, apellido2 ){
    let resultado;
    /* Retorna un objeto programador con 3 atributos (con el mismo nombre que los parámetros)
       con los datos pasados por parámetros.
       DEBES UTILIZAR notación de CORCHETES para crear los atributos

    */
        resultado = [];
        resultado.push(nombre);
        resultado.push(apellido1);
        resultado.push(apellido2);

        resultado = resultado.map(programador => `nombre: ${nombre}, apellido1: ${apellido1}, apellido2: ${apellido2}`);

        console.log(resultado);

        return resultado;
}


export function ejercicio9 (nombre, apellido1, apellido2){
    // let nombreCompleto;
    // /* Retorna un string ooncatenando los parámetros con plantilla de cadena de caracteres
    // */
    //    nombreCompleto = [];
    //    nombreCompleto.push(nombre);
    //    nombreCompleto.push(apellido1);
    //    nombreCompleto.push(apellido2);

    //    nombreCompleto = nombreCompleto.map(programador => `nombre: ${nombre}, apellido1: ${apellido1}, apellido2: ${apellido2}`);

    //    let resultado = "";

    //    nombreCompleto.forEach(nombre => {
    //     resultado += nombre.nombre + " - " + nombre.apellido1 + " - " + nombre.apellido2;
    //    });
    //    console.log(resultado);

    let nombreCompleto;
    /* Retorna un string ooncatenando los parámetros con plantilla de cadena de caracteres
    */
       nombreCompleto = {};
       let array = []
       array.push(nombre);
       array.push(apellido1);
       array.push(apellido2);

      console.log(array);


       array.forEach((item, index) => {
        nombreCompleto[item] = array[index];
       });
       console.log(nombreCompleto);
       
       return nombreCompleto;
}

export function ejercicio10 (numDias){
    let milisegundo;
    /* Convierte numDias en milisegundos.Retorna el número total de milisegundo
    */
   // milisegundo = getMilliseconds(numDias);
   milisegundo = numDias * 24 * 60 * 60 * 1000;
   console.log(milisegundo);
   return milisegundo;
}