import './filter.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import React from 'react'

export default function Filter() {
  return (
    <section className='filterComponent'>
        <button className='btnFilter'>Todos os Cursos</button>
        <button className='btnFilter'>Design</button>
        <button className='btnFilter'>Secretariado</button>
        <button className='btnFilter'>Data Science</button>
        <button className='btnFilter'>Marketing</button>
        <button className='btnFilter'>Desenvolvimento</button>
    </section>
  )
}
