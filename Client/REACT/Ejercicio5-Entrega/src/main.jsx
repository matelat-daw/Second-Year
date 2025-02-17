import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Layout from './Layout'
import Inicio from './Inicio'
import Centro from './Componentes/Centro'
import Alumno from './Componentes/Alumno'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />}></Route>
        <Route path='/Componentes/Centro' element={<Centro />}></Route>
        <Route path='/Componentes/Alumno' element={<Alumno />}></Route>
        <Route path="*" element={<Navigate to="/" replace="true"/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)