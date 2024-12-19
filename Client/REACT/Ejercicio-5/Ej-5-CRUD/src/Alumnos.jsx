import { useState } from 'react';
// import {useNavigate} from 'react-router-dom'

export default function Alumnos({addAlumno}) {
    // const navegar = useNavigate();
    const [select, setSelected] = useState(select);
    let index = 0;
  return (
    <>
        <h3>Alumnos</h3>
        <form onSubmit={e => (e.preventDefault(), addAlumno(alumno))}>
            <label htmlFor="id">ID del Alumno</label>
            <input id='id' type='hidden' name='id' value={++index} />
            <label htmlFor="name">Nombre</label>
            <input id='name' type='text' name='name' onChange={e => setSelected(e.target.value)}/>
            <br /><br />
            <label htmlFor="group">Nombre</label>
            <select id='group' type='text' name='group' onChange={e => setSelected(e.target.value)}>
                <option value={""}>Selecciona un Grupo</option>
                <option value={"A"}>Grupo A</option>
                <option value={"B"}>Grupo B</option>
            </select>
            <input type='submit' value={"Agrega un Alumno al Grupo"} />
        </form>
    </>
  )
}
