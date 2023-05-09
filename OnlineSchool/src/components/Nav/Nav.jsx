import React from 'react'
import './navStyle.css';


export default function Nav() {
  return (
    <nav className='flex flex-auto flex-col lg:flex-row items-center justify-between gap-5 container mx-auto max-w-screen-xl' >
        <section>
          <div className='logo'>
            <h2>CoolLab</h2>
          </div>
        </section>
        <section className='navMenuUl flex justify-center items-center'>
          <ul className='flex flex-col md:flex-row items-center'>
              <li className='lg:w-38 '>Home</li>
              <li className='lg:w-38 '>Cursos</li>
              <li className='lg:w-38 '>Trabalhe Connosco</li>
              <li className='lg:w-38'>Contactos</li>
          </ul>
        </section>
        <section className='flex flex-row justify-center gap-5 mt-7 md:mt-0'>
            <button className='btn2'>Login</button>
            <button className='btn2'>Registar</button>
        </section>
    </nav>
  )
}
