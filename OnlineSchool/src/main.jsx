import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CursosPage from './Pages/CursosPage.jsx'
import ContactosPage from './Pages/ContactosPage.jsx'
import Home from './Pages/Home.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import RegisterPage from './Pages/RegisterPage.jsx'
import TrabalheConoscoPage from './Pages/TrabalheConoscoPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <BrowserRouter>
      <App />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cursos' element={<CursosPage />} />
        <Route path='/TrabalheConosco' element={<TrabalheConoscoPage />} />
        <Route path='/Contactos' element={<ContactosPage />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/RegisterPage' element={<RegisterPage/>} />
      </Routes>
    </BrowserRouter>


  </React.StrictMode>,
)
