import React from 'react'
import './maisPopBtnComp.css'
import MaisPopBtn from '../MaisPopBtn/MaisPopBtn'
import MaisPopularesTitle from '../MaisPopularesTitle/MaisPopularesTitle'

export default function MaisPopBtnComp() {
  return (
    <section className=' flex flex-col items-center container max-w-screen-sm mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>

          <MaisPopularesTitle />

        <section className='grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 content-center'>
            <MaisPopBtn />
            <MaisPopBtn />
            <MaisPopBtn />
            <MaisPopBtn />
            <MaisPopBtn />
            <MaisPopBtn />
        </section>
    </section>
  )
}
