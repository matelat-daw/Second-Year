import { useState } from 'react';
import FrmAlumno from './FrmAlumno';
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

    function borrarAlumno(alumno)
    {
        alumnos.splice(alumno.id, 1);
        setNumAlumnos(alumnos.length);
    }

    // function modificarAlumno(alumno)
    // {
        // alumnos.splice(1, alumno.id);
        // setNumAlumnos(alumnos.length);
    // }

    return (
        // Lista de Personas (Tarea para Mañana)
        //useState cuando cambie el tamaño del array personas.
        <>
            <FrmAlumno addAlumno = {addAlumno} />
            <ListaAlumnos alumnos = {alumnos}/>
        </>
    )
}