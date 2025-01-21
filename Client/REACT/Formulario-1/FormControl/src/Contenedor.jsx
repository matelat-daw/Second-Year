// import React from "react";
import { useState } from 'react';
import FrmPersona from './FrmPersona';
import ListaPersonas from './ListaPersonas';

let personas = [];

export default function Contenedor() {

    // let setPersona;
    // [personas, setPersona] = useState(personas); // Mi Solución.
    const [numPersonas, setNumPersonas] = useState(0); // Solución del Profesor.

    function addPersona(persona)
    {
        // setPersona((personas)=>[...personas, persona]); // Mi solución.
        personas.push(persona);
        setNumPersonas(personas.length); // Solución del Profesor, Asigna a la variable numPersonas el tamaño del array personas y se actualiza el estado.
        console.log(numPersonas);
    }
    console.log(personas);
    return (
        // Lista de Personas (Tarea para Mañana)
        //useState cuando cambie el tamaño del array personas.
        <>
            <FrmPersona addPersona = {addPersona}/>
            <ListaPersonas personas = {personas}/>
        </>
    )
}