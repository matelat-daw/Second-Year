import React from "react";
import "./ShowData.css";
export default function ShowData({ sendData, DeleteItem }) {
  let items = sendData.map((item, index) => (
    <div key={index} className="parent">
      <li>{item}</li>
      <div className="delete">
        <button onClick={() => DeleteItem(index)}>Eliminar</button>
      </div>
    </div> 
  ));
  return (
    <div>
      <h1 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>Lista de Deseos : </h1>
      <ul>{items}</ul>
    </div>
  );
}
