function pruebaFor()
{
    document.write("<h1 style='font-size: 48px; color: blue;'>Función pruebaFor</h1>");
    const MAX_NIVEL=6;
    for (let i = 1; i <= MAX_NIVEL; i++)
    { 
        document.write("<H" + i + ">Encabezado de nivel " + i + "</H" + i + ">") 
    }
}

function pruebaWhile()
{
    document.write("<h1 style='font-size: 48px; color: blue;'>Función pruebaWhile</h1>");
    const MAX_NIVEL=6;
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
    const MAX_NIVEL=6;
    let i = 1;
    do {
        document.write("<H" + i + ">Encabezado de nivel " + i + "</H" + i + ">") 
        i++
    } while (i <= MAX_NIVEL);
}

function pruebaContinue()
{
    document.write("<h1 style='font-size: 48px; color: blue;'>Función pruebaContinue<span style='color: red;'> excepto el Nivel 4.</span></h1>");
    const MAX_NIVEL=6;
    for (let i=1;i<=MAX_NIVEL;i++) {
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
    const MAX_NIVEL=6;
    for (let i=1;i<=MAX_NIVEL;i++) {
        if (i > 4)
        {
            break;
        }
        document.write("<H" + i + ">Encabezado de nivel " + i + "</H" + i + ">") 
    }
}

function pruebaBucles(...pruebas)
{
    for (let i = 0; i < pruebas.length; i++)
    {
        pruebas[i]();
    }
}