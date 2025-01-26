import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllItems, updateItem } from '../services/Service';

const Update = () => {
  const [formData, setFormData] = useState({ name: '', description: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      const alumnos = await getAllItems();
      const alumno = alumnos.find((alumno) => alumno.id === parseInt(id));
      if (alumno)
      {
        setFormData(alumno);
      }
      else
      {
        console.error('Alumno no encontrado');
      }
    };
    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(parseInt(id), formData);
    navigate('/read');
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" />
        <br /><br />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Descripción" />
        <br /><br />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default Update;