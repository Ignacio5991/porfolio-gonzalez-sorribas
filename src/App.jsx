import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbars from "./assets/components/navbar/navbar";
import Footer from "./assets/components/footer/footer";
import Certificaciones from './assets/components/certificaciones/certificados';
import './App.css'
import Tecnologias from './assets/components/tecnologias/tecnologias';
import Inicio from './assets/components/inicio/inicio';

function App() {


  return (
    <>
     <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/"  element={<Inicio/>}/>
        <Route path="/certificados" element={<Certificaciones/>} />
        <Route path="/tecnologias" element={<Tecnologias/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
