import React from 'react'


export default function TrabalheConoscoForm() {

  return (
    <section className='flex flex-auto flex-col items-center justify-between gap-5 container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-10'>
        <fieldset className='fieldsetForm mt-6'>
                    <legend className='text-3xl text-center mt-5 '>Sou Formador</legend>
                    <form className='flex flex-col p-7 gap-4'>
                        <input className='inputFormContactos'
                            type="text"
                            placeholder='Nome'
                        />
                        <input className='inputFormContactos'
                            type="email"
                            placeholder='Digite o seu email'
                        />
                        <input className='inputFormContactos'
                            type="text"
                            placeholder='Qual a sua á de Formação?'
                        />
                        <textarea className='textAreaFormContactos'
                        name="mensagem" 
                        id="textAreaMessage" 
                        cols="30" 
                        rows="10"
                        placeholder='Digite a sua mensagem'
                        ></textarea>
                        <div className='flex justify-end '>
                            <button className='btnFrom text-xl'>Enviar</button>
                        </div>
                    </form>
                    <section>
                </section>
                </fieldset>
    </section>
  )
}
