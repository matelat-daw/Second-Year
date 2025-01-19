import React from 'react';
import { useParams } from 'react-router-dom';

const alumnos = [
    {id: 1, grupo:"A", nombre: "Juan"},
    {id: 2, grupo:"A", nombre: "Eva"},
    {id: 3, grupo:"B", nombre: "Ana"},
    {id: 4, grupo:"B", nombre: "Julia"},
    {id: 5, grupo:"B", nombre: "Antonio"},
];    


function Grupo() {

  const { letra } = useParams();
  return (
    <div>
        <h2>Alumnos del grupo {letra}</h2>
        <ul>
            {alumnos.filter(alumno => alumno.grupo === letra)
                .map((alumno,i) => <li key={i}>{alumno.nombre}</li>
                )
            }
        </ul>
    </div>
  )
}

export default Grupo