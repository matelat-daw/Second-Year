// import React from "react";
import { useState } from 'react';
import FrmPersona from './FrmPersona';
import ListaPersonas from './ListaPersonas';

let personas = [];

export default function Contenedor() {

    // const [arrayPersonas, setStoragePersonas] = useState(personas.length); // Solución del Profesor.

    // let setPersona;
    // [personas, setPersona] = useState(personas); // Mi Solución.
    const [numPersonas, setNumPersonas] = useState(personas.length); // Solución del Profesor.

    function addPersona(persona)
    {
        // setPersona((personas)=>[...personas, persona]); // Mi solución.
        personas.push(persona);
        setNumPersonas(personas.length); // Solución del Profesor, Asigna a la variable numPersonas el tamaño del array personas y se actualiza el estado.
        localStorage.setItem("Personas", JSON.stringify(personas));
    }
    console.log(personas);
    if (localStorage.getItem("Personas") != null)
    {
        personas = JSON.parse(localStorage.getItem("Personas"));
        setNumPersonas(personas.length);
    }
    return (
        // Lista de Personas (Tarea para Mañana)
        //useState cuando cambie el tamaño del array personas.
        <>
            <FrmPersona addPersona = {addPersona}/>
            <ListaPersonas personas = {personas}/>
        </>
    )
}