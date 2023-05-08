import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import CourseExplorerSearch from './components/CourseExplorer/CourseExplorerSearch'
import Partners from './components/Partners/Partners'
import CursoCard from './components/CursoCard/CursoCard'

function App() {


  return (
    <>
      <div>
        <Nav />
        <Banner />
        <Partners />
        <CursoCard />
      </div>
    </>
  )
}

export default App
