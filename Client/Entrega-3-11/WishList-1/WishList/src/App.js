import React, { useState } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import ShowData from "./Components/ShowData";
export default function App() {
  const [wish, setwish] = useState([]);
  function add({ addWish }) {
    if(addWish.trim() === ""){
      toast (2, "¿Ningún Deseo?", "Tienes que Escribir un Deseo Para Agregarlo a la Lista.");
      return;
    }
    setwish([...wish, addWish]);
  }
  function clearAll(clear) {
    if (clear) {
      setwish([]);
    }
  }
  function DeleteItem(index) {
    let temp = [...wish];
    temp.splice(index, 1);
    setwish(temp);
  }
  return (
    <>
      <div id="parent">
        <h1 id="h1">Wish List(Lista de Deseos Pendientes)</h1>
        <UserInput addtothelist={add} clearAll={clearAll} />
        <ShowData sendData={wish} DeleteItem={DeleteItem} />
      </div>
    </>
  );
}

function toast(warn, ttl, msg) // Función para mostrar el Dialogo con los mensajes de alerta, recibe, Código, Título y Mensaje.
{
    var alerta = document.getElementById("alerta"); // La ID del botón del dialogo.
    var title = document.getElementById("title"); // Asigno a la variable title el h4 con id title.
    var message = document.getElementById("message"); // Asigno a la variable message el h5 con id message;
    if (warn == 1) // Si el código es 1, es una alerta.
    {
        title.style.backgroundColor = "#000000"; // Pongo los atributos, color de fondo negro.
        title.style.color = "yellow"; // Y color del texto amarillo.
    }
    else if (warn == 0) // Si no, si el código es 0 es un mensaje satisfactorio.
    {
        title.style.backgroundColor = "#FFFFFF"; // Pongo los atributos, color de fondo blanco.
        title.style.color = "blue"; // Y el color del texto azul.
    }
    else // Si no, viene un 2, es una alerta de error.
    {
        title.style.backgroundColor = "#000000"; // Pongo los atributos, color de fondo negro.
        title.style.color = "red"; // Y color del texto rojo.
    }
    title.innerHTML = ttl; // Muestro el Título del dialogo.
    message.innerHTML = msg; // Muestro los mensajes en el diálogo.
    alerta.click(); // Lo hago aparecer pulsando el botón con ID alerta.
}