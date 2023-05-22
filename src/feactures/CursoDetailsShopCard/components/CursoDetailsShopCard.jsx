import React from 'react'
import './cursoDetailsShopCard.css'
import Social from '../../../UI/Social/components/Social'
import Accordion from '../../Accordion/components/Accordion'





export default function CursoDetailsShopCard() {

    return (
        <section className='CursoDetailsShopCardMain container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
            <section className='bg-white'>
                <div className='imgCursoDetailsShopCardMain'>
                </div>
                <div className='flex justify-evenly max-w-md mx-auto mt-3'>
                    <div className='text-3xl text-black-500'>49,90€</div>
                    <div className='flex flex-col'>
                        <div className='text-xl line-through text-gray-500'>99€ Underline</div>
                        <div className='text-3xl text-gray-500'>50% Descc.</div>
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
                    <Accordion />

                
                </section>


            </section>
        </section>
    )

}
