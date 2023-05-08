import React from 'react'
import './queDiferenca.css'

export default function QueDiferenca() {
  return (
    <section className='queDiferenca container'>
        <section className='queDiferencaContainer' >
            <section className='queDiferencaImg'>
                <img src="/public/images/diferenca/diferencaBanenrImg.png" alt="" />
            </section>
            <section className='queDiferencaBannerRight'>
                <article>
                    <h1>Que<span>diferenças </span>pretendemos?</h1>
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
                            <span class="material-symbols-outlined ico">school</span>
                        </div>
                        <div className='icoInfoContainer'>
                            <h2>+50</h2>
                            <h4>Formadores</h4>
                        </div>
                    </article>
                    <article className='icoContainer'>
                        <div className='icoBkg'>
                            <span class="material-symbols-outlined ico">school</span>
                        </div>
                        <div className='icoInfoContainer'>
                            <h2>+50</h2>
                            <h4>Formadores</h4>
                        </div>
                    </article>
                    <article className='icoContainer'>
                        <div className='icoBkg'>
                            <span class="material-symbols-outlined ico">school</span>
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
