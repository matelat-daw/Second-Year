const Content = ({ Alumnos, handleCheck, handleDelete }) => {
    return (
      <main className="content">
        {Alumnos.length ? (
          <ul>
            {Alumnos.map((alumno) => {
              return (
                <li className="list" key={alumno.id}>
                  <label onDoubleClick={() => handleCheck(alumno.id)}>
                    <span className="h3">{alumno.alumnoNombre}</span>
                  </label>
                  <button className="small" onClick={() => handleDelete(alumno.id)}>Elimina</button>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3
            style={{
              marginTop: "2rem",
            }}
          >
            {" "}
            La Lista Está Vacía{" "}
          </h3>
        )}
      </main>
    );
  };
  
  export default Content;