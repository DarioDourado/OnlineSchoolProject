import React from 'react'
import './regForm.css'

export default function RegForm() {

    return (
        <section className='flex flex-auto flex-col items-center justify-between gap-5 container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-10'>
            <h1 className='text-center'>Registe-se e conheça já todas as <span>vantagens</span> que temos para si.</h1>

            <fieldset className='fieldsetForm '>
                <legend className='text-3xl'>Registo</legend>
                <form className='flex flex-col p-7 gap-4'>
                    <input className='inputFormContactos'
                        type="text"
                        placeholder='Nome'
                    />
                    <input className='inputFormContactos'
                        type="text"
                        placeholder='Sobrenome'
                    />
                    <input className='inputFormContactos'
                        type="email"
                        placeholder='Digite o seu email'
                    />
                    <input className='inputFormContactos'
                        type="text"
                        placeholder='Digite a sua password'
                    />
                    <input className='inputFormContactos'
                        type="text"
                        placeholder='Confirme a sua password'
                    />

                    <div className='flex justify-end '>
                        <button className='btnFrom text-xl'>Registar</button>
                    </div>
                </form>
                <section>
                </section>
            </fieldset>
        </section>
    )
}
