import './App.css'
import Programadores from './Programadores.jsx'

let programadores=[
  {nombre: 'Antonio', apellido1: 'García', apellido2: 'González', edad: 25, experiencia: 1,
lenguajes: ['C++','JS', 'PHP']},
  {nombre: 'Ana', apellido1: 'Pérez', apellido2: 'Días', edad: 30, experiencia: 2, lenguajes:
['C','JS', 'Java']},
  {nombre: 'Pedro', apellido1: 'Abad', apellido2: 'García', edad: 24, experiencia: 3, lenguajes:
['Python','JS', 'Java','C++']}
];

function App()
{
  return (
    <Programadores programmers={programadores}/>
  )
}

export default App