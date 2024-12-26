import { useState } from 'react';
import './App.css'

export default function FrmAlumnos({addAlumno}) {
    const alumno = 
    {
        id : 1,
        nombre : "",
        grupo : ""
    }

    let index = 1;

    // let setId;
    // [alumno.id, setId] = useState(alumno.id);

    let setAlumno;
    [alumno.nombre, setAlumno] = useState(alumno.nombre);

    let setGrupo;
    [alumno.grupo, setGrupo] = useState(alumno.grupo);

    // if (localStorage.getItem("ID") == null)
    // {
    //     localStorage.setItem("ID", 1);
    // }
    // else
    // {
    //     let ID = parseInt(localStorage.getItem("ID"));
    //     localStorage.setItem("ID", ++ID);
    // }

  return (
    <>
        <h3>Alumnos</h3>
        <form onSubmit={e => (e.preventDefault(), addAlumno(alumno))}>
            <input id='id' type='hidden' name='id' value={++index} />
            <label htmlFor="name">Nombre</label>
            <input id='name' type='text' name='nombre' onChange={e => setAlumno(e.target.value)}/>
            <br /><br />
            <label htmlFor="group">Grupo</label>
            <select id='group' type='text' name='grupo' onChange={e => setGrupo(e.target.value)}>
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