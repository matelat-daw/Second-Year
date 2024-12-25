// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layoulet from './LayOutLet'
import Inicio from './Inicio'
import Crud from './Crud.jsx'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Centro from './Centro'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layoulet />}>
            <Route index element={<Inicio />}></Route>  
            <Route path="/Centro" element={<Centro />}></Route>
            <Route path="/ListaAlumnos" element={<Crud />}></Route>
            <Route path='/Grupo/:letra' element={<Grupo />}></Route>
            <Route path="*" element={<Navigate to="/" replace="true"/>}></Route>
        </Route>
    </Routes>
  </BrowserRouter>
)
