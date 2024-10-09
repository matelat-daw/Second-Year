const DOM = {
    keyValue: document.getElementById("keyValue"),
    keyValue1: document.getElementById("keyValue+1"),
    value: document.getElementById("value")
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

function f11()
{
    let fullname = "";
    let temperatures = [{'TF':24}, {'GC':19}, {'FU':29}, {'LP':15}, {'GO':14}, {'LA':30}];

    array = Object.values(temperatures);

    array.map(function (item) {
        if (item.temperatura > 18)
        {
            fullname += item.isla + " - " + item.temperatura + "<br>";
        }
    })
    DOM.value.innerHTML = fullname;
    
    console.log(array);
}

function f2()
{
    let fullname = "";
    let temperatures = [{isla:'TF', temperatura: 24}, {isla:'GC', temperatura:19}, {isla:'FU', temperatura:29}, {isla:'LP', temperatura:15}, {isla:'GO', temperatura:14}, {isla:'LA', temperatura:30}];

    temperatures.map(function (item) {
        if (item.temperatura > 20)
        {
            item.temperatura++;
            fullname += item.isla + " - " + item.temperatura + "<br>";
        }
    })
    DOM.keyValue1.innerHTML = fullname;
}