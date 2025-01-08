import {useNavigate} from 'react-router-dom'

export default function Crud() {
    const navegar = useNavigate();
  return (
    <>
      <h1>Te Damos la Bienvenida al CRUD del CIFP César Manrique</h1>
      <br />
      <button onClick={(e) => navegar("/") }>Volver al Inicio</button>
      <br /><br />
      <button onClick={(e) => navegar("/ListaAlumnos") }>Alumnos</button>
    </>
  )
}