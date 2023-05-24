import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from '../src/app/store.js'
import CursosPage from './pages/CursosPage.jsx'
import ContactosPage from './pages/ContactosPage.jsx'
import Home from './pages/Home.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import TrabalheConoscoPage from './pages/trabalheConoscoPage.jsx'
import CursoDetails from './feactures/Courses/CursoDetails/components/CursoDetails.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>

      <BrowserRouter>
        <App />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cursos' element={<CursosPage />} />
            <Route path='/CursoDetails/:id' element={<CursoDetails />} />
          <Route path='/TrabalheConosco' element={<TrabalheConoscoPage />} />
          <Route path='/Contactos' element={<ContactosPage />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/RegisterPage' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
)
