import { useState } from 'react'
import './App.css'

const unaPersona = 
{
  nombre : "Pedro",
  esMayorDeEdad : true,
  ciclo : "Superior",
}

export default function App() {
  let setNombre
  [unaPersona.nombre, setNombre] = useState(unaPersona.nombre);

  let setEsMayorDeEdad
  [unaPersona.esMayorDeEdad, setEsMayorDeEdad] = useState(unaPersona.esMayorDeEdad);

  let setCiclo
  [unaPersona.ciclo, setCiclo] = useState(unaPersona.ciclo);
  console.log(unaPersona.nombre);
  console.log(unaPersona.esMayorDeEdad);
  console.log(unaPersona.ciclo);
  console.log(unaPersona);
  return (
    <form id='form' action='' method='post' >
      <label htmlFor="nombre">Nombre Completo:</label>
      <input id='nombre' type='text' name='nombre' value={unaPersona.nombre} onChange={e => setNombre(e.target.value)}/>
      <br /><br />
      <label htmlFor="mayor_edad">Es Mayor de Edad:</label>
      <input id='mayor_edad' type='checkbox' name='mayor-edad' checked={unaPersona.esMayorDeEdad} onChange={e => setEsMayorDeEdad(e.target.checked)}/>
      <br /><br />
      <label htmlFor="cicloSuperior">Superior</label>
      <input id='cicloSuperior' type='radio' name='ciclo' value="Superior" checked={unaPersona.ciclo == "Superior"} onChange={e => setCiclo(e.target.value) }/>
      <label htmlFor="cicloMedio">Medio</label>
      <input id='cicloMedio' type='radio' name='ciclo' value="Medio" checked={unaPersona.ciclo == "Medio"} onChange={e => setCiclo(e.target.value)}/>
      <br /><br />
      <input type='submit' value="Enviar"/>
    </form>
  )
}