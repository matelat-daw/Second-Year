import React from 'react'
import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <>
      <h1>Te Damos la Bienvenida al CRUD del CIFP César Manrique</h1>
        <ul>
            <li><Link to="/Centro">Centro</Link></li>
        </ul>
    </>
  )
}