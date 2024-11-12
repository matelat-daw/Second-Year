import { useState } from "react"

export default function Programadores({programmers}) {
  const [programadores, addExperience] = useState(programmers);
    return (
      <>
      <ul>
        {programadores.map(({nombre: name, experiencia}, indice) => (
        <li key={indice}>
            {name} Con {experiencia} Años de Experiencia {(experiencia > 4) && <strong>(Senior)</strong>}
        </li>))}
      </ul>
      <button onClick={() => (addExperience(programadores.map(programador => ({...programador, experiencia: ++programador.experiencia}))))}>Añadir Experirencia</button>
      </>
    )
  }