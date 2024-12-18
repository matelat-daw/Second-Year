import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Curso() {
  const navegar = useNavigate();
  return (
    <>
        <h1>Mi Curso es: 2º DAW A (Dual)</h1>
        <br/>
        {/* <Link to="/">Volver al Inicio</Link> */}
        <button onClick={(e) => navegar('/') }>Volver al Inicio</button>
        <br /><br />
        <button onClick={(e) => navegar('/Centro') }>Ir a Centro</button>
        <br /><br />
      <button onClick={(e) => navegar('/Ciclo') }>Ir a Ciclo</button>
    </>
  )
}
