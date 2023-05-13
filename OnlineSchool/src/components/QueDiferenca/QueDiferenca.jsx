import React from 'react'
import './queDiferenca.css'

export default function QueDiferenca() {
  return (
    <section className='queDiferenca container mx-auto p-7 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
        <section className='queDiferencaContainer flex flex-col lg:flex-row items-center' >
            <section className='queDiferencaImg max-w-xs flex'>
                <img src="/public/images/diferenca/diferencaBanenrImg.png" alt="" />
            </section>
            <section className='queDiferencaBannerRight'>
                <article>
                    <h1>Que <span>diferenças </span>pretendemos?</h1>
                    <h3>
                    Queremos proporcionar uma excelente experiência de formação dando-lhe toda a assistência para que seus objectivos sejam cumpridos com sucesso.
                    </h3>
                    <h3>
                    Os seus objectivos tornam-se os nossos...
                    </h3>
                </article>
                <article className='icoContainers'>
                    <article className='icoContainer'>
                        <div className='icoBkg'>
                            <span className="material-symbols-outlined ico">school</span>
                        </div>
                        <div className='icoInfoContainer'>
                            <h2>+50</h2>
                            <h4>Formadores</h4>
                        </div>
                    </article>
                    <article className='icoContainer'>
                        <div className='icoBkg'>
                            <span className="material-symbols-outlined ico">school</span>
                        </div>
                        <div className='icoInfoContainer'>
                            <h2>+50</h2>
                            <h4>Formadores</h4>
                        </div>
                    </article>
                    <article className='icoContainer'>
                        <div className='icoBkg'>
                            <span className="material-symbols-outlined ico">school</span>
                        </div>
                        <div className='icoInfoContainer'>
                            <h2>+50</h2>
                            <h4>Formadores</h4>
                        </div>
                    </article>
                </article>
            </section>
        </section>
    </section>
  )
}
