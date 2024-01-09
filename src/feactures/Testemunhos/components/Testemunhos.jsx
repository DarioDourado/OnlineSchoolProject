import React, { useEffect, useState } from 'react'
import people from './dataTestemonials'
import { Link } from 'react-router-dom'
import './testemunhos.css'


export default function Testemunhos() {


  const [index, setIndex] = useState(0);
  const {name, job, image, text, review} = people[index];

  const checkNumber = (number) => {
    if(number > people.length - 1){
      return 0;
    }
    else if(number < 0){
      return people.length - 1;
    }
    return number;
  }


  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    }) 
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    }) 
  }

  const randomPerson = () => {
    let randomNumber = Math.floor (Math.random() * people.length);
    if(randomNumber === index ){
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  }





  return (
    <section className='container testemunhos mx-auto p-7 container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg'>
          <section className="section">
      <div className="title">
        <h2>top leader</h2>
      </div>
      <div className="section-center">
        
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
        <section className='testemunhoMainContainer'>
          <div className='flex justify-between'>

            <div className='order-4 testemunhosImg4 transform lg:relative transition-all duration-300'>
                <img src="/public/images/testemunhos/testemunho1.png" alt="" />
            </div>
            <div className='order-3 testemunhosImg3 lg:relative lg:top-24 right-4'>
                <img src="/public/images/testemunhos/testemunho2.png" alt="" />
            </div>
            <div className='order-1 testemunhosImg1 lg:relative lg:top-64'> 
                <img src="/public/images/testemunhos/testemunho3.png" alt="" />
            </div>
            <div className='order-2 testemunhosImg2 lg:relative lg:top-14'>
                <img src="/public/images/testemunhos/testemunho4.png" alt="" />
            </div>
            <div className='order-6 testemunhosImg6 lg:relative lg:top-96'>
                <img src="/public/images/testemunhos/testemunho5.png" alt="" />
            </div>
            <div className='order-5 testemunhosImg5 lg:relative lg:top-32'>
                <img src="/public/images/testemunhos/testemunho6.png" alt="" />
            </div>

          </div>

          <section>
            <h1>Testemunhos</h1>
          </section>
          <section className='testemunhosContainer max-w-screen-sm mx-auto'>
            <section className='flex justify-between items-center p-8 '>
              <article className='flex justify-center items-center gap-5'>
                <div className='flex justify-center testemunialFoto'>
                  <img src={image} alt={image} />
                </div>
                <div className='flex flex-col items-start'>
                  <h4 className='text-3xl text-white'>{name}</h4>
                  <h4 className='text-3xl text-white'>{job}</h4>
                </div>
              </article>
              <div className='flex justify-center'>
              <h3 className='text-2xl text-white'>{review}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cccc00" className="w-7 h-7">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
              </div>
            </section>
            <div className=' divTestemunhos'></div>
            <div className='divTestemunhosText p-2'>
              <p>
              {text}
              </p>
              <div className='flex gap-4 justify-between p-3'>
                <button className='testemunhosBtn' onClick={prevPerson}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                </button>
                <button className='testemunhosBtn' onClick={nextPerson}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>


                  
                </button>
              </div>
            </div>
          </section>

        </section>
        
    </section>
  )
}
