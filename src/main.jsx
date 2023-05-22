import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from '../src/app/store.js'
import CursosPage from './Pages/CursosPage.jsx'
import ContactosPage from './Pages/ContactosPage.jsx'
import Home from './Pages/Home.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import RegisterPage from './Pages/RegisterPage.jsx'
import TrabalheConoscoPage from './Pages/TrabalheConoscoPage.jsx'
import CursoDetails from './feactures/CursoDetails/components/CursoDetails.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>

      <BrowserRouter>
        <App />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cursos' element={<CursosPage />} />
          <Route path='/TrabalheConosco' element={<TrabalheConoscoPage />} />
          <Route path='/Contactos' element={<ContactosPage />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/RegisterPage' element={<RegisterPage />} />
          <Route path='/CursoDetails' element={<CursoDetails />} />
        </Routes>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
)
