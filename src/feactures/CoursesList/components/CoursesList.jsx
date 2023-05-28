import React, { useState } from 'react'
import './coursesList.css'
import Filter from '../../Filter/components/Filter'
import CursoCard from '../../CursoCard/components/CursoCard'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { getAllCoursesData } from '../CourseListSlice'
import { Link } from 'react-router-dom'

export default function CoursesList() {

  let dispatch = useDispatch();

  useEffect(() => {

    fetch('http://localhost:3000/coursesInfo')
      .then(resp => resp.json())
      .then(data => dispatch(getAllCoursesData(data)))
      .catch(err => console.log('ocorreu um erro de leitura Fetch'))

  }, []);

  const getMyCoursesData = useSelector(state => state.courseLibrary.dataCourses)

  console.log(getMyCoursesData)

  return (
    <section className='container max-w-screen-xl mx-auto p-7'>
      <section className='coursesList flex flex-col  justify-between items-center'>
        <article >
          <Filter />
        </article>
      </section>

      <article className='coursesListCards mt-7'>

        {


          getMyCoursesData.map(c =>
            <Link
              key={c.id}
              to={`/CursoDetails/${c.id}`} >
              <CursoCard
                key={c.id} {...c} />
            </Link>
          )
        }

      </article>
    </section>
  )
}
