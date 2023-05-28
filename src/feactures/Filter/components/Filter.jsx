import './filter.css'


import React from 'react'

export default function Filter() {
  return (
    <section className='filterComponent container max-w-screen-xl mx-auto grid grid-col-4 grid-flow-col gap-2 mt-3'>
        <button className='btnFilter'>Todos os Cursos</button>
        <button className='btnFilter'>Design</button>
        <button className='btnFilter'>Secretariado</button>
        <button className='btnFilter'>Data Science</button>
        <button className='btnFilter'>Marketing</button>
        <button className='btnFilter'>Desenvolvimento</button>
    </section>
  )
}
