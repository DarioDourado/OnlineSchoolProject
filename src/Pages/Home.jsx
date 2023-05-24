import React from 'react'
import Banner from '../ui/banner/components/Banner'
import Partners from '../ui/partners/components/Partners'

import QueDiferenca from '../ui/queDiferenca/components/QueDiferenca'
import Testemunhos from '../feactures/testemunhos/components/Testemunhos'
import JunteColLab from '../ui/JunteColLab/components/JunteColLab'
import Footer from '../ui/footer/components/Footer'
import MaisPopularesTitle from '../ui/maisPopularesTitle/components/MaisPopularesTitle'
import CoursesList from '../feactures/Courses/CoursesList/components/CoursesList'


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
