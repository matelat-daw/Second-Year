import React from 'react'
import './FrmPersona.css';
import { useNavigate } from 'react-router-dom';

function Add({grupos, addAlumno}) {
  const navegar = useNavigate();
  return (
    <form id="myForm"> 
        <label htmlFor="id">id:</label>
        <input type="text" name="id" pattern="\d+" id="id" required/>
        <label htmlFor="nombre">nombre:</label>
        <input type="text" name="nombre" pattern="[A-Za-z]{4,20}" id="nombre" required/>
        <label htmlFor="grupo">grupo:</label>
        <select name="grupo" id="grupo" required>
            { grupos.map( (grupo,i) => <option key={`${i}+${grupo}`} value={grupo}>{grupo}</option>)}
        </select>
        <button type="submit" onClick={ (e) => {
          let formulario = document.getElementById('myForm');
          e.preventDefault()
          if(formulario.checkValidity()) {
            addAlumno({id:formulario.id.value, grupo:formulario.grupo.value, nombre:formulario.nombre.value}); 
            navegar('/alumnos');
          } else {
            alert(formulario.id.validationMessage || formulario.nombre.validationMessage)
          }
        }}>Añadir</button>
    </form>
  )
}

export default Add