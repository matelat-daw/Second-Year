import FrmPersona from './FrmPersona.jsx'
import { useState } from 'react';
import ListaPersonas from './listaPersonas.jsx';


let personas = localStorage.getItem('personas') !== null? JSON.parse(localStorage.getItem('personas')):[] ;
 
// let localPersonas=localStorage.getItem('personas');
// localPersonas = JSON.parse(localPersonas);
// localPersonas.forEach( (persona) => personas.push(persona));

function Contenedor() {
    const [numPersonas, setNumPersonas] = useState(personas.length);
    function addPersona(persona) {
        personas.push(persona);
        setNumPersonas(personas.length);
        localStorage.setItem('personas', JSON.stringify(personas));

        //
        console.log(personas);
        console.log(numPersonas);
    }
    
    return (
      <>
        <FrmPersona addPersona={addPersona} />
        <ListaPersonas personas={personas} />
      </>
  )
}

export default Contenedor