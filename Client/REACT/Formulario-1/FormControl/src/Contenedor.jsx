// import React from "react";
import { useState, useEffect } from 'react';
import FrmPersona from './FrmPersona'

let personas = [];
let length = 0;

export default function Contenedor() {

    let setPersona
    [personas, setPersona] = useState(personas);
    let setLength
    [length, setLength] = useState(length);
    function addPersona(persona)
    {
        personas.push(persona);
        useEffect(() => {
            if (personas.length !== length)
            {
              setLength(personas.length);
              console.log("Array length changed to:", personas.length);
            }
          }, [personas, length]);
          // setPersona((personas) => [...personas, `Item ${personas.length + 1}`]);
          setPersona((personas) => [...personas, `Item ${length}`]);
    }
    console.log(personas);
    return (
        // Lista de Personas (Tarea para Mañana)
        //useState cuando cambie el tamaño del array personas.
        <FrmPersona addPersona = {addPersona}/>
    )
}