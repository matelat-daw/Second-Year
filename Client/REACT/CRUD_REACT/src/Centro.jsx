import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Centro() {
  const navegar = useNavigate();
  return (
    <>
     <h1>Centro: CIFP César Manrique</h1>
     {/* <Link to="/">Ir al inicio</Link> */}
     <ul>
        <li>
            {/* <Link to="/centro">Centro</Link> */}
            <button onClick={(e)=> navegar('/')}>Inicio</button>
        </li>
        <li>
            {/* <Link to="/ciclo">Ciclo</Link> */}
            <button onClick={(e)=> navegar('/ciclo')}>Ciclo</button>
        </li>
        <li>
            {/* <Link to="/curso">Curso</Link>   */}
            <button onClick={(e)=> navegar('/curso')}>Curso</button>
        </li>
     </ul>
    </>
  )
}

export default Centro