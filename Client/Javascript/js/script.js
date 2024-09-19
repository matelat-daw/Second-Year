const MAX_NIVEL = 6;

function pruebaFor()
{
    document.write("<h1 style='font-size: 48px; color: blue;'>Función pruebaFor</h1>");
    for (let i = 1; i <= MAX_NIVEL; i++)
    { 
        document.write("<H" + i + ">Encabezado de nivel " + i + "</H" + i + ">") 
    }
}

function pruebaWhile()
{
    document.write("<h1 style='font-size: 48px; color: blue;'>Función pruebaWhile</h1>");
    let i = 1;
    while (i <= MAX_NIVEL)
    {
        document.write("<H" + i + ">Encabezado de nivel " + i + "</H" + i + ">") 
        i++
    }
}

function pruebaDoWhile()
{
    document.write("<h1 style='font-size: 48px; color: blue;'>Función pruebaDoWhile</h1>");
    let i = 1;
    do {
        document.write("<H" + i + ">Encabezado de nivel " + i + "</H" + i + ">") 
        i++
    } while (i <= MAX_NIVEL);
}

function pruebaContinue()
{
    document.write("<h1 style='font-size: 48px; color: blue;'>Función pruebaContinue<span style='color: red;'> excepto el Nivel 4.</span></h1>");
    for (let i = 1; i <= MAX_NIVEL; i++)
    {
        if (i == 4)
        {
            continue;
        }
        else
        {
            document.write("<H" + i + ">Encabezado de nivel " + i + "</H" + i + ">") 
        }
    }
}

function pruebaBreak()
{
    document.write("<h1 style='font-size: 48px; color: blue;'>Función pruebaBreak<span style='color: red;'> Hasta el Nivel 4.</span></h1>");
    for (let i = 1; i <= MAX_NIVEL; i++)
    {
        if (i > 4)
        {
            break;
        }
        document.write("<H" + i + ">Encabezado de nivel " + i + "</H" + i + ">") 
    }
}

function pruebaBucles(...pruebas) // Parametros rest, espera entre 1 y n parametros y los trata como un array de datos.
{
    for (let i = 0; i < pruebas.length; i++)
    {
        pruebas[i]();
    }
}

function operacionesAritmeticas(operador, ...number)
{
    operacion = number[0];
    switch (operador)
    {
        case "+":
            for (let i = 1; i < number.length; i++)
            {
                operacion += number[i];
            }
            break;
        case "-":
            for (let i = 1; i < number.length; i++)
            {
                operacion -= number[i];
            }
            break;
        case "*":
            for (let i = 1; i < number.length; i++)
            {
                operacion *= number[i];
            }
            break;
        case "/":
            for (let i = 1; i < number.length; i++)
            {
                operacion /= number[i];
            }
            break;
    }
    return operacion;
}