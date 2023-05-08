import React from 'react'
import './bannerStyle.css'
import CourseExplorerSearch from '../CourseExplorer/CourseExplorerSearch'

export default function Banner() {
  return (
    <section className='banner container'>
        <section>
          <h1><span>A melhor solução, para a sua </span>Formação</h1>
          <h3>
            Provides you with the latest online learning system and material that help your knowledge growing.
          </h3>
          <div className='CourseExplorerBanner'>
            <CourseExplorerSearch />
          </div>
        </section>
        <section>
        <img src="/public/images/banner/Boneco_Banner.png" alt="boneco_banner" />
        </section>
    </section>
  )
}
