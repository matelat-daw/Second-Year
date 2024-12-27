import "./App.css";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Top from "./Components/Top";
import AddAlumno from "./Components/AddAlumno";
// import request from "./Components/Request";
import { useState, useEffect } from "react";

function App() {
  const API_url = "http://localhost:3500/items";

  const [Alumnos, setAlumnos] = useState([]);

  const [alumno, setNuevoAlumno] = useState("");

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_url);

        if (!response.ok) throw Error("Error Message");

        const AlumnosItem = await response.json();

        setAlumnos(AlumnosItem);

        setError(null);
      } catch (error) {}
    };

    fetchData();
  }, []);

  // Add new Item to the Alumnos

  const addAlumno = async (alumnoNombre) => {
    const id = Alumnos.length ? Alumnos[Alumnos.length - 1].id + 1 : 1;

    const alumno = {
      id,
      alumnoNombre
    };

    const AlumnoNuevo = [...Alumnos, alumno];

    setAlumnos(AlumnoNuevo);

    // const postOptions = {
    //   method: "POST",

    // //   headers: {
    // //     "content-Type": "application/json",
    // //   },

    //   body: JSON.stringify(alumno),
    // };

    // const result = await request(API_url, postOptions);
    // if (result) setError(result);
  };

  //  Create a function to update the checked property

  const handleCheck = async (id) => {
    const AlumnoNuevo = Alumnos.map((alumno) =>
      alumno.id === id
        ? {
            ...alumno,
          }
        : alumno
    );

    setAlumnos(AlumnoNuevo);

    // const myitem = AlumnoNuevo.filter((alumno) => alumno.id === id);

    // const updateOptions = {
    //   method: "PATCH",

    //   headers: {
    //     "content-Type": "application/json",
    //   },
    // };

    // const reqUrl = `${API_url}/${id}`;

    // const result = await request(reqUrl, updateOptions);

    // if (result) setError(result);
  };

  const handleDelete = async (id) => {
    const AlumnoNuevo = Alumnos.filter((alumno) => alumno.id !== id);

    setAlumnos(AlumnoNuevo);

    // const deleteOptions = {
    //   method: "DELETE",
    // };

    // const reqUrl = `${API_url}/${id}`;

    // const result = await request(reqUrl, deleteOptions);

    // if (result) setError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addAlumno(alumno);

    setNuevoAlumno("");
  };

  return (
    <div className="App">
      <Top />

      <AddAlumno
        alumno={alumno}
        setNuevoAlumno={setNuevoAlumno}
        handleSubmit={handleSubmit}
      />

      <Content
        Alumnos={Alumnos}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <Footer Alumnos={Alumnos} />
    </div>
  );
}

export default App;