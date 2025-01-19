import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ListAlumnos({alumnos}) {
  const navegar = useNavigate();
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Grupo</th>
                    <th> Editar/Borrar</th>
                </tr>
            </thead>
            <tbody>
            {alumnos.map((alumno, i) => 
                <tr key={`${i}+${alumno.nombre}`}>
                    <td >{alumno.id}</td>
                    <td >{alumno.nombre}</td>
                    <td >{alumno.grupo}</td>
                    <td>
                        <button type="button" onClick={ (e)=> navegar(`/alumnos/edit/${alumno.id}`)}>Editar</button>
                        <button type="button" onClick={ (e)=> navegar(`/alumnos/delete/${alumno.id}`)}>Borrar</button>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
        <button type="button" onClick={ (e)=> navegar('/alumnos/add')}>Añadir</button>
    </>
  )
}

export default ListAlumnos