// import React from "react";
import { useState } from 'react';
import FrmPersona from './FrmPersona'

let personas = [];

export default function Contenedor() {

    let setPersona
    [personas, setPersona] = useState(personas);

    function addPersona(persona)
    {
        setPersona((personas)=>[...personas, persona])
    }
    console.log(personas);
    return (
        // Lista de Personas (Tarea para Mañana)
        //useState cuando cambie el tamaño del array personas.
        <FrmPersona addPersona = {addPersona}/>
    )
}