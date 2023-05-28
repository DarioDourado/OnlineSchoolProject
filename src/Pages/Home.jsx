import React from 'react'
import Banner from '../UI/Banner/components/Banner'
import Partners from '../UI/Partners/components/Partners'
import CoursesList from '../feactures/CoursesList/components/CoursesList'
import QueDiferenca from '../UI/QueDiferenca/components/QueDiferenca'
import Testemunhos from '../feactures/Testemunhos/components/Testemunhos'
import JunteColLab from '../UI/JunteColLab/components/JunteColLab'
import Footer from '../UI/Footer/components/Footer'
import MaisPopularesTitle from '../UI/MaisPopularesTitle/components/MaisPopularesTitle'



export default function Home() {
  return (
    <section>
        <Banner />
        <Partners />
        <div className='flex justify-center'>
          <MaisPopularesTitle />
        </div>
        <CoursesList />
        <QueDiferenca />
        <Testemunhos />
        <JunteColLab />
        <Footer />
    </section>
  )
}
