const DOM = {
    keyValue: document.getElementById("keyValue"),
    keyValue1: document.getElementById("keyValue+1"),
    value: document.getElementById("value"),
    value3: document.getElementById("value3"),
    value4: document.getElementById("value4"),
    value5: document.getElementById("value5"),
    value6: document.getElementById("value6")
};

function f1()
{
    let fullname = "";
    let temperatures = [{isla:'TF', temperatura: 24}, {isla:'GC', temperatura:19}, {isla:'FU', temperatura:29}, {isla:'LP', temperatura:15}, {isla:'GO', temperatura:14}, {isla:'LA', temperatura:30}];

    temperatures.map(function (item) {
        if (item.temperatura > 18)
        {
            fullname += item.isla + " - " + item.temperatura + "<br>";
        }
    })
    DOM.keyValue.innerHTML = fullname;
}

function f11() // Igual a f3, Hecho de Distinta Manera.
{
    let fullname = "";
    let temperatures = [{'TF':24}, {'GC':19}, {'FU':29}, {'LP':15}, {'GO':14}, {'LA':30}];

    fullname = temperatures.filter(isla => Object.values(isla)[0] > 18);
    fullname = JSON.stringify(fullname);
    DOM.value.innerHTML = fullname;
}

// function f2() // Forma Fácil con el Array clave valor.
// {
//     let fullname = "";
//     let temperatures = [{isla:'TF', temperatura: 24}, {isla:'GC', temperatura:19}, {isla:'FU', temperatura:29}, {isla:'LP', temperatura:15}, {isla:'GO', temperatura:14}, {isla:'LA', temperatura:30}];

//     temperatures.map(function (item) {
//         if (item.temperatura > 20)
//         {
//             item.temperatura++;
//             fullname += item.isla + " - " + item.temperatura + "<br>";
//         }
//     })
//     DOM.keyValue1.innerHTML = fullname;
// }

function f2()
{
    let result;
    let temperatures = [{'TF':24}, {'GC':19}, {'FU':29}, {'LP':15}, {'GO':14}, {'LA':30}];

    result = temperatures.map(function(val){if (Object.values(val)[0] > 20) {return Object.keys(val) + " - " + ++Object.values(val)[0]}else{return ""}});
    result = JSON.stringify(result);
    DOM.keyValue1.innerHTML = result;
}

// function f3() // Forma Fácil con el Array clave valor.
// {
//     let fullname = "";
//     let temperatures = [{isla:'TF', temperatura: 24}, {isla:'GC', temperatura:19}, {isla:'FU', temperatura:29}, {isla:'LP', temperatura:15}, {isla:'GO', temperatura:14}, {isla:'LA', temperatura:30}];

//     temperatures.map(function (item) {
//         item.temperatura++;
//         fullname += item.isla + " - " + item.temperatura + "<br>";
//     })
//     DOM.value3.innerHTML = fullname;
// }

function f3()
{
    let result = "";
    let temperatures = [{'TF':24}, {'GC':19}, {'FU':29}, {'LP':15}, {'GO':14}, {'LA':30}];

    // temperatures = temperatures.map(function(val){return Object.keys(val) + " - " + ++Object.values(val)[0]});
    // result = JSON.stringify(temperatures);
    // DOM.value3.innerHTML = result;

    result += temperatures.map(function(isla) { return Object.values(isla)[0] > 18 ? Object.keys(isla)[0] + " - " + Object.values(isla)[0] : 0});

    DOM.value3.innerHTML = result;
}

// function f4()
// {
//     let fullname = "";
//     let temperatures = [{isla:'TF', temperatura: 24}, {isla:'GC', temperatura:19}, {isla:'FU', temperatura:29}, {isla:'LP', temperatura:15}, {isla:'GO', temperatura:14}, {isla:'LA', temperatura:30}];
//     let temp = 0;

//     temperatures.map(function (item) {
//         temp += item.temperatura;
//     })
//     let result = temp / temperatures.length;
//     DOM.value4.innerHTML = result;
// }

function f4()
{
    let result = 0;
    let temperatures = [{'TF':24}, {'GC':19}, {'FU':29}, {'LP':15}, {'GO':14}, {'LA':30}];

    temperatures.map(function (item) {
                result += Object.values(item)[0];
            })
    result = result / temperatures.length;
    DOM.value4.innerHTML = result;
}

function f5(note)
{
    let monedaSimple = ["dolar", "yen", "libra", "corona", "euro", "rupia"];
    let monedas = [{pais: "USA", moneda: "dolar"}, {pais: "Japón", moneda: "yen"}, {pais: "Reino Únido", moneda: "libra"}, {pais: "Paises Bajos", moneda: "corona"}, {pais: "Europa", moneda: "euro"}, {pais: "India", moneda: "rupia"}];

    let result = monedas.some(moneda => moneda.moneda == note);

    let result2 = monedaSimple.some(moneda => moneda == note);

    if(result)
    {
        DOM.value5.innerHTML = "Aceptamos " + note + " para Hacer Pagos.";
    }
    else
    {
        DOM.value5.innerHTML = "Lo Siento NO Aceptamos " + note + " para Hacer Pagos.";
    }

    if (result2)
    {
        DOM.value6.innerHTML = "Aceptamos " + note + " para Hacer Pagos.";
    }
    else
    {
        DOM.value6.innerHTML = "Lo Siento NO Aceptamos " + note + " para Hacer Pagos.";
    }
}

function convert(array1)
{
    let result;
    Object.keys(array1).forEach((key, index) => {
        result[`newObj$({index + 1})`] = array1[key].map(item => ({[key]: item}));
    });
    console.log(result);
}