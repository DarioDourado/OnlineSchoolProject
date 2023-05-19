import React from 'react'
import './maisPopBtn.css'

export default function MaisPopBtn({uniCat}) {


    return (
        <section className='maisPopoBtnBox flex justify-between'>
            <button className='flex maisPopoBtnBtn'>
                <section className='flex items-center justify-center text-lg w-32 h-10'>
                    {uniCat}
                </section>
            </button>
            <div className='maisPopoBtnArrow w-12 h-10 flex items-center justify-center bg-black'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </div>


        </section>
    )
}
