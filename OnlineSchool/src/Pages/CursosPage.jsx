import React from 'react'
import BannerCursos from '../UI/BannerCursos/components/BannerCursos'
import CourseExplorerSearch from '../feactures/CourseExplorer/components/CourseExplorerSearch'
import CoursesList from '../feactures/CoursesList/components/CoursesList'
import MaisPopBtnComp from '../UI/MaisPopBtnComp/components/MaisPopBtnComp'
import Footer from '../UI/Footer/components/Footer'


export default function CursosPage() {
  return (
    <section>
      <BannerCursos />
      <CourseExplorerSearch />
      <CoursesList />
      <MaisPopBtnComp />
      <Footer />
    </section>
  )
}
