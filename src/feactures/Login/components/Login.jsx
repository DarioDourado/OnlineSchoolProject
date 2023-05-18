import React from 'react'
import './login.css'

export default function Login() {
    return (
        <section className='container mx-auto flex p-7 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl '>
            <section className=' mx-auto flex flex-col lg:flex-row gap-7'>
                <div className='loginIMG flex justify-center md:visible'>
                    <h1 className='text-center text-4xl mt-5'>Aprender nunca foi tão fácil</h1>
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col h-full justify-evenly'>
                        <h3 className='text-3xl text-center p-7'>Bemvindo á CoolLab</h3>
                        <div className='btnLogin'>
                            <button className='btnLog'>Login</button>
                            <button className='btnLog'>Register</button>
                        </div>
                        <h3>Faz o teu login para teres acesso á tua conta CoolLab</h3>
                    </div>
                    <form className='flex flex-col gap-3 loginForm gap-5'
                        action="">
                        <label htmlFor="">User name</label>
                        <input
                            type="text"
                            placeholder='Digite o seu User name'
                        />
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            placeholder='Digite a sua password'
                        />
                    </form>
                    <div>
                        <button className='btnLogin2'>Login</button>
                    </div>
                </div>

            </section>

        </section>
    )
}
