import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Inicio() {
  const navegar = useNavigate();
  return (
    <>
     <h1>Inicio: SPA</h1>
     <ul>
        <li>
            {/* <Link to="/centro">Centro</Link> */}
            <button onClick={(e)=> navegar('/centro')}>Centro</button>
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

export default Inicio