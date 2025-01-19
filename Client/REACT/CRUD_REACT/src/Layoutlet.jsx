import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const alumnos = [
  {id: 1, grupo:"A", nombre: "Juan"},
  {id: 2, grupo:"A", nombre: "Eva"},
  {id: 3, grupo:"B", nombre: "Ana"},
  {id: 4, grupo:"B", nombre: "Julia"},
  {id: 5, grupo:"B", nombre: "Antonio"},
];    

const grupos = ["A","B"];

function Layoutlet() {

  return (
    <main>
        <nav>
            <Link to="/">Inicio | </Link>
            <Link to="/centro">Centro | </Link>
            <Link to="/curso">Curso | </Link>
            <Link to="/daw2">2º DAW  | </Link>
            <Link to="/alumnos">Alumnos</Link>
        </nav>
        <div>
            <Outlet />
        </div>
    </main>
  )
}

export default Layoutlet