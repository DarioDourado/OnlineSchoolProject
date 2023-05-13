import React from 'react'
import './accordion.css'

export default function Accordion() {

  const accordionConst = document.getElementById('accord')
  const arrowBtnRotate = document.getElementById('arrowBtn')
  const sepDiv = document.getElementById('sepDiv')

  const handleAccordion = (e) => {

    console.log('Entrou')

    if(accordionConst.classList.contains('hidden') === true) {
      accordionConst.classList.remove('hidden')
      arrowBtnRotate.classList.remove('rotateBtn')
      sepDiv.classList.remove('hidden')
    }
    else if(accordionConst.classList.contains('hidden') === false) {
      accordionConst.classList.add('hidden')
      arrowBtnRotate.classList.add('rotateBtn')
      sepDiv.classList.add('hidden')
    }


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
            <h3 className='text-2xl text-black p-4'>Modulo 1 - Título do Modulo 1</h3>
          </div>
          <div className='flex gap-4 ml-5 justify-between'>
            <h4 className='text-xl w-9/12 ml-3 justify-start flex'>Descrição Referente ao módulo 1</h4>
            <h4 className='text-xl w-2/12 ml-3 justify-start flex'>3 Aulas</h4>
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
      <div className='flex justify-between gap-2 hidden' id='accord'>
        <div className='flex flex-col w-5/6 mb-7'>
          <div className='flex gap-4 ml-5 justify-between'>
            <h4 className='text-xl w-11/12 ml-3 justify-start flex'>Subtema 1 Referente ao módulo 1</h4>
            <h4 className='text-xl w-2/12 ml-3 justify-start flex'>20:30</h4>
          </div>
          <div className='flex gap-4 ml-5 justify-between'>
            <h4 className='text-xl w-11/12 ml-3 justify-start flex'>Subtema 2 Referente ao módulo 1</h4>
            <h4 className='text-xl w-2/12 ml-3 justify-start flex'>20:30</h4>
          </div>
          <div className='flex gap-4 ml-5 justify-between'>
            <h4 className='text-xl w-11/12 ml-3 justify-start flex'>Subtema 3 Referente ao módulo 1</h4>
            <h4 className='text-xl w-2/12 ml-3 justify-start flex'>20:30</h4>
          </div>
        </div>
      </div>

    </div>
  )
}
