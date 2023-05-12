import './filter.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import React from 'react'

export default function Filter() {
  return (
    <section className='filterComponent container flex max-w-screen-sm gap-2 p-2 flex-wrap justify-between items-center md:flex-row md:max-w-scree-md md:flex-nowrap xl:max-w-screen-lg mx-auto'>
        <button className='btnFilter'>Todos os Cursos</button>
        <button className='btnFilter'>Design</button>
        <button className='btnFilter'>Secretariado</button>
        <button className='btnFilter'>Data Science</button>
        <button className='btnFilter'>Marketing</button>
        <button className='btnFilter'>Desenvolvimento</button>
    </section>
  )
}
