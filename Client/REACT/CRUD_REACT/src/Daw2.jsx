import React from 'react'
import { Link } from 'react-router-dom';
const grupos = ["A", "B", "C", "D"]

function Daw2() {
  return (
    <div>
        <h1>2º DAW</h1>
        <ul>
            {grupos.map((grupo,i) => (
                <li key={`${i}+${grupo}`}><Link to={`/grupo/${grupo}`}>2º DAW Grupo {grupo}</Link></li>
            ))}
        </ul>
    </div>
  )
}

export default Daw2