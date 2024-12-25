import { useState } from 'react';
// import {useNavigate} from 'react-router-dom'

export default function Alumnos({addAlumno}) {
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
        <form onSubmit={e => (e.preventDefault(), addAlumno(alumno))}>
            <label htmlFor="id">ID del Alumno</label>
            <input id='id' type='hidden' name='id' value={localStorage.getItem("ID")} />
            <label htmlFor="name">Nombre</label>
            <input id='name' type='text' name='pupil' onChange={e => setAlumno(e.target.value)}/>
            <br /><br />
            <label htmlFor="group">Nombre</label>
            <select id='group' type='text' name='group' onChange={e => setGrupo(e.target.value)}>
                <option value={""}>Selecciona un Grupo</option>
                <option value={"A"}>Grupo A</option>
                <option value={"B"}>Grupo B</option>
            </select>
            <input type='submit' value="Agrega un Alumno al Grupo" />
        </form>
    </>
  )
}
