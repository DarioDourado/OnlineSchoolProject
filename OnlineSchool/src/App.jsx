import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import CourseExplorerSearch from './components/CourseExplorer/CourseExplorerSearch'
import Partners from './components/Partners/Partners'
import CursoCard from './components/CursoCard/CursoCard'
import Filter from './components/Filter/Filter'
import MaisPopularesCards from './components/MaisPopularesCards/MaisPopularesCards'
import QueDiferenca from './components/QueDiferenca/QueDiferenca'

function App() {


  return (
    <>
      <div>
        <Nav />
        <Banner />
        <Partners />
        <MaisPopularesCards />
        <QueDiferenca />
        <Testemunhos />
        <JunteColLab />
        <Footer />
      </div>
    </>
  )
}

export default App
