import './courseExplorerSearch.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import React from 'react'

export default function CourseExplorerSearch() {
  return (
    <section className='flex courseExplorer mx-auto m-7'>
      <SearchRoundedIcon 
        color='primary'
        fontSize='large'
        /> 

      <input
        type="text"
        placeholder='O que pretende aprender? '
        className='h-14 w-96'
      />
      <button className='btnSearch'>Explorar</button>
    </section>
  )
}
