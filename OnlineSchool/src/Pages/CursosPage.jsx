import React from 'react'
import BannerCursos from '../components/BannerCursos/BannerCursos'
import CourseExplorerSearch from '../components/CourseExplorer/CourseExplorerSearch'
import MaisPopularesCards from '../components/MaisPopularesCards/MaisPopularesCards'
import MaisPopBtnComp from '../components/MaisPopBtnComp/MaisPopBtnComp'
import Footer from '../components/Footer/Footer'

export default function CursosPage() {
  return (
    <section>
        <BannerCursos/>
        <CourseExplorerSearch/>
        <MaisPopularesCards/>
        <MaisPopBtnComp/>
        <Footer/>
    </section>
  )
}
