import React from 'react'
import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <>
        <h1>Te Damos la Bienvenida a la Base de Datos del CIFP César Manrique</h1>
        <ul>
            <li><Link to="/Centro">Centro</Link></li>
            <li><Link to="/Curso">Curso</Link></li>
            <li><Link to="/Ciclo">Ciclo</Link></li>
        </ul>
    </>
  )
}
