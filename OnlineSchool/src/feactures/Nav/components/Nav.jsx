import React from 'react'
import './navStyle.css';
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux';


export default function Nav() {

  const [handleMobileMenu, setHandleMobileMenu] = useState('hidden')


  return (
    <nav className='flex flex-auto flex-col lg:flex-row items-center justify-between gap-5 container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-10' >
      <section>
        <div className='logo'>
          <h2>CoolLab</h2>
        </div>
      </section>
      <section className='navMenuUl flex justify-center items-center'>
        <div className='hamburgerMenClose' id='hamburgerMenuClose'>
          <svg
            className="h-8 w-8 text-gray-600 closeHamburgerMenu"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <div className='hamburgerMenOpen' id='hamburgerMenuOpen '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </div>
        <ul className='flex flex-col md:flex-row items-center'>
          <li className='navLi sm:w-48 '><Link to='/'>Home</Link></li>
          <li className='navLi sm:w-48 '><Link to='/Cursos'>Cursos</Link></li>
          <li className='navLi sm:w-48 '><Link to='/TrabalheConosco'>Trabalhe Conosco</Link></li>
          <li className='navLi sm:w-48 '><Link to='/Contactos'>Contactos</Link></li>
        </ul>
      </section>
      <section className='flex flex-row justify-center gap-5 mt-7 lg:flex-col xl:flex-row'>
        <button className='btn2'><Link to='/LoginPage' >Login</Link></button>
        <button className='btn2'><Link to='/RegisterPage' >Registar</Link></button>
      </section>
    </nav>
  )
}
