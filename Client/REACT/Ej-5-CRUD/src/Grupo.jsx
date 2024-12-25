import React from "react";
import { useParams } from "react-router-dom";
// const grupos = ["A", "B"];

const alumnos = [
    {grupo: "A", nombre: "Juan"},
    {grupo: "A", nombre: "Eva"},
    {grupo: "B", nombre: "Ana"},
    {grupo: "B", nombre: "Julia"},
    {grupo: "B", nombre: "Antonio"},
    ];

export default function Grupo()
{
    // const parametros = useParams();
    const {letra} = useParams();
    return (
    <>
        {/* <h3>Alumnos del Curso 2º DAW {parametros.letra}</h3> */}
        <h3>Alumnos del Curso 2º DAW {letra}</h3>
        <ul>
            {/* {grupos.map(grupo => <li key={grupo}>
            <Link to={`/grupo/${grupo}`}>2º DAW Grupo {grupo}</Link>
            </li>)} */}
            {alumnos.filter(alumno => alumno.grupo == letra).map((alumno, i) => <li key={i}>{alumno.nombre}</li>)}
        </ul>
    </>
    )
}