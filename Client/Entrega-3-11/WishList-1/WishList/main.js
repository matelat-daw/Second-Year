import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
<div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Lista de Deseos</h1>
    <br>
    <label><input id="wish" type="text"> Esribe un Deseo</label>
    <br><br>
    <button id="add" class="btn btn-primary">Agrega a la Lista</button>
    <button id="delete" class="btn btn-danger">Limpia Toda la Lista</button>
    <br><br>
    <h3 id="result"></h3>
</div>`

const DOM = {
    wish: document.getElementById("wish"),
    result: document.getElementById("result"),
    add: document.getElementById("add"),
    deletes: document.getElementById("delete"),
};

let index = 0;
let array = [];
let already = false;

function add(button)
{
    if (already)
    {
        if (DOM.wish.value != "")
        {
            array[index] = DOM.wish.value;
            DOM.result.innerHTML = array.join("<br>");
            index++;
        }
        else
        {
            alert("Tienes que Escribir un Deseo para Almacenarlo en la Lista.");
        }
    }
    else
    {
        already = true;
    }
    button.addEventListener('click', function(){ add() });
}

function deletit(button)
{
    index = 0;
    array = [];
    DOM.result.innerHTML = array;
    button.addEventListener('click', function() { deletit() });
}

deletit(DOM.deletes);
add(DOM.add);