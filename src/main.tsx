import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtecterRouter from './Componentes/ProtecterRouter.tsx'
import Votacion from './Componentes/Votacion.tsx'
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')!).render(   

  <StrictMode>
  
    <BrowserRouter>
    <ToastContainer></ToastContainer>
      <Routes>
        <Route path='/votaciones'  element={<Votacion></Votacion>} ></Route>
      </Routes>
    </BrowserRouter> 
  </StrictMode>,
)
