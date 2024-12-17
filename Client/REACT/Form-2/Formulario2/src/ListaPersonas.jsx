import { useState } from "react";

export default function ListPersonas({personas})
{
    let borraPersona;
    [personas, borraPersona] = useState(personas);
    
    return (
        <table>
            <tr><th>Nombre</th><th>Es Mayor de Edad</th><th>Ciclo</th></tr>
            {personas.map((persona, i) => <tr key={i}>
                <td>{`${persona.nombre}`}<button onClick={borraPersona}>Eliminar</button></td>
                <td>{`${persona.esMayorDeEdad}`}</td>
                <td>{`${persona.ciclo}`}</td>
            </tr>)}
        </table>
    )
}