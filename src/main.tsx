import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtecterRouter from './Componentes/ProtecterRouter.tsx'
import Votacion from './Componentes/Votacion.tsx'
import { ToastContainer } from 'react-toastify'
import Candidato from './Componentes/Candidato.tsx'
import Resultados from './Componentes/Resultados.tsx'   
createRoot(document.getElementById('root')!).render(  
  <StrictMode>
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path='/' element={<Votacion></Votacion>} ></Route>
        <Route path='/addcandidato' element={<Candidato></Candidato>} ></Route>
        <Route path='/Resultados' element={<Resultados></Resultados>} > </Route> 
        <Route path='*' element={} ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
