import './filter.css'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { getAllCoursesData, searchByTitle, showDevelopment } from "../../CoursesList/CourseListSlice";
import { useEffect, useState } from "react";

import React from 'react'

export default function Filter() {

  let dispatch = useDispatch();


  const curso = useSelector(state => state.courseLibrary.dataCourses)

  const filtered = useSelector(state => state.filterLibrary.filteredCourses)

  const btn = useSelector(state => state.filterLibrary.filteredCourses)

  console.log(btn)



  // Por cada curso que vou iterar devolve devolve categorias
  let categories = curso.map( c => c.course.categorie)

  let uniqueCategories = [...new Set(categories)];

  return (
    <section className='filterComponent max-w-screen-xl mx-auto grid grid-col-4 grid-flow-col gap-2 mt-3'>
        <div className='flex'>
          <button className='btnFilter flex flex-col justify-center'
          onClick={(e) => dispatch(showDevelopment())}>Todos os Cursos</button>
          {
            uniqueCategories.map( (cbtn, i) => 
          
              <button
              key={i}
              className='btnFilter flex flex-col justify-center'
              onClick={console.log(cbtn)}
              >{cbtn}</button>
              )
          }
        </div>
    </section>
  )
}
