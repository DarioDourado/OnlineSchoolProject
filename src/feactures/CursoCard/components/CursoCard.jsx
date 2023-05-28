import React from 'react'
import './cursoCard.css'
import { useDispatch, useSelector } from "react-redux";




export default function CursoCard(coursesInfo) {

  let {
    id,
    course: {
      titleCourse,
      courseImageUrl,
      qtdStudants,
      qtdStars
    },
    authorCurso: {
      name,
      authorCourseTitle,
      authorCourseImg,
    }
  } = coursesInfo

  console.log(coursesInfo)

  return (
    <section className='cursoCard shadow-2xl'>

      <div className='cardFotoBGImage'>
        <img src={courseImageUrl} alt={titleCourse} />
      </div>

      <div className='cursoCardTitle'>
        <div className='h-16'>
          <h4>
            {titleCourse}
          </h4>
        </div>
        <div className='cardFotoName flex'>

          <img src={authorCourseImg} alt={name} />
          <div className='cardFotoNameName'>
            <h5 className='w-32'>{name}</h5>
            <h5 className='w-32'>{authorCourseTitle} </h5>
          </div>
          <div className='cardFotoNameStudents'>
            <h4>
              {qtdStudants}+ Estudantes
            </h4>
          </div>
        </div>
        <div className='cardsFotoRevBtn'>
          <h4>{qtdStars}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#eeee0b" className="w-6 h-6">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>

          </h4>
          <button className='btnComprar'>Comprar</button>
        </div>
      </div>
      
    </section>
  )
}