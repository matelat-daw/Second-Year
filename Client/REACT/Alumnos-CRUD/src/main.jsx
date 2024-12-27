import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Layoutlet from './Layoutlet'
import Inicio from './Inicio'
import Centro from './Centro'
import Alumnos from './Componentes/FrmAlumno'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layoutlet />}>
                <Route index element={<Inicio />}></Route>  
                <Route path="/Centro" element={<Centro />}></Route>
                <Route path='Componentes/Contenedor' element={<Alumnos />}></Route>
                <Route path="*" element={<Navigate to="/" replace="true"/>}></Route>
            </Route>
        </Routes>
  </BrowserRouter>
)