import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Delete({alumnos, deleteAlumno}) {
  const { id } = useParams();
  const alumno = alumnos.find( alumn => alumn.id == id);
  const navegar = useNavigate();
  return (
    <div>
      <h1>Borrar Alumno con ID:{id}</h1>
      <p>¿Estás seguro de que quieres borrar al alumno {alumno.nombre} del Grupo {alumno.grupo}?</p>
      <button type="button" onClick={(e) => navegar('/alumnos')}>Cancelar</button>
      <button type="button" onClick={(e) => {
        e.preventDefault()
        deleteAlumno(id);
        navegar('/alumnos');
      }}>Borrar</button>
    </div>
  )
}

export default Delete