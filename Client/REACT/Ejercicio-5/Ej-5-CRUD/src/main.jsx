import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Crud from './Crud.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Crud />
  </StrictMode>,
)