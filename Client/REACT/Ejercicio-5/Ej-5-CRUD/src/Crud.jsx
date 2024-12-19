import React from 'react'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Te Damos la Bienvenida al CRUD del CIFP César Manrique</h1>
        <ul>
            <li><Link to="/Centro">Centro</Link></li>
            <li><Link to="/Curso">Alumnos</Link></li>
        </ul>
    </>
  )
}

export default App
