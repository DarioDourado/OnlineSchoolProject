import React from 'react'
import './footer.css'
import Social from '../Social/Social'

export default function Footer() {
    return (
        <section className='container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl '>
            <section className='flex p-3 flex-col gap-5 lg:flex-row items-center justify-center'>
                <section className='logo flex flex-col justify-center items-center'>
                    <h1 className='text-3xl'>CoolLab</h1>
                    <h3 className='text-md'>Os seu objectivos, serão os nossos</h3>
                </section>
                <section>
                    <h2>Links Rápidos</h2>
                    <article className='flex gap-5 justify-center'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-md lg:text-lg'>Acerca</h3>
                            <h3 className='text-md lg:text-lg'>Cursos</h3>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h3 className='text-md lg:text-lg'>Trabalhe connosco</h3>
                            <h3 className='text-md lg:text-lg'>Contactos</h3>
                        </div>
                    </article>
                </section>
                <section className='flex flex-col'>
                    <h2>Contactos</h2>
                    <article className='flex gap-5 justify-center'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex justify-start items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                                <h3 className='text-lg'>Telefone</h3>
                            </div>
                            <div className='flex justify-start items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                </svg>
                                <h3 className='text-lg'>geral@collab.com</h3>
                            </div>
                        </div>
                        <div className='flex justify-start items-start gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <div className='flex flex-col'>
                                <h3 className='text-sm lg:text-lg'>Rua das Cooperativas, 70A</h3>
                                <h3 className='text-sm lg:text-lg'>8150-156 São Brás Alportel</h3>
                            </div>
                        </div>
                    </article>
                </section>
            </section>
            <div className='containerFooterHr'></div>
            <section className='flex justify-between items-center p-3'>
                <section>
                    <h3 className='text-sm lg:text-lg'>Copyright 2023 | All Rights Reserved to DuxDev Design</h3>

                </section>
                <section><Social /></section>
            </section>

        </section>
    )
}
