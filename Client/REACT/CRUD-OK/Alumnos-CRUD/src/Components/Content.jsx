const Content = ({ alumnos, BorraAlumno }) => {
    return (
      <main className="content">
        {alumnos.length ? (
          <table>
            <thead><tr><th>ID</th><th>Nombre</th><th>Curso</th><th>Elimina</th></tr></thead><tbody>
            {alumnos.map((alumno, i) => {
              return (
                <tr key={i}>
                <td>{alumno.id}</td>
                <td>
                  <label>
                    <span className="h3">{alumno.nombre}</span>
                  </label>
                </td>
                <td>{alumno.grupo}</td>
                <td><button className="small" onClick={() => BorraAlumno(alumno.id)}>Elimina</button></td>
                </tr>
              );
            })}
            </tbody>
          </table>
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