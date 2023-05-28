import React from 'react'
import './maisPopBtnComp.css'
import MaisPopBtn from '../../MaisPopBtn/components/MaisPopBtn'
import { useSelector } from 'react-redux'



export default function MaisPopBtnComp() {

  const curso = useSelector(state => state.courseLibrary.dataCourses)

  // Por cada curso que vou iterar devolve devolve categorias
  let categories = curso.map( c => c.course.categorie)

  let uniqueCategories = [...new Set(categories)];

  return (
    <section className=' flex flex-col items-center container max-w-screen-sm mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>

        <div>
          <h1 className='text-center'>Categorias <span>mais populares</span></h1>
        </div>

        <section className='grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 content-center mt-3'>
        {
          uniqueCategories.map( (c, i) => <MaisPopBtn 
            key={i} uniCat={c}/>)
        }

        </section>
    </section>
  )
}
