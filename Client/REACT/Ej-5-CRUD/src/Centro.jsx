import {useNavigate} from 'react-router-dom'
import Crud from './Crud'

export default function Centro() {
  const navegar = useNavigate();
  return (
    <>
      <h1>CIFP César Manrique</h1>
      <br/>
      <button onClick={(e) => navegar("/") }>Volver al Inicio</button>
      <br /><br />
    </>
  )
}