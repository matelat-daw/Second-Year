import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Ciclo() {
  const navegar = useNavigate();
  return (
    <>
            <h1>Ciclo: DAW (Desarrollo de Aplicaciones WEB (DUAL))</h1>
            <br/>
            {/* <Link to="/">Volver al Inicio</Link> */}
            <button onClick={(e) => navegar('/') }>Volver al Inicio</button>
            <br /><br />
            <button onClick={(e) => navegar('/Curso') }>Ir a Curso</button>
            <br /><br />
            <button onClick={(e) => navegar('/Centro') }>Ir a Centro</button>
        </>
  )
}
