import { useState } from 'react';
import './App.css'

export default function FrmAlumnos({addAlumno}) {
    const alumno = 
    {
        nombre : "",
        grupo : ""
    }

    let setAlumno;
    [alumno.nombre, setAlumno] = useState(alumno.nombre);

    let setGrupo;
    [alumno.grupo, setGrupo] = useState(alumno.grupo);

    if (localStorage.getItem("ID") == null)
    {
        localStorage.setItem("ID", 1);
    }
    else
    {
        let ID = parseInt(localStorage.getItem("ID"));
        localStorage.setItem("ID", ++ID);
    }

  return (
    <>
        <h3>Alumnos</h3>
        <form id='form' onSubmit={e => (e.preventDefault(), addAlumno(alumno))}>
            <input id='id' type='hidden' name='id' value={localStorage.getItem("ID")} />
            <label htmlFor="name">Nombre</label>
            <input id='name' type='text' name='pupil' onChange={e => setAlumno(e.target.value)}/>
            <br /><br />
            <label htmlFor="group">Grupo</label>
            <select id='group' type='text' name='group' onChange={e => setGrupo(e.target.value)}>
                <option value={""}>Selecciona un Grupo</option>
                <option value={"A"}>Grupo A</option>
                <option value={"B"}>Grupo B</option>
            </select>
            <br /><br />
            <input type='submit' value="Agrega un Alumno al Grupo" />
        </form>
    </>
  )
}