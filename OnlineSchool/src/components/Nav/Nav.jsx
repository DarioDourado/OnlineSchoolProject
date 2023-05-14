import React from 'react'
import './navStyle.css';
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <nav className='flex flex-auto flex-col lg:flex-row items-center justify-between gap-5 container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-10' >
        <section>
          <div className='logo'>
            <h2>CoolLab</h2>
          </div>
        </section>
        <section className='navMenuUl flex justify-center items-center'>
          <ul className='flex flex-col md:flex-row items-center'>
              <li className='navLi sm:w-48 '><Link to='/LandingPage'>Home</Link></li>
              <li className='navLi sm:w-48 '><Link to='/Cursos'>Cursos</Link></li>
              <li className='navLi sm:w-48 '><Link to='/TrabalheConnosco'>Trabalhe Connosco</Link></li>
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
