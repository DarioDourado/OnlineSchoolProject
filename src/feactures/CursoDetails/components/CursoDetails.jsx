import React from 'react'
import './cursoDetails.css'
import CursoDetailsShopCard from '../../CursoDetailsShopCard/components/CursoDetailsShopCard'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Social from '../../../UI/Social/components/Social'
import { object } from 'yup'
import Accordion from '../../Accordion/components/Accordion'



export default function CursoDetails() {

    let params = useParams()

    const curso = useSelector(state => state.courseLibrary.dataCourses.find(c => c.id == params.id))

    let content = curso.course.content
    let preceInfo = curso.priceInfo
    let authorCurso = curso.authorCurso


    // console.log(content.modulo1.lessonsModule1.hasOwnProperty.length)
   
    console.log(Object.entries(content.modulo1.lessonsModule1).length)
    
    const accordionConst = document.getElementById('accord')
    const arrowBtnRotate = document.getElementById('arrowBtn')
    const sepDiv = document.getElementById('sepDiv')

    const handleAccordion = (e) => {

        if (accordionConst.classList.contains('hidden') === true) {
            accordionConst.classList.remove('hidden')
            arrowBtnRotate.classList.remove('rotateBtn')
            sepDiv.classList.remove('hidden')
        }
        else if (accordionConst.classList.contains('hidden') === false) {
            accordionConst.classList.add('hidden')
            arrowBtnRotate.classList.add('rotateBtn')
            sepDiv.classList.add('hidden')
        }

    }

    return (
        <section>
            <section className='container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pt-7'>
                <div className='headerCursoDetails'>
                    <img src="/public/images/CursoDetails/headerInstutosCursoDetails.png" alt="HeaderInstructorCursoDetailsImg" />
                </div>
                <div>

                    <h1 className='text-3xl text-center pt-5'>{curso.course.titleCourse}</h1>
                </div>
                <section className='flex flex-row justify-between items-center'>
                    <section className='flex flex-col grow'>
                        <div className='text-md text-center pt-2 pb-5'>
                            {curso.course.subTitleCourse}
                        </div>
                        <div className='pt-5 text-2xl text-center'>
                            Detalhes do Curso:
                        </div>
                        <div className='ulTxtCursoDetails'>
                            <ul className='grid grid-cols-2 text'>
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
                        <div> Review Stars</div>
                    </section>
                    <section className='cursoImagensSec h-64 w-32'>
                    </section>
                </section>
            </section>
            <section>
                <section className='CursoDetailsShopCardMain container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
                    <section className='bg-white'>
                        <div className='imgCursoDetailsShopCardMain'>
                        </div>
                        <div className='flex justify-evenly max-w-md mx-auto mt-3'>

                            <div className='text-3xl text-black-500'>{curso.priceInfo.price}</div>
                            <div className='flex flex-col'>
                                <div className='text-xl line-through text-gray-500'>{curso.priceInfo.promoPrice}</div>
                                <div className='text-3xl text-gray-500'>{curso.priceInfo.promoPrice}</div>
                            </div>
                        </div>
                        <div className='flex justify-center gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <div className='text-xl'>11h para terminar esta promoção</div>
                        </div>
                        <div className='flex flex-col gap-4 justify-center'>
                            <button>Comprar</button>
                            <button>Adicionar ao carrinho</button>
                        </div>
                        <div className='hrSep'></div>
                        <h2 className='text-2xl mt-6'>Detalhes do Curso</h2>
                        <ul className='flex flex-col mb-7 justify-center max-w-sm mx-auto md:grid md:max-w-md md:grid-cols-2'>
                            <li className='flex gap-3'>
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
                        <h3 className='text-3xl text-black text-center '>Pretende treinar mais que 5 pessoas</h3>
                        <h4 className='text-lg mt-3'>Se tem uma empresa e pretende treinar mais que 5 dos seus colaboradores, fale connosco</h4>
                        <div className='hrSep'></div>
                        <h2 className='text-3xl text-black text-center'>Compartilhe este</h2>
                        <div className=' flex justify-center p-5'>
                            <Social />
                        </div>
                    </section>
                    <section className='text-white mx-auto'>
                        <h1>Conteúdo Programático</h1>
                        <section>

                            <Accordion key={params} {...curso}/>

                            {/* <div className='accordion mt-1'>
                                <div className='flex justify-between gap-2' onClick={handleAccordion}>
                                    <div className='flex flex-col w-5/6'>
                                        <div className='ml-5 flex'>
                                            <div className='moduleN bg-black '>
                                            </div>
                                            <div className='w-12 flex justify-center items-center '>
                                                <h2 className='text-3xl '>1</h2>
                                            </div>
                                            <h3 className='text-2xl text-black p-4'>{content.modulo1.titleModule1}</h3>
                                        </div>
                                        <div className='flex gap-4 ml-5 justify-between'>
                                            <h4 className='text-xl w-9/12 ml-3 justify-start flex'>{content.modulo1.descModule1}</h4>
                                            <h4 className='text-xl w-2/12 ml-3 justify-start flex'>{Object.entries(content.modulo1.lessonsModule1).length} Aulas</h4>
                                            <h4 className='text-xl w-2/12 ml-3 justify-start flex'>61:30</h4>
                                        </div>
                                    </div>
                                    <div className='flex items-center w-1/6 justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            id='arrowBtn'
                                            className="w-6 h-6 rotateBtn">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className='hrSep hidden' id='sepDiv'></div>
                                <div className='flex justify-between gap-2 hidden' id='accord'>
                                    <div className='flex flex-col w-5/6 mb-7'>
                                        <div className='flex gap-4 ml-5 justify-between'>
                                            <h4 className='text-xl w-11/12 ml-3 justify-start flex'>Subtema 1 Referente ao módulo 1</h4>
                                            <h4 className='text-xl w-2/12 ml-3 justify-start flex'>20:30</h4>
                                        </div>
                                        <div className='flex gap-4 ml-5 justify-between'>
                                            <h4 className='text-xl w-11/12 ml-3 justify-start flex'>Subtema 2 Referente ao módulo 1</h4>
                                            <h4 className='text-xl w-2/12 ml-3 justify-start flex'>20:30</h4>
                                        </div>
                                        <div className='flex gap-4 ml-5 justify-between'>
                                            <h4 className='text-xl w-11/12 ml-3 justify-start flex'>Subtema 3 Referente ao módulo 1</h4>
                                            <h4 className='text-xl w-2/12 ml-3 justify-start flex'>20:30</h4>
                                        </div>
                                    </div>
                                </div>

                            </div> */}


                        </section>


                    </section>
                </section>
            </section>
        </section>
    )
}
