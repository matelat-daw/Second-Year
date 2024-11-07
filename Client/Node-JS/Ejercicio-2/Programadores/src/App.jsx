import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let programadores=[
  {nombre: 'Antonio', apellido1: 'García', apellido2: 'González', edad: 25, experiencia: 4,
lenguajes: ['C++','JS', 'PHP']},
  {nombre: 'Ana', apellido1: 'Pérez', apellido2: 'Días', edad: 30, experiencia: 5, lenguajes:
['C','JS', 'Java']},
  {nombre: 'Pedro', apellido1: 'Abad', apellido2: 'García', edad: 24, experiencia: 15, lenguajes:
['Python','JS', 'Java','C++']}
];

function App() {
  

  return (
    <>
    <ul>
      {programadores.map(({nombre: name, experiencia}, indice) => (
      <li key={indice}>
          {name}{(experiencia > 4) && <strong>(Senior)</strong>}
      </li>))}
    </ul>
    <ul>
    {programadores.map(({nombre: name, experiencia}, indice) => (
      <li key={indice}>
          {name} {(experiencia <= 4) ? <strong>(Junior)</strong> : null}
      </li>))}
    </ul>
    <ul>
      {programadores.map(({nombre: name, experiencia}, indice) => (
      <li key={indice}>
          {name}{(experiencia > 4) || <strong>(Junior)</strong>}
      </li>))}
    </ul>
    </>
  )
}

export default App
