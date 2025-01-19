import React from 'react';

function ListaPersonas({personas}) {
  return (
    <table>
        <thead>
          <tr>
            <th>Nombre y Apellido</th>
            <th>Tipo de Ciclo</th>
            <th>Edad: 18+</th>
            </tr>
        </thead>
        <tbody>
        {personas.map((persona, i) => 
            <tr key={`${i}+${persona.nombre}`}>
                <td key={persona.nombre}>{persona.nombre}</td>
                <td key={`${i}+${persona.tipoCiclo}`}>{persona.tipoCiclo}</td>
                <td key={`${i}+persona.esMayordeEdad`}>{persona.esMayordeEdad? 'Es mayor de edad': 'No es mayor de edad'}</td>
            </tr>
        )}
        </tbody>
    </table>
  )
}

export default ListaPersonas