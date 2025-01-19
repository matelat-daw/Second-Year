import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function Edit({grupos, alumnos, editAlumno}) {
  const { id } = useParams();
    const navegar = useNavigate();
  const alumno = alumnos.find( alumn => alumn.id == id);
  return (
   <>
        <div>Edit Alumno:{id}</div>
          <form id="myForm"> 
            <label htmlFor="id">id:</label>
            <input type="text" name="id" pattern="\d+" id="id" defaultValue={alumno.id} disabled/>
            <label htmlFor="nombre">nombre:</label>
            <input type="text" name="nombre" pattern="[A-Za-z\s]{4,20}" id="nombre" defaultValue={alumno.nombre} required/>
            <label htmlFor="grupo">grupo:</label>
            <select name="grupo" id="grupo" required>
                { grupos.map( (grupo,i) => grupo==alumno.grupo?<option key={`${i}+${grupo}`} defaultValue={grupo}>{grupo}</option>
                                                                :<option key={`${i}+${grupo}`} value={grupo}>{grupo}</option>)}
            </select>
            <button type="submit" onClick={ (e) => {
              let formulario = document.getElementById('myForm');
              e.preventDefault()
              if(formulario.checkValidity()){
                editAlumno({id:parseInt(id), grupo:formulario.grupo.value, nombre:formulario.nombre.value});
                navegar('/alumnos');
              } else {
                alert(formulario.id.validationMessage || formulario.nombre.validationMessage)
              }
            }}>Actualizar</button>
      </form>
   </> 

  )
}

export default Edit