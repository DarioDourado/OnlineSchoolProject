import React, { useState } from 'react'
import './coursesList.css'
import Filter from '../../Filter/components/Filter'
import CursoCard from '../../CursoCard/components/CursoCard'
import { coursesInfo } from '../../../data.json'
import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import { getAllCourses } from '../CourseListSlice'

export default function CoursesList() {



  return (
    <section className='container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
      <section className='coursesList flex flex-col  justify-between items-center'>
        <article >
          <Filter />
        </article>
      </section>

      <article className='coursesListCards'>

        {
          coursesInfo.map( c => <CursoCard 
            key={c.id} {...c}/>)
        }
        
      </article>
    </section>
  )
}
