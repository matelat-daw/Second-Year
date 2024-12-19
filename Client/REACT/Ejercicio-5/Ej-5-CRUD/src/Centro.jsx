import {useNavigate} from 'react-router-dom'
import Crud from './Crud'

export default function Centro() {
  const navegar = useNavigate();
  return (
    <>
      <h1>CIFP César Manrique</h1>
      <br/>
      {/* <Link to="/">Volver al Inicio</Link> */}
      <button onClick={(e) => navegar({Crud}) }>Volver al Inicio</button>
      <br /><br />
    </>
  )
}