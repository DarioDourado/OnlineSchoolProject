
import './App.css'

import { Outlet } from 'react-router-dom'
import Nav from './feactures/Nav/components/Nav'



function App() {


  return (
    <>
      <section>
        <section>
          <div className='menuBgRed'>
          </div>
          <div className='menuBgElipse'>
          </div>
          <div className='menuBgCircle'>
          </div>
          <div className='menuBgCircleWhiteTL'>
          </div>
          <div className='menuBgCircleWhiteTR'>
          </div>
          <div className='menuBgCircleWhiteML'>
          </div>
          <div className='menuBgCircleWhiteMR'>
          </div>
        </section>
        <Nav />
        <Outlet/>
      </section>
    </>
  )
}

export default App
