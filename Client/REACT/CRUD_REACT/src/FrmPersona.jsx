import { useState } from 'react'
import './FrmPersona.css'
import PropTypes from 'prop-types';

function FrmPersona({addPersona}) {
  let setNombre, setMayorDeEdad, setTipoCiclo;
  //Valores iniciales del formulario
  const unaPersona = {
    nombre: "",
    esMayorDeEdad: true,
    tipoCiclo: "superior",
  };

  [unaPersona.nombre, setNombre] = useState(unaPersona.nombre);
  [unaPersona.mayorDeEdad, setMayorDeEdad] = useState(unaPersona.esMayorDeEdad);
  [unaPersona.tipoCiclo, setTipoCiclo] = useState(unaPersona.tipoCiclo);

  return (
    <form action="" onSubmit={(e) => {
      addPersona(unaPersona);
      e.preventDefault();
          }
        }>
      <label htmlFor="nombre">Nombre completo:</label>
      <input type="text" name="nombre" id="nombre" value={unaPersona.nombre} onChange={(e)=> setNombre(e.target.value)}/>
      <label htmlFor="mayor-edad">Es mayor de edad</label>
      <input type="checkbox" name="mayor-edad" id="mayor-edad" checked={unaPersona.mayorDeEdad} onChange={(e) => setMayorDeEdad(e.target.checked)}/>
      <fieldset>
        <legend>Tipo de Ciclo</legend>
        <input type="radio" name="tipo-ciclo" id="medio" value="medio" checked={unaPersona.tipoCiclo == "medio"} onChange={(e) => setTipoCiclo(e.target.value)}/>
        <label htmlFor="medio">Ciclo Medio</label>
        <input type="radio" name="tipo-ciclo" id="superior" value="superior" checked={unaPersona.tipoCiclo == "superior"} onChange={(e) => setTipoCiclo(e.target.value)}/>
        <label htmlFor="superior">Superior</label>
      </fieldset>
      <button type="submit">Añadir</button>
    </form>
  )
}

FrmPersona.propTypes = {
  addPersona: PropTypes.func
}

export default FrmPersona;
