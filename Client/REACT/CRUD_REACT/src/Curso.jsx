import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Curso() {
  const navegar = useNavigate();
  return (
    <>
     <h1>Curso: 2º de DAW A 24/25</h1>
     {/* <Link to="/">Ir al inicio</Link> */}
     <button onClick={(e) => navegar('/add')}>Añadir registro</button>
    </>
  )
}

export default Curso;