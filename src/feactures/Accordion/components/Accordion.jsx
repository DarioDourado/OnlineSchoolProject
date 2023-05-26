import React from 'react'
import './accordion.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function Accordion(props) {


  let params = useParams()

  const curso = useSelector(state => state.courseLibrary.dataCourses.find(c => c.id == params.id))

  let content = curso.course.content



  let genders = Object.values(content)

  console.log(genders.map( (genders, index) => genders))





  const accordionConst = document.getElementById('accord')
  const arrowBtnRotate = document.getElementById('arrowBtn')
  const sepDiv = document.getElementById('sepDiv')

  const handleAccordion = (e) => {

    // if(accordionConst.classList.contains('hidden') === true) {
    //   accordionConst.classList.remove('hidden')
    //   arrowBtnRotate.classList.remove('rotateBtn')
    //   sepDiv.classList.remove('hidden')
    // }
    // else if(accordionConst.classList.contains('hidden') === false) {
    //   accordionConst.classList.add('hidden')
    //   arrowBtnRotate.classList.add('rotateBtn')
    //   sepDiv.classList.add('hidden')
    // }
  }


  return (
    <div className='accordion mt-1'>
      <div className='flex justify-between gap-2' onClick={handleAccordion}>
        <div className='flex flex-col w-5/6'>
          <div className='ml-5 flex'>
          <div className='moduleN bg-black '>
        </div>
        <div className='w-12 flex justify-center items-center '>
            <h2 className='text-3xl '>1</h2>
        </div>
            <h3 className='text-2xl text-black p-4'>{content.modulo1.tittleModule1}</h3>
          </div>
          <div className='flex gap-4 ml-5 justify-between'>
            <h4 className='text-xl w-9/12 ml-3 justify-start flex'>{content.modulo1.descModule1}</h4>
            <h4 className='text-xl w-2/12 ml-3 justify-start flex'>{Object.entries(content.modulo1.lessonsModule1).length} Aulas</h4>
            <h4 className='text-xl w-2/12 ml-3 justify-start flex'>61:30</h4>
          </div>
        </div>
        <div className='flex items-center w-1/6 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor"
            id='arrowBtn' 
            className="w-6 h-6 rotateBtn">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" 
            />
            </svg>
        </div>
      </div> 
      <div className='hrSep hidden' id='sepDiv'></div>
      <div className='flex justify-between gap-2' id='accord'>
        <div className='flex flex-col w-5/6 mb-7'>
          <div className='flex gap-4 ml-5 justify-between'>
            <h4 className='text-xl w-11/12 ml-3 justify-start flex'>{content.modulo1.lessonsModule1.lesson1}</h4>
            <h4 className='text-xl w-2/12 ml-3 justify-start flex'>20:30</h4>
          </div>
          <div className='flex gap-4 ml-5 justify-between'>
            {/* {
              content.modulo1.lessonsModule1.map(lesson => lesson.lesson1)
            } */}

            <h4 className='text-xl w-11/12 ml-3 justify-start flex'>{content.modulo1.lessonsModule1.lesson2}</h4>
            <h4 className='text-xl w-2/12 ml-3 justify-start flex'>20:30</h4>
          </div>
        </div>
      </div>

    </div>
  )
}
