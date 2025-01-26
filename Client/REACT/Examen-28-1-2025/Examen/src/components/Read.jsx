import React, { useEffect, useState } from 'react';
import { getAllItems } from '../services/Service';
import { useNavigate } from 'react-router-dom';

const Read = () => {
    const navegar = useNavigate();
  const [alumnos, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getAllItems();
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <table>
        <thead>
            <tr><th>ID</th><th>Nombre</th><th>Descripción</th><th>Acciones</th></tr>
        </thead>
        <tbody>
                {alumnos.map((alumno) => (
                    <tr key={alumno.id}><td>{alumno.id}</td><td>{alumno.name}</td><td>{alumno.description}</td><td><button onClick={ (e) => navegar(`/Update/${alumno.id}`)}>Actualizar</button>&nbsp;&nbsp;<button onClick={(e)=> navegar(`/delete/${alumno.id}`)}>Eliminar</button></td></tr>
                ))}
        </tbody>
      </table>
      <button onClick={ (e) => navegar('/create')}>Añadir Alumno</button>
    </div>
  );
};

export default Read;