import { useState } from 'react';
import FrmAlumnos from './FrmAlumnos';
import ListaAlumnos from './ListaAlumnos';

let alumnos = [];

export default function Contenedor() {

    // let setPersona;
    // [personas, setPersona] = useState(personas); // Mi Solución.
    const [numAlumnos, setNumAlumnos] = useState(0); // Solución del Profesor.

    function addAlumno(alumno)
    {
        // setPersona((personas)=>[...personas, persona]); // Mi solución.
        alumnos.push(alumno);
        setNumAlumnos(alumnos.length); // Solución del Profesor, Asigna a la variable numPersonas el tamaño del array personas y se actualiza el estado.
    }
    return (
        // Lista de Personas (Tarea para Mañana)
        //useState cuando cambie el tamaño del array personas.
        <>
            <FrmAlumnos addAlumno = {addAlumno}/>
            <ListaAlumnos alumnos = {alumnos}/>
        </>
    )
}