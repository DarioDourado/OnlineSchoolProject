import React from 'react'
import './testemunhos.css'


export default function Testemunhos() {
  return (
    <section className='container testemunhos mx-auto p-7 container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg'>
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
            <section className='flex justify-between p-8 '>
              <article className='flex justify-star gap-5'>
                <div className='flex justify-center'>
                  <img src="/images/cards/cardFoto.png" alt="" />
                </div>
                <div className='flex flex-col items-start'>
                  <h4>Adam Smith</h4>
                  <h5>Python Developer</h5>
                </div>
              </article>
              <div className='flex '>
                Review Stars
              </div>
            </section>
            <div className=' divTestemunhos'></div>
            <div className='divTestemunhosText'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt earum, soluta dicta, suscipit laudantium odit totam excepturi vero facere officia, consequatur similique explicabo autem temporibus minima labore sint magni?
              </p>
              <div className='flex gap-4 justify-between p-3'>
                <button className='testemunhosBtn'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                </button>
                <button className='testemunhosBtn'>
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
