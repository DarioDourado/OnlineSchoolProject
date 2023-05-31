import './filter.css'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";

import { getAllCoursesData, 
  searchByTitle, getCourses, 
  excelFilter,  
  webDevelopmentFilter, 
  marketingDigitalFilter,
  tecnicasAdministrativasDigitalFilter,
  officeFilter,
  dataCienceFilter,
  filter

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
    <section className='filterComponent max-w-screen-xl mx-auto grid grid-col-4 grid-flow-col gap-2 mt-3'>
        <div className='flex'>
          <button className='btnFilter flex flex-col justify-center'
          onClick={() => dispatch(getCourses())}>
            Todos os Cursos
          </button>
          <button className='btnFilter flex flex-col justify-center'
          onClick={() => dispatch(webDevelopmentFilter())}>
            Web Development
          </button>
          <button className='btnFilter flex flex-col justify-center'
          onClick={() => dispatch(excelFilter())}>
            Excel
          </button>
          <button className='btnFilter flex flex-col justify-center'
          onClick={() => dispatch(tecnicasAdministrativasDigitalFilter())}>
            Técnicas Administrativas
          </button>
          <button className='btnFilter flex flex-col justify-center'
          onClick={() => dispatch(officeFilter())}>
            Office
          </button>
          <button className='btnFilter flex flex-col justify-center'
          onClick={() => dispatch(dataCienceFilter())}>
            Data Cience
          </button>
          <button className='btnFilter flex flex-col justify-center'
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
