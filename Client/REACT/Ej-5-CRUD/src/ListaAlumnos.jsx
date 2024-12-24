import { useState } from "react";

export default function ListAlumnos({alumnos})
{
    let borraPersona;
    [alumnos, borraPersona] = useState(alumnos);
    
    return (
        <table>
            <tr><th>Nombre</th><th>Grupo</th></tr>
            {alumnos.map((alumno, i) => <tr key={i}>
                <td>{`${alumno.nombre}`}<button onClick={borraAlumno}>Eliminar</button></td>
                <td>{`${alumno.grupo}`}</td>
            </tr>)}
        </table>
    )
}