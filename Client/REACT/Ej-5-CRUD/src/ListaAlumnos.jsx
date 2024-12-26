import { useState } from 'react';
export default function ListaAlumnos({alumnos})
{
    let borrarAlumno;
    [alumnos, borrarAlumno] = useState(alumnos);

    let modificarAlumno;
    [alumnos, modificarAlumno] = useState(alumnos);
    
    return (
        <table>
            <thead>
                <tr><th>ID</th><th>Nombre</th><th>Grupo</th><th>Modificar</th><th>Eliminar</th></tr>
            </thead>
            <tbody>
                {alumnos.map((alumno, i) => <tr key={i}>
                    <td>{`${alumno.id}`}</td>
                    <td>{`${alumno.nombre}`}</td>
                    <td>{`${alumno.grupo}`}</td>
                    <td><button onClick={modificarAlumno}>Modificar</button></td>
                    <td><button onClick={borrarAlumno}>Eliminar</button></td>
                </tr>)}
            </tbody>
        </table>
    )
}