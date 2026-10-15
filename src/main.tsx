import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtecterRouter from './Componentes/ProtecterRouter.tsx'

import Narbar from './Componentes/Narbar.tsx'
import Layoute from './Componentes/Layout.tsx'
import Votacion from './Componentes/Votacion.tsx'
// import CreateContextodo from './Contexto/CreateContext.js'
createRoot(document.getElementById('root')!).render(   

  <StrictMode>
    {/* <CreateContextodo> */}
    <BrowserRouter>
      <Routes>
        <Route path='/votaciones'  element={<Votacion></Votacion>} ></Route>
      </Routes>
    </BrowserRouter> 

    {/* </CreateContextodo> */}

    
  </StrictMode>,
)
