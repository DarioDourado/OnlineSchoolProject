import './filter.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import React from 'react'

export default function Filter() {
  return (
    <section className='filterComponent flex container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl md:flex-row md:max-w-scree-md md:flex-nowrap xl:max-w-screen-lg justify-center'>
        <button className='btnFilter'>Todos os Cursos</button>
        <button className='btnFilter'>Design</button>
        <button className='btnFilter'>Secretariado</button>
        <button className='btnFilter'>Data Science</button>
        <button className='btnFilter'>Marketing</button>
        <button className='btnFilter'>Desenvolvimento</button>
    </section>
  )
}
