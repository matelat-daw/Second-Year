let alumnos = [
    { id: 1, name: 'Juan', grupo: 'A' },
    { id: 2, name: 'María', grupo: 'B' },
    { id: 3, name: 'Carlos', grupo: 'A' }
];

const grupos = ["A", "B"];

// Obtener todos los alumnos
export const getAlumnos = async () => {
    try {
      return alumnos;
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // Obtener todos los grupos
export const getGrupos = async () => {
    try {
      return grupos;
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  
  // Crear un nuevo alumno
  export const createAlumno = async (alumno) => {
    try {
      alumno.id = alumnos.length ? alumnos[alumnos.length - 1].id + 1 : 1;
      alumnos.push(alumno);
      return alumnos;
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };
  
  // Actualizar un alumno existente
  export const updateAlumno = async (id, updatedAlumno) => {
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
  export const deleteAlumno = async (id) => {
    try {
        alumnos = alumnos.filter(alumno => alumno.id !== id);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };