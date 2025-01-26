import React, { useState } from 'react';
import { createItem } from '../services/Service';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem(formData);
    // Redirigir o actualizar la lista después de crear
    navigate("/read");
  };

  return (
    <div>
      <h2>Create Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" />
        <br /><br />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Descripción" />
        <br /><br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;