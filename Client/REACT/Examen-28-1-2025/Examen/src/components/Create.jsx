import React, { useEffect, useState } from 'react';
import { createAlumno, getAlumnos, getGrupos } from '../services/Service';
import { useParams, useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ nombre: '', grupo: '' });
    const [grupos, setItems] = useState([]);
    const { id } = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAlumno(formData);
    // Redirigir o actualizar la lista después de crear
    navigate("/read");
  };

  if (id != null)
  {
    useEffect(() => {
        const fetchItem = async () => {
          const alumnos = await getAlumnos();
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
  }

  useEffect(() => {
      const fetchItems = async () => {
        const data = await getGrupos();
        setItems(data);
      };
      fetchItems();
    }, []);

  return (
    <div>
      <h2>Crea/Modifica Alumno</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
        <br /><br />
        {/* <input name="grupo" value={formData.grupo} onChange={handleChange} placeholder="Grupo" />
        <br /><br /> */}

        {/* <label htmlFor="grupo">Grupo:</label> */}
        <select name="grupo" id="grupo" placeholder="Grupo" onChange={handleChange} required>
            <option value={""}>Selecciona un Grupo</option>
            { grupos.map( (grupo, i) => <option key={`${i}+${grupo}`} value={grupo}>Grupo: {grupo}</option>)}
        </select>

        <br /><br />
        <button type="submit" className='btn btn-success'>Enviar</button>
      </form>
    </div>
  );
};

export default Create;