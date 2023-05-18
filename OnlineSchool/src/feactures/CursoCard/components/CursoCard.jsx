import React from 'react'
import './cursoCard.css'
import { useDispatch, useSelector } from "react-redux";




export default function CursoCard(coursesInfo) {

  let {id, titleCurso, qtdStars, qtdEstudantes, authorCurso: {nome, authorCursoTitle} } = coursesInfo


  return (
    <section className='cursoCard shadow-2xl'>
      
      <div className='cardFotoBGImage'>

      </div>

        <div className='cursoCardTitle'>
          <h4>
          {titleCurso}
          </h4>
          <div className='cardFotoName'>
            <img src="/images/cards/cardFoto.png" alt="" />
            <div className='cardFotoNameName'>
              <h5>{nome}</h5>
              <h5>{authorCursoTitle} </h5>
            </div>
            <div className='cardFotoNameStudents'>
              <h4>
              {qtdEstudantes}+ Estudantes
              </h4>
            </div>
          </div>
          <div className='cardsFotoRevBtn'>
            {qtdStars}
            <button className='btnComprar'>Comprar</button> 
          </div>
      </div>
    </section>
  )
}