import { useState } from 'react'
import './App.css'

const DOM = 
{
  nombre: document.getElementById("nombre"),
  mayor_edad: document.getElementById("mayor_edad"),
  ciclo: document.getElementById("ciclo")
}

const unaPersona = 
{
  nombre : "Pedro",
  esMayorDeEdad : true,
  ciclo : "Superior",
}

export default function App() {
  const [nombre, setNombre] = useState(unaPersona.nombre);
  const [esMayorDeEdad, setEsMayorDeEdad] = useState(unaPersona.esMayorDeEdad);
  const [ciclo, setCiclo] = useState(unaPersona.ciclo);
  const [unaPersona, setForm] = useState(unaPersona);
  console.log(nombre);
  console.log(esMayorDeEdad);
  console.log(ciclo);
  console.log(unaPersona);
  return (
    <form id='form' action='' method='post' onSubmit={setForm(DOM.nombre.value = nombre, DOM.mayor_edad.checked = esMayorDeEdad, DOM.ciclo.value = ciclo)} >
      <label htmlFor="nombre">Nombre Completo:</label>
      <input id='nombre' type='text' name='nombre' value={nombre} onChange={e => setNombre(e.target.value)}/>
      <br /><br />
      <label htmlFor="mayor_edad">Es Mayor de Edad:</label>
      <input id='mayor_edad' type='checkbox' name='mayor-edad' checked={esMayorDeEdad} onChange={e => setEsMayorDeEdad(e.target.checked)}/>
      <br /><br />
      <label htmlFor="cicloSuperior">Superior</label>
      <input id='cicloSuperior' type='radio' name='ciclo' value="Superior" checked={ciclo == "Superior"} onChange={e => setCiclo(e.target.value) }/>
      <label htmlFor="cicloMedio">Medio</label>
      <input id='cicloMedio' type='radio' name='ciclo' value="Medio" checked={ciclo == "Medio"} onChange={e => setCiclo(e.target.value)}/>
      <br /><br />
      <input type='submit' value="Enviar"/>
    </form>
  )
}
