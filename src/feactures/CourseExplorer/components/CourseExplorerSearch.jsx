import './courseExplorerSearch.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import React from 'react'

export default function CourseExplorerSearch() {
  return (
    <section>
      <section className='flex courseExplorer mx-auto m-7'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#333" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input
          type="text"
          placeholder='O que pretende aprender? '
          className='h-14 w-[400px] outline-none'
        />
        <button className='btnSearch'>Explorar</button>
      </section>
    </section>
  )
}
