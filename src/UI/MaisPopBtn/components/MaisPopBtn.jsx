import React from 'react'
import './maisPopBtn.css'

export default function MaisPopBtn({uniCat}) {


    return (
        <section className='maisPopoBtnBox flex justify-between'>
            <button className='flex maisPopoBtnBtn items-center'>
                <section className='flex justify-center text-lg w-32 h-auto btnText'>
                    {uniCat}
                </section>
            </button>
            <div className='maisPopoBtnArrow flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/200/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </div>
        </section>
    )
}
