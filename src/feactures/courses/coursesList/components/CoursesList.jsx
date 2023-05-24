import React, { useState } from 'react'
import './coursesList.css'
import CursoCard from '../../cursoCard/components/CursoCard'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import  {getAllCoursesData}  from '../../CourseSlice';

//import { coursesInfo } from '../../../data.json'

export default function CoursesList() {

  let dispatch = useDispatch();

  useEffect(() => {

    fetch('http://localhost:3000/coursesInfo')
      .then(resp => resp.json())
      .then(data => dispatch(getAllCoursesData(data)))
      .catch(err => console.log('ocorreu um erro de leitura Fetch', err))

  }, []);

  const coursesData = useSelector(state => state.coursLibrary)

  return (
    <section className='container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
      <section className='coursesList flex flex-col  justify-between items-center'>
        <article >

        </article>
      </section>

      <article className='coursesListCards'>

        {

          coursesData.map(c =>
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
