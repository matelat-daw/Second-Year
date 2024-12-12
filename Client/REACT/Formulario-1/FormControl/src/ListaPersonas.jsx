export default function ListPersonas({personas})
{
    return (
        // <ul>
        //     {personas.map((persona, i) => <li key={i}>
        //         {`${persona.nombre}`}
        // </li>)}
        // </ul>
        <table>
            <tr><th>Nombre</th><th>Es Mayor de Edad</th><th>Ciclo</th></tr>
            {personas.map((persona, i) => <tr key={i}>
                <td>{`${persona.nombre}`}</td>
                <td>{`${persona.esMayorDeEdad}`}</td>
                <td>{`${persona.ciclo}`}</td>
            </tr>)}
        </table>
    )
}