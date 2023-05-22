import React from 'react'
import './navStyle.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Divide as Hamburger } from 'hamburger-react'
import { NavLink } from "react-router-dom";




export default function Nav() {
  // <nav className={openMenu ? 'block' : 'hidden md:block'}>
  // <ul className='flex flex-col md:flex-row'>
  //   <li className={activeMenuBtn ? 'navLiActive sm:w-48' : 'navLi sm:w-48'} onClick={handleMenuActive}><Link to='/'>Home</Link></li>
  //   <li className={activeMenuBtn ? 'navLiActive sm:w-48' : 'navLi sm:w-48'} onClick={handleMenuActive}><Link to='/Cursos'>Cursos</Link></li>
  //   <li className={activeMenuBtn ? 'navLiActive sm:w-48' : 'navLi sm:w-48'} onClick={handleMenuActive}><Link to='/TrabalheConosco'>Trabalhe Conosco</Link></li>
  //   <li className={activeMenuBtn ? 'navLiActive sm:w-48' : 'navLi sm:w-48'} onClick={handleMenuActive}><Link to='/Contactos'>Contactos</Link></li>
  // </ul>


  const [isOpen, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [activeMenuBtn, setActiveMenuBtn] = useState(false)


  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const handleMenuActive = (e) => {

  }

  return (
    <nav className='flex flex-auto flex-col xl:flex-row items-center justify-between gap-3 container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-10' >
      <section>
        <div className='logo'>
          <h2>CoolLab</h2>
        </div>
      </section>
      <div className='flex gap-6 md:flex-col items-center lg:flex-row'>
        <section className='navMenuUl flex justify-center items-center '>
          <div className='hamburger-menu lg:hidden' onClick={handleMenu}>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen} />
          </div>
          <nav className={openMenu ? 'block' : 'hidden lg:block'}>
            <ul className='flex flex-col md:flex-row'>
              <li className={activeMenuBtn ? 'navLiActive' : 'navLi'} onClick={handleMenuActive}>
                <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? 'navLi' : isActive ? "navLiActive " : ""
                }
                to='/'>Home</NavLink>
                </li>
              <li className={activeMenuBtn ? 'navLiActive' : 'navLi'} onClick={handleMenuActive}><NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "navLi" : isActive ? "navLiActive" : ""
                }
                to='/Cursos'>Cursos</NavLink></li>
              <li className={activeMenuBtn ? 'navLiActive' : 'navLi'} onClick={handleMenuActive}><NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pendnavLiing" : isActive ? "navLiActive" : ""
                }
                to='/TrabalheConosco'>Trabalhe Conosco</NavLink></li>
              <li className={activeMenuBtn ? 'navLiActive' : 'navLi'} onClick={handleMenuActive}><NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "navLi" : isActive ? "navLiActive" : ""
                }
                to='/Contactos'>Contactos</NavLink></li>
            </ul>
          </nav>
        </section>
        <section className={openMenu ? 'flex flex-col justify-center gap-3 mt-7 md:flex-row lg:flex-col xl:flex-row' : 'flex flex-row justify-center gap-5 mt-7 lg:flex-col xl:flex-row hidden lg:flex'}>
          <button className='btn2'><Link to='/LoginPage' >Login</Link></button>
          <button className='btn2'><Link to='/RegisterPage' >Registar</Link></button>
        </section>
      </div>
    </nav>
  )
}
