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
    <section className='filterComponent mx-auto w-100%'>
        <div className='grid grid-cols-4 md:grid-cols-7 lg:max-w-fit'>
          <button className='btnFilter md:p-3'
          onClick={() => dispatch(getCourses())}>
            Todos os Cursos
          </button>
          <button className='btnFilter md:p-3'
          onClick={() => dispatch(webDevelopmentFilter())}>
            Web Development
          </button>
          <button className='btnFilter md:p-3'
          onClick={() => dispatch(excelFilter())}>
            Excel
          </button>
          <button className='btnFilter md:p-3'
          onClick={() => dispatch(tecnicasAdministrativasDigitalFilter())}>
            Técnicas Administrativas
          </button>
          <button className='btnFilter md:p-3'
          onClick={() => dispatch(officeFilter())}>
            Office
          </button>
          <button className='btnFilter md:p-3'
          onClick={() => dispatch(dataCienceFilter())}>
            Data Science
          </button>
          <button className='btnFilter md:p-3'
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
