import { useState } from 'react';
import './index.css'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Inicio from './Inicio.jsx';
import Centro from './Centro.jsx';
import Ciclo from './Ciclo.jsx';
import Curso from './Curso.jsx';
import Layoutlet from './Layoutlet.jsx';
import Daw2 from './Daw2.jsx';
import Grupo from './Grupo.jsx';
import Add from './Add.jsx'
import Alumnos from './Alumnos.jsx';
import Edit from './Edit.jsx';
import Delete from './Delete.jsx';

let alumnado = [
  {id: 1, grupo:"A", nombre: "Juan"},
  {id: 2, grupo:"A", nombre: "Eva"},
  {id: 3, grupo:"B", nombre: "Ana"},
  {id: 4, grupo:"B", nombre: "Julia"},
  {id: 5, grupo:"B", nombre: "Antonio"},
];    

const grupos = ["A","B"];


function App() {
    const [numAlumnos, setNumAlumnos] = useState(alumnado.length);

    function validateId(id){
        let response = alumnado.findIndex(alumno => alumno.id == id);
        return response == -1
    }
    
    function addAlumno(alumno){
        if(validateId(alumno.id)){
            alumnado.push(alumno);
            setNumAlumnos(alumnado.length);      
        } else {
            alert("Id inválido")
        }     
    }
    
    function editAlumno(alumno){
        let alumnoIdEdit = alumnado.findIndex(alumn => alumn.id == alumno.id);
        if(alumnoIdEdit !== -1){
            alumnado.splice(alumnoIdEdit,1,alumno);
            setNumAlumnos(alumnado.length);
        } else {
            alert("No existe un alumno con ese id")
        }     
    }
    
    function deleteAlumno(id){
        let alumnoIdDelete = alumnado.findIndex(alumn => alumn.id == id);
        if(alumnoIdDelete !== -1){
            alumnado.splice(alumnoIdDelete,1);
            setNumAlumnos(alumnado.length);
        } else {
            alert("No existe un alumno con ese id")
        }  
    }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layoutlet />}>
        <Route index element={<Inicio />}></Route>
        <Route path="/ciclo" element={<Ciclo />}></Route>
        <Route path="/centro" element={<Centro />}></Route>
        <Route path="/curso" element={<Curso />}></Route>
        <Route path="/daw2" element={<Daw2 />}></Route>
        <Route path="/grupo/:letra" element={<Grupo />}></Route>
        <Route path="/alumnos" element={<Alumnos alumnos={alumnado} grupos={grupos} />}></Route>
        <Route path="/alumnos/add" element={<Add grupos={grupos} addAlumno={addAlumno} />}></Route>
        <Route path="/alumnos/edit/:id" element={<Edit alumnos={alumnado} grupos={grupos} editAlumno={editAlumno}/>}></Route>
        <Route path="/alumnos/delete/:id" element={<Delete alumnos={alumnado} deleteAlumno={deleteAlumno}/>}></Route>
        <Route path="*" element={<Navigate to="/" replace="true" />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App