import { useState } from 'react'
import './App.css'

export default function FrmPersona({addPersona}) {
    const persona = 
    {
        nombre : "",
        esMayorDeEdad : true,
        ciclo : "Superior",
    }
    let setNombre;
    [persona.nombre, setNombre] = useState(persona.nombre);

    let setEsMayorDeEdad;
    [persona.esMayorDeEdad, setEsMayorDeEdad] = useState(persona.esMayorDeEdad);

    let setCiclo;
    [persona.ciclo, setCiclo] = useState(persona.ciclo);

    return (
        <form id='form' action='' method='post' onSubmit={e => (e.preventDefault(), addPersona(persona), console.log(persona))}>
        <label htmlFor="nombre">Nombre Completo:</label>
        <input id='nombre' type='text' name='nombre' value={persona.nombre} onChange={e => setNombre(e.target.value)}/>
        <br /><br />
        <label htmlFor="mayor_edad">Es Mayor de Edad:</label>
        <input id='mayor_edad' type='checkbox' name='mayor-edad' checked={persona.esMayorDeEdad} onChange={e => setEsMayorDeEdad(e.target.checked)}/>
        <br /><br />
        <label htmlFor="cicloSuperior">Superior</label>
        <input id='cicloSuperior' type='radio' name='ciclo' value="Superior" checked={persona.ciclo == "Superior"} onChange={e => setCiclo(e.target.value) }/>
        <label htmlFor="cicloMedio">Medio</label>
        <input id='cicloMedio' type='radio' name='ciclo' value="Medio" checked={persona.ciclo == "Medio"} onChange={e => setCiclo(e.target.value)}/>
        <br /><br />
        <input type='submit' value="Añadir Persona"/>
        </form>
    )
}