import React, { useEffect, useState } from 'react';
import { createPersona } from '../services/Service';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', dni: '',  mayor_edad: '', sexo: ''});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAlumno(formData);
    // Redirigir o actualizar la lista después de crear
    navigate("/read");
  };

  useEffect(() => {
      const fetchItems = async () => {
        const data = await getGrupos();
        setItems(data);
      };
      fetchItems();
    }, []);

  return (
    <div>
      <h2>Agrega una Persona</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" value={formData.name} onChange={handleChange} placeholder="Nombre" required />
        <br /><br />
        <input type="text" name="dni" value={formData.dni} onChange={handleChange} placeholder="DNI" required />
        <br /><br />
        <input type="checkbox" name="mayor_edad" value={formData.mayor_edad} onChange={handleChange} placeholder="Eres Mayor de Edad?" required />
        <br /><br />
        <label htmlFor='sexoH'> Masculino</label>
        <input id='sexoH' type="radio" name="sexo" value={formData.sexo} onChange={handleChange} checked />&nbsp;&nbsp;
        <label htmlFor='sexoM'> Femenino</label>
        <input id='sexoM' type="radio" name="sexo" value={formData.sexo} onChange={handleChange} placeholder="Femenino" />
        <br /><br />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};