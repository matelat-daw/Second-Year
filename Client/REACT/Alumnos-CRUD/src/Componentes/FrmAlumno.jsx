import { useState } from "react";
import '../App.css';

export default function FrmAlumno({addAlumno}) {
    const [alumno, setAlumno] = useState({
        id: 1,
        nombre: "",
        grupo: ""
    });

    function changeId() {
        alumno.id = alumno.length;
      }

    function changeName(e) {
        alumno.nombre = e.target.value;
        console.log("Acá Logueo: " + e.target.value);
      }
    
      function changeGroup(e) {
        alumno.grupo = e.target.value;
      }

  return (
    <>
    <form onSubmit={e => (e.preventDefault(), addAlumno(alumno))}>
        <input type="hidden" onChange={changeId} />
      <input type="text" id="addAlumno" autoFocus placeholder="Agrega un Alumno" // onChange={(e) => setAlumno(e.target.value)}
        onChange={changeName}
        required />
      &nbsp;<label htmlFor="addAlumno">Nombre</label>
      <br /><br />
        <select id='group' type='text' // onChange={e => setAlumno(e.target.value)}
        onChange={changeGroup}
        required>
            <option value={""}>Selecciona un Grupo</option>
            <option value={"A"}>Grupo A</option>
            <option value={"B"}>Grupo B</option>
        </select>
        &nbsp;<label htmlFor="group">Grupo</label>
        <br /><br />
      <button
        type="submit"
        aria-label="Agrega el Alumno">
        <h3>Agrega</h3>
      </button>
      <br /><br />
    </form>
    </>
  )
}