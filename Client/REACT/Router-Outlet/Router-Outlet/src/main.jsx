// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Contenedor from './Contenedor.jsx'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Inicio from './Inicio'
import Centro from './Centro'
import Daw2 from './Daw2'
import Grupo from './Grupo'
// import Ciclo from './Ciclo'
// import Curso from './Curso'
import Layoulet from './LayOutLet'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <Contenedor />
  // </StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layoulet />}>
        <Route index element={<Inicio />}></Route>
        <Route path='/Centro' element={<Centro />}></Route>
        <Route path='/Daw2' element={<Daw2 />}></Route>
        <Route path='/Grupo/:letra' element={<Grupo />}></Route>
        {/* <Route path="/centro" element={<Centro />}></Route>
        <Route path="/ciclo" element={<Ciclo />}></Route>
        <Route path="/curso" element={<Curso />}></Route> */}
        <Route path="*" element={<Navigate to="/" replace="true"/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
