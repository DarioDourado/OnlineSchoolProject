import React from 'react'
import './junteColLab.css'
import { Link } from 'react-router-dom'

export default function JunteColLab() {
  return (
    <section className='container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
        <article className='junteColLabContainer flex mt-10 mb-10 p-10 '>
            <div className='junteColLabLeft flex flex-col flex-2 items-start'>
                <h1>Junte-se á <span>ColLab, </span> a sua plataforma de formação</h1>
                <h3>Começe hoje mesmo a sua jornada connosco</h3>
            </div>
            <div className='flex flex-col flex-initial w-64 justify-start md:justify-center gap-5'>
                <Link
                  to={'/TrabalheConosco'}
                ><button className='junteColLabBtn1'>Sou Formador</button></Link>
                <Link
                  to={'/Contactos'}
                ><button className='junteColLabBtn2'>Sou Estudante</button></Link>
            </div>
        </article>
    </section>
  )
}
