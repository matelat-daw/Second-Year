import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Crud from './Crud.jsx'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Centro from './Centro'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layoulet />}>
            <Route path="/" element={<Inicio />}></Route>  
            <Route path="/Centro" element={<Centro />}></Route>
            <Route path="/Crud" element={<Crud />}></Route>
            <Route path="*" element={<Navigate to="/" replace="true"/>}></Route>
        </Route>
    </Routes>
  </BrowserRouter>
)
