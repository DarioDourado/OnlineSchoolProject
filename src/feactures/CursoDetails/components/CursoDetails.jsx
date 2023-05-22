import React from 'react'
import './cursoDetails.css'
import CursoDetailsShopCard from '../../CursoDetailsShopCard/components/CursoDetailsShopCard'


export default function CursoDetails() {
  return (
    <section>

        <section className='container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pt-7'>
            <div className='headerCursoDetails'>
                <img src="/public/images/CursoDetails/headerInstutosCursoDetails.png" alt="HeaderInstructorCursoDetailsImg" />
            </div>
            <div>
                <h1 className='text-3xl text-center pt-5'>Curso Completo do Desenvolvedor Web</h1>
            </div>
            <section className='flex flex-row justify-between items-center'>
                <section className='flex flex-col grow'>
                    <div className='text-md text-center pt-2 pb-5'>
                    Aprenda desenvolvimento web, crie um site do zero do básico ao avançado, aprenda HTML5 e CSS3 com muito JavaScript.
                    </div>
                    <div className='pt-5 text-2xl text-center'>
                        Detalhes do Curso:
                    </div>
                    <div className='ulTxtCursoDetails'>
                        <ul className='grid grid-cols-2 text'>
                            <li className='flex items-center gap-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DC4405" className="w-6 h-6"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg> 
                            Propriedade 1
                            </li>
                            <li className='flex items-center gap-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DC4405" className="w-6 h-6"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg> 
                            Propriedade 2
                            </li>
                            <li className='flex items-center gap-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DC4405" className="w-6 h-6"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg> 
                            Propriedade 3
                            </li>
                            <li className='flex items-center gap-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DC4405" className="w-6 h-6"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg> 
                            Propriedade 4
                            </li>
                            <li className='flex items-center gap-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DC4405" className="w-6 h-6"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg> 
                            Propriedade 5
                            </li>
                            <li className='flex items-center gap-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DC4405" className="w-6 h-6"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg> 
                            Propriedade 6
                            </li>


                        </ul>
                    </div>
                    <div> Review Stars</div>
                </section>
                <section className='cursoImagensSec h-64 w-32'>
                </section>
            </section>
        </section>
        <section>
            <CursoDetailsShopCard />
        </section>
    </section>
  )
}
