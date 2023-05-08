import './courseExplorerSearch.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import React from 'react'

export default function CourseExplorerSearch() {
  return (
    <section className='courseExplorer'>
        <SearchRoundedIcon 
        color='primary'
        fontSize='large'
        /> 
        <input 
        type="text"
        placeholder='O que pretende aprender?'
        />
        <button className='btn2'>Explorar</button>
    </section>
  )
}
