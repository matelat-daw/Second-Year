import React, { useState } from "react";
import "./UserInput.css";
export default function UserInput({ addtothelist, clearAll }) {
  const [item, setItem] = useState({ addWish: "" });
  function whenSubmmit(e) {
    e.preventDefault();
    addtothelist(item);
    setItem({ addWish: "" });
  }
  function handleChange(e) {
    e.preventDefault();
    setItem({ addWish: e.target.value });
  }
  function setClearAll(e) {
    clearAll(true);
    e.preventDefault();
  }
  return (
    <div className="parent">
      <form>
        <label htmlFor="inputwish" className="label">
          Escribe tu Deseo :{" "}
        </label>
        <input
          type="text"
          id="inputwish"
          value={item.addWish}
          onChange={handleChange}
        />
        <br />
        <button onClick={whenSubmmit} id="add">
          Agregar
        </button>
        <button onClick={setClearAll} id="clear">
          Borrar Lista
        </button>
      </form>
    </div>
  );
}
