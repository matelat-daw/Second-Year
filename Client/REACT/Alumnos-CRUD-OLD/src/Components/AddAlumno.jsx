import { useRef } from "react";

const AddAlumno = ({ alumno, setNuevoAlumno, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addAlumno">Agrega un Alumno</label>

      <input
        type="text"
        id="addAlumno"
        autoFocus
        ref={inputRef}
        placeholder="Agrega un Alumno"
        required
        value={alumno}
        onChange={(e) => setNuevoAlumno(e.target.value)}
      />

      <button
        type="submit"
        aria-label="Agrega el Alumno"
        onClick={() => inputRef.current.focus()}
      >
        <h3>Agrega</h3>
      </button>
    </form>
  );
};

export default AddAlumno;