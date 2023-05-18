import React from 'react'
import './maisPopBtnComp.css'
import MaisPopBtn from '../../MaisPopBtn/components/MaisPopBtn'
import { coursesInfo } from '../../../data.json'



export default function MaisPopBtnComp() {

  

  return (
    <section className=' flex flex-col items-center container max-w-screen-sm mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>

        <h1>Categorias <span>mais populares</span></h1>

        <section className='grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 content-center'>
        {
          coursesInfo.map( c => <MaisPopBtn 
            key={c.id} {...c}/>)
        }

        </section>
    </section>
  )
}
