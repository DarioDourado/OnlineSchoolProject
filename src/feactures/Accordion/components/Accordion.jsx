import React from 'react'
import './accordion.css'
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { Link } from 'react-router-dom'



export default function Accordion(props, i) {

  const [openMenu, setOpenMenu] = useState(false)

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className='accordion mt-1'>
      <div className='flex justify-between gap-2'>
        <div className='flex flex-col w-5/6'>
          
          <div className='ml-5 flex justify-between items-center'>

            <div className='w-12 flex justify-center items-center '>
            </div>
            <h3 className='text-2xl  text-black p-4'>{props.title}</h3>
            <div
              onClick={handleMenu}
              className={openMenu ? 'toggle' : 'notToggle'}
            >

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" strokeLinecap="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>


            </div>
          </div>
          <div
            className={openMenu ? 'flex gap-4 ml-5 justify-between' : 'hidden block flex gap-4 ml-5 justify-between'}
          >
            <h4 className='text-xl w-9/12 ml-3 justify-start flex mb-4'>{props.description}</h4>
            <h4 className='text-xl w-2/12 ml-3 justify-start flex'>61:30</h4>

          </div>
        </div>
      </div>
      <div className='hrSep hidden' id='sepDiv'></div>
      <div className='flex justify-between gap-2' id='accord'>
      </div>

    </div>
  )
}
