import React from 'react'
import Filter from '../Filter/Filter'
import './maisPopularesCards.css'
import CursoCard from '../CursoCard/CursoCard'


export default function MaisPopularesCards() {
  return (
    <section className='container max-w-screen-lg mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
      <section className='maisPopularesHead flex flex-col lg:flex-row justify-between items-center'>
        <article>
          <h2>Mais <span>Populares</span></h2>
        </article>
        <article >
          <Filter />
        </article>
      </section>

      <article className='maisPopularesCards'>
        <CursoCard />
        <CursoCard />
        <CursoCard />
        <CursoCard />
        <CursoCard />
        <CursoCard />
      </article>

      <article>
        <button className='maisPopularesBtn'>Todos os nossos cursos</button>
      </article>

    </section>
  )
}
