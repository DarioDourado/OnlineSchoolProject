import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import CourseExplorerSearch from './components/CourseExplorer/CourseExplorerSearch'
import Partners from './components/Partners/Partners'
import CursoCard from './components/CursoCard/CursoCard'
import Filter from './components/Filter/Filter'
import MaisPopularesCards from './components/MaisPopularesCards/MaisPopularesCards'
import QueDiferenca from './components/QueDiferenca/QueDiferenca'
import Testemunhos from './components/Testemunhos/Testemunhos'
import JunteColLab from './components/JunteColLab/JunteColLab'
import Footer from './components/Footer/Footer'
import BannerCursos from './components/BannerCursos/BannerCursos'
import MaisPopBtn from './components/MaisPopBtn/MaisPopBtn'
import MaisPopBtnComp from './components/MaisPopBtnComp/MaisPopBtnComp'
import CursoDetails from './components/CursoDetails/CursoDetails'
import Contactos from './components/Contactos/Contactos'
import Login from './components/Login/Login'
import { Outlet } from 'react-router-dom'
import Home from './Pages/Home'
import CursosPage from './Pages/CursosPage'
import ContactosPage from './Pages/ContactosPage'
import LoginPage from './Pages/LoginPage'


function App() {


  return (
    <>
      <section>
        <section>
          <div className='menuBgRed'>
          </div>
          <div className='menuBgElipse'>
          </div>
          <div className='menuBgCircle'>
          </div>
          <div className='menuBgCircleWhiteTL'>
          </div>
          <div className='menuBgCircleWhiteTR'>
          </div>
          <div className='menuBgCircleWhiteML'>
          </div>
          <div className='menuBgCircleWhiteMR'>
          </div>
        </section>
        <Nav />
        <Outlet/>

        {/* <Footer/> */}

      </section>
    </>
  )
}

export default App
