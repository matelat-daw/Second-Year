import { useState } from "react"

export default function ListPersonas({personas})
{
    const alumno = 
    {
        nombre : "",
        esMayorDeEdad : true,
        ciclo : "Superior",
    }

    // let modificaAlumno;
    // [alumno.nombre, modificaAlumno] = useState(alumno.nombre);

    let eliminaAlumno;
    [alumno.nombre, eliminaAlumno] = useState(alumno.nombre);

    return (
        // <ul>
        //     {personas.map((persona, i) => <li key={i}>
        //         {`${persona.nombre}`}
        // </li>)}
        // </ul>
        <table>
            <thead>
                <tr><th>ID</th><th>Nombre</th><th>Es Mayor de Edad</th><th>Ciclo</th><th>Acciones</th></tr>
            </thead>
            <tbody>
            {personas.map((persona, i) => <tr key={i}>
                <td>{`${i + 1}`}</td>
                <td>{`${persona.nombre}`}</td>
                <td>{`${persona.esMayorDeEdad}`}</td>
                <td>{`${persona.ciclo}`}</td>
                <td><input type="button" value="Actualizar" /><input type="button" value="Eliminar" /></td>
            </tr>)}
            </tbody>
        </table>
    )
}