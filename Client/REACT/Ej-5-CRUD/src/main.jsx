import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Layoutlet from './Layoutlet'
import Inicio from './Inicio'
import Centro from './Centro'
import Daw2 from './Daw2'
import Grupo from './Grupo'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layoutlet />}>
                <Route index element={<Inicio />}></Route>  
                <Route path="/Centro" element={<Centro />}></Route>
                <Route path='/Daw2' element={<Daw2 />}></Route>
                {/* <Route path="/ListaAlumnos" element={<Crud />}></Route> */}
                <Route path='/Grupo/:letra' element={<Grupo />}></Route>
                <Route path="*" element={<Navigate to="/" replace="true"/>}></Route>
            </Route>
        </Routes>
  </BrowserRouter>
)


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Contenedor from './Contenedor.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Contenedor />
//   </StrictMode>,
// )