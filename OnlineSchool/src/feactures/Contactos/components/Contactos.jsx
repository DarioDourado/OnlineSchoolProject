import React from 'react'
import './contactos.css'




export default function Contactos() {



    return (
        <section className='container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
            <div className='formMap flex flex-col lg:flex-row mx-auto gap-5 bg-black/50 pjustify-center roundedContainer p-7'>
                <fieldset className='fieldsetForm '>
                    <legend className='text-3xl'>Contactos</legend>
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
                            placeholder='Assunto:'
                        />
                        <textarea className='textAreaFormContactos'
                        name="" 
                        id="" 
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
                <div className='map-responsive'>
                        <iframe className='w-full h-full '
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d397.5007640407413!2d-7.8919524763037305!3d37.152554170639306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spt!4v1683981500639!5m2!1sen!2spt"
                        title='Responsive Google Map'
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <div className='contactosMorada'>
                            <h4>Rua dos Cooperativistas, 70A</h4>
                            <h4>8150-564 São Bras de Alportel</h4>
                        </div>
                </div>
                
            </div>

        </section >
    )
}
