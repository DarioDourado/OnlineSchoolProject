import React from 'react'
import './cursoDetails.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Social from '../../../UI/Social/components/Social'

import Accordion from '../../Accordion/components/Accordion'



export default function CursoDetails() {

    let params = useParams()

    const curso = useSelector(state => state.courseLibrary.dataCourses.find(c => c.id == params.id))

    let content = curso.course.content
    let objCurso = Object.values(curso)
    const contentObj = Object.values(content)
    const cursoImg = curso.course.courseImageUrl
    const cursoAuthorIMG = curso.authorCurso.authorCourseImg
    const reviewStars = curso.course.qtdStars
    const promoPrice = curso.priceInfo.promoPrice
    const price = curso.priceInfo.price
    const discount = Math.round((promoPrice / price) * 100)

    return (
        <section>
            <section className='container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pt-7 courseDetailsHeader'>
                <div className='headerCursoAuthorDetails'
                    style={{
                        backgroundImage: `url(${cursoImg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "5px",
                        
                    }}>
                    <figure className='headerCursoDetails'>
                        <img
                            src={cursoAuthorIMG}
                            alt={cursoAuthorIMG} />
                    </figure>
                </div>
                <div>
                    <h1 className='text-3xl text-center pt-5'>{curso.course.titleCourse}</h1>
                </div>
                <section className='flex flex-row justify-between items-center'>
                    <section className='flex flex-col grow'>
                        <div className='text-md text-center pt-2 pb-5'>
                            {curso.course.subTitleCourse}
                        </div>
                        <div className='pt-5 text-4xl text-center p-3 m-b'>
                            Detalhes do Curso:
                        </div>
                        <div className='ulTxtCursoDetails mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
                            <ul className='grid grid-rows-2 grid-flow-col gap-2 gridDetalhes'>
                                <li className='flex items-center gap-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DC4405" className="w-6 h-6"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                    {curso.course.bulletPointsCourse.bullet1}
                                </li>
                                <li className='flex items-center gap-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DC4405" className="w-6 h-6"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                    {curso.course.bulletPointsCourse.bullet2}
                                </li>
                                <li className='flex items-center gap-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DC4405" className="w-6 h-6"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                    {curso.course.bulletPointsCourse.bullet3}
                                </li>
                                <li className='flex items-center gap-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DC4405" className="w-6 h-6"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                    {curso.course.bulletPointsCourse.bullet4}
                                </li>
                                <li className='flex items-center gap-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DC4405" className="w-6 h-6"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                    {curso.course.bulletPointsCourse.bullet5}
                                </li>
                                <li className='flex items-center gap-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DC4405" className="w-6 h-6"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                    {curso.course.bulletPointsCourse.bullet6}
                                </li>


                            </ul>
                        </div>
                        <div className='p-2 text-2xl flex justify-center p-3'> {reviewStars}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cccc00" className="w-7 h-7">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </section>
                 
                </section>
            </section>
            <section>
                <section className='CursoDetailsShopCardMain container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
                    <section className='bg-white courseDetailsHeader'>

                        <div className='flex justify-evenly max-w-md mx-auto mt-3'>

                            <div className='text-3xl text-gray-500 items-center p-7 line-through'>{curso.priceInfo.price.toFixed(2)}€</div>
                            <div className='flex flex-col'>
                                <div className='text-2xl text-gray-500'>{discount}% OFF</div>
                                <div className='text-4xl text-black-500 underline'>{curso.priceInfo.promoPrice.toFixed(2)}€</div>
                            </div>
                        </div>
                        <div className='flex justify-center gap-4 cardTime'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className='text-xl'>11h para terminar esta promoção</div>
                        </div>
                        <div className='flex gap-4 justify-center cardBtns p-4'>
                            <button className='buyBtn text-xl'>Comprar</button>
                            <button className='buyBtn text-xl'>Adicionar ao carrinho</button>
                        </div>
                        <div className='hrSep'></div>
                        <h2 className='text-2xl mt-6'>Detalhes do Curso</h2>
                        <ul className=' detalheGrid mb-7 justify-center items-center mx-auto md:grid md:max-w-md md:grid-cols-2'>
                            <li className='flex gap-3 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg><p>Devolução do seu dinheiro</p>
                            </li>
                            <li className='flex gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg><p>Acesso em todos os dispositivos</p>
                            </li>
                            <li className='flex gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg> <p>Diploma de aproveitamento</p>
                            </li>
                            <li className='flex gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg><p>12 Módulos</p>
                            </li>
                        </ul>
                        <div className='hrSep'></div>
                        <h3 className='text-3xl text-black text-center p-3'>Pretende treinar mais que 5 pessoas?</h3>
                        <h4 className='text-md mt-3 ml-1.5'>Se tem uma empresa e pretende treinar mais que 5 dos seus colaboradores, fale connosco</h4>
                        <div className='hrSep'></div>
                        <h2 className='text-3xl text-black text-center'>Compartilhe este</h2>
                        <div className=' flex justify-center p-5'>
                            <Social />
                        </div>
                    </section>
                    <section className='text-white mx-auto'>
                        <h1 className='text-center'>Conteúdo Programático</h1>
                        <section>
                            {
                                contentObj.map((c, i) =>
                                    <Accordion key={i} {...c} />
                                )
                            }
                        </section>

                    </section>
                </section>
            </section>
        </section>
    )
}
