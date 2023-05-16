import React from 'react'
import './bannerStyle.css'
import CourseExplorerSearch from '../../CourseExplorer/CourseExplorerSearch'

export default function Banner() {
  return (
    <section className='flex flex-col md:flex-row justify-between items-center banner container max-w-screen-xl mx-auto p-7'>
        <section className='flex flex-col max-w-md'>
          <h1><span>A melhor solução, para a sua </span>Formação</h1>
          <h3>
            Provides you with the latest online learning system and material that help your knowledge growing.
          </h3>
          <div className='CourseExplorerBanner'>
            <CourseExplorerSearch />
          </div>
        </section>
        <section className='flex'>
          <img 
          src="/public/images/banner/Boneco_Banner.png" alt="Banner_Boneco"
          className='max-w-sm md:max-w-sm lg:max-w-lg'

          />
        </section>
    </section>
  )
}
