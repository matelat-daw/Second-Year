let alumnos = [
    { id: 1, name: 'Juan', description: 'García' },
    { id: 2, name: 'María', description: 'López' },
    { id: 3, name: 'Carlos', description: 'Gómez' }
];

// Obtener todos los alumnos
export const getAllItems = async () => {
    try {
      return alumnos;
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  
  // Crear un nuevo alumno
  export const createItem = async (alumno) => {
    try {
      alumno.id = alumnos.length ? alumnos[alumnos.length - 1].id + 1 : 1;
      alumnos.push(alumno);
      return alumnos;
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };
  
  // Actualizar un alumno existente
  export const updateItem = async (id, updatedAlumno) => {
    try {
      alumnos = alumnos.map(alumno => 
        alumno.id === id ? { ...alumno, ...updatedAlumno } : alumno
      );
    //   return updatedAlumno;
    return alumnos;
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };
  
  // Eliminar un alumno
  export const deleteItem = async (id) => {
    try {
        alumnos = alumnos.filter(alumno => alumno.id !== id);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };