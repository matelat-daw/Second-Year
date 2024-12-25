import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contenedor from './Contenedor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contenedor />
  </StrictMode>,
)