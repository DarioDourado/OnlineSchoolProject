import React from 'react'
import Filter from '../Filter/Filter'
import './maisPopularesCards.css'
import CursoCard from '../CursoCard/CursoCard'


export default function MaisPopularesCards() {
  return (
    <section className='container'>
      <section className='maisPopularesHead'>
        <article>
          <h2>Mais <span>Populares</span></h2>
        </article>
        <article>
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
