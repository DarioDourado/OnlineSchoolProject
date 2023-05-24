import React from 'react'
import BannerCursos from '../ui/bannerCursos/components/BannerCursos'


import MaisPopBtnComp from '../ui/maisPopBtnComp/components/MaisPopBtnComp'
import Footer from '../ui/footer/components/Footer'
import CoursesList from '../feactures/Courses/CoursesList/components/CoursesList'
//import CourseExplorerSearch from '../feactures/courses/courseExplorer/components/CourseExplorerSearch'


export default function CursosPage() {
  return (
    <section>
      <BannerCursos />
      {/* <CourseExplorerSearch /> */}
      <CoursesList />
      <MaisPopBtnComp />
      <Footer />
    </section>
  )
}
