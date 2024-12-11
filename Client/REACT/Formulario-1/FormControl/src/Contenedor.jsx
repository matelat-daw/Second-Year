// import React from "react";
// import { useState } from 'react';
import FrmPersona from './FrmPersona'

let personas = [];

export default function Contenedor() {
    function addPersona(persona)
    {
        personas.push(persona);
        console.log(personas);
    }
    return (
        // Lista de Personas (Tarea para Mañana)
        //useState cuando cambie el tamaño del array personas.
        <FrmPersona addPersona = {addPersona}/>
    )
}