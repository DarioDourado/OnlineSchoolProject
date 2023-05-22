import React, { useState } from 'react'
import './coursesList.css'
import Filter from '../../Filter/components/Filter'
import CursoCard from '../../CursoCard/components/CursoCard'
import { coursesInfo } from '../../../data.json'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import CursoDetails from '../../CursoDetails/components/CursoDetails'
import { getAllDataCourses } from '../CourseListSlice'

export default function CoursesList() {

 let dispatch = useDispatch();

 const getAllCoursesData = useSelector( (state) => state.getAllCoursesData )

 useEffect(() => {

  fetch('http://localhost:3000/coursesInfo')
    .then(resp => resp.json())
    .then(data => dispatch(getAllCoursesData(data)))
    .catch(err => console.log('ocorreu um erro'))

 }, []);
 

console.log(getAllCoursesData)

  return (
    <section className='container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
      <section className='coursesList flex flex-col  justify-between items-center'>
        <article >
          <Filter />
        </article>
      </section>

      <article className='coursesListCards'>
      
        {
          coursesInfo.map(c => <CursoCard
            key={c.id} {...c} />)
        }

      </article>
    </section>
  )
}
