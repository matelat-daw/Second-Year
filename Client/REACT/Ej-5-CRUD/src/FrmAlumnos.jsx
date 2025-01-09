import { useState } from 'react';
import './App.css';
import {grupos} from './Grupo';

export default function FrmAlumnos({addAlumno}) {
    const { open } = {addAlumno};

    const alumno = 
    {
        id : 1,
        nombre : "",
        grupo : ""
    }

    let setId;
    [alumno.id, setId] = useState(alumno.id);

    let setAlumno;
    [alumno.nombre, setAlumno] = useState(alumno.nombre);

    let setGrupo;
    [alumno.grupo, setGrupo] = useState(alumno.grupo);

  return (
    <>
        <h3>Alumnos</h3>
        <form onSubmit={e => (e.preventDefault(), addAlumno(alumno))}>
            <input id='id' type='number' name='id' onChange={e => setId(e.target.value)} />
            <label htmlFor="id">ID</label>
            <br /><br />
            <input id='name' type='text' name='nombre' onChange={e => setAlumno(e.target.value)}/>
            <label htmlFor="name">Nombre</label>
            <br /><br />
            <select id='group' type='text' name='grupo' onChange={e => setGrupo(e.target.value)}>
                <option value={""}>Selecciona un Grupo</option>
                {grupos.map((grupo, i) => (
                      <option value={grupo} key={i}>{grupo}</option>
                    ))}
            </select>
            <label htmlFor="group">Grupo</label>
            <br /><br />
            <input type='submit' value="Agrega un Alumno al Grupo" />
        </form>
    </>
  )
}