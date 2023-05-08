import React from 'react'
import './cursoCard.css'



export default function CursoCard() {
  return (
    <section className='cursoCard'>
      
      <div className='cardFotoBGImage'>

      </div>

        <div className='cursoCardTitle'>
          <h4>
          Python for Financial Analysis Next and Algorithmic Trading
          </h4>
          <div className='cardFotoName'>
            <img src="/images/cards/cardFoto.png" alt="" />
            <div className='cardFotoNameName'>
              <h4>Adam Smith</h4>
              <h5>Python Developer</h5>
            </div>
            <div className='cardFotoNameStudents'>
              <h4>
                50+ Estudantes
              </h4>
            </div>
          </div>
          <div className='cardsFotoRevBtn'>
            Reviews Stars
            <button className='btnComprar'>Comprar</button>

        </div>

      </div>
    </section>
  )
}