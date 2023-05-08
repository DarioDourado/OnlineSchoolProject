import React from 'react'
import { Typography } from '@mui/material'
import './navStyle.css';


export default function Nav() {
  return (
    <nav className='navContainer container'>
      <Typography variant='h3'>CoolLab</Typography>
        <ul >
            <li>Home</li>
            <li>Cursos</li>
            <li>Trabalhe Connosco</li>
            <li>Contactos</li>
        </ul>
        <section className='btnNav'>
        <button className='btn1'>Login</button>
        <button className='btn2'>Registar</button>
        </section>
    </nav>
  )
}
