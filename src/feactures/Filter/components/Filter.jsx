import './filter.css'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";


import { getCourses, 
  excelFilter,  
  webDevelopmentFilter, 
  marketingDigitalFilter,
  tecnicasAdministrativasDigitalFilter,
  officeFilter,
  dataCienceFilter,
} from "../../CoursesList/CourseListSlice";


import { useEffect, useState } from "react";

import React from 'react'

export default function Filter() {

  let dispatch = useDispatch();


  const curso = useSelector(state => state.courseLibrary.dataCourses)

  const filtered = useSelector(state => state.filterLibrary.filteredCourses)

  

  // Por cada curso que vou iterar devolve devolve categorias
  let categories = curso.map( c => c.course.categorie)

  // let uniqueCategories = [...new Set(categories)];

  return (
    <section className='filterComponent max-w-screen-xl mx-auto w-[520px] sm:w-[620px] md:w-[720px]'>
        <div className='grid grid-col-4 grid-flow-col gap-1'>
          <button className='btnFilter'
          onClick={() => dispatch(getCourses())}>
            Todos os Cursos
          </button>
          <button className='btnFilter'
          onClick={() => dispatch(webDevelopmentFilter())}>
            Web Development
          </button>
          <button className='btnFilter'
          onClick={() => dispatch(excelFilter())}>
            Excel
          </button>
          <button className='btnFilter'
          onClick={() => dispatch(tecnicasAdministrativasDigitalFilter())}>
            Técnicas Administrativas
          </button>
          <button className='btnFilter'
          onClick={() => dispatch(officeFilter())}>
            Office
          </button>
          <button className='btnFilter'
          onClick={() => dispatch(dataCienceFilter())}>
            Data Science
          </button>
          <button className='btnFilter'
          onClick={() => dispatch(marketingDigitalFilter())}>
            Marketing Digital
          </button>
          
          {/* fazer o dispatch de variáveis dispatch(filteredCourses(cbtn))*/}
          {/* {
            uniqueCategories.map( (cbtn, i) => 
          
              <button
              key={i}
              className='btnFilter flex flex-col justify-center'
              onClick={() => dispatch(filter(cbtn))}>
              {cbtn}</button>
              )
          } */}
        </div>
    </section>
  )
}
