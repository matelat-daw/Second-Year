import "./App.css";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Top from "./Components/Top";
import AddAlumno from "./Components/AddAlumno";
import { useState } from "react";

export default function App() {
  const [alumnos, setAlumnos] = useState([]);

  const [nombre, setNuevoAlumno] = useState("");

  const [grupo, setNuevoGrupo] = useState("");

  const addAlumno = async (nombre) => {
    const id = alumnos.length ? alumnos[alumnos.length - 1].id + 1 : 1;

    const alumno = {
      id,
      nombre,
      grupo
    };

    const AlumnoNuevo = [...alumnos, alumno];

    setAlumnos(AlumnoNuevo);
  };

  const BorraAlumno = async (id) => {
    const EliminaAlumno = alumnos.filter((alumno) => alumno.id !== id);

    setAlumnos(EliminaAlumno);
  };

  const AgregaAlumno = (e) => {
    e.preventDefault();

    addAlumno(nombre);

    document.getElementById("group").value = "";
    document.getElementById("addAlumno").value = "";
  };

  return (
    <div className="App">
      <Top />

      <AddAlumno
        setNuevoAlumno={setNuevoAlumno}
        setNuevoGrupo={setNuevoGrupo}
        AgregaAlumno={AgregaAlumno}
      />

      <Content
        alumnos={alumnos}
        BorraAlumno={BorraAlumno}
      />

      <Footer alumnos={alumnos} />
    </div>
  );
}