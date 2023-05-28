import React from 'react'
import './accordion.css'


export default function Accordion(props, i) {
  
  return (
    <div className='accordion mt-1'>
      <div className='flex justify-between gap-2'>
        <div className='flex flex-col w-5/6'>
          <div className='ml-5 flex'>
          <div className='moduleN bg-black '>
        </div>
        <div className='w-12 flex justify-center items-center '>
        </div>
            <h3 className='text-2xl text-black p-4'>{props.title}</h3>
          </div>
          <div className='flex gap-4 ml-5 justify-between'>
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
