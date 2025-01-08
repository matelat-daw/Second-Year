import { useRef } from "react";

    const AddAlumno = ({ setNuevoAlumno, setNuevoGrupo, AgregaAlumno }) => {
    const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={AgregaAlumno}>
      <input
        type="text"
        id="addAlumno"
        autoFocus
        ref={inputRef}
        placeholder="Agrega un Alumno"
        onChange={(e) => setNuevoAlumno(e.target.value)}
        required />
      &nbsp;<label htmlFor="addAlumno">Agrega un Alumno</label>
      <br /><br />
        <select id='group' type='text' onChange={e => setNuevoGrupo(e.target.value)} required>
            <option value={""}>Selecciona un Grupo</option>
            <option value={"A"}>Grupo A</option>
            <option value={"B"}>Grupo B</option>
        </select>
        &nbsp;<label htmlFor="group">Grupo</label>
        <br /><br />

      <button
        type="submit"
        aria-label="Agrega el Alumno"
        onClick={() => inputRef.current.focus()}
      >
        <h3>Agrega</h3>
      </button>
      <br /><br />
    </form>
  );
};

export default AddAlumno;