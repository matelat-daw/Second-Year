import { useState } from 'react';
export default function ListaAlumnos({alumnos})
{
    let borraAlumno;
    [alumnos, borraAlumno] = useState(alumnos);
    
    if (alumnos != null){return (
        <table>
            <tr><th>Nombre</th><th>Grupo</th><th>Eliminar</th></tr>
            {alumnos.map((alumno, i) => <tr key={i}>
                <td>{`${alumno.nombre}`}</td>
                <td>{`${alumno.grupo}`}</td>
                <td><button onClick={borraAlumno}>Eliminar</button></td>
            </tr>)}
        </table>
    )}
}