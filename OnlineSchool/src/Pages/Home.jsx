import React from 'react'
import Banner from '../components/Banner/Banner'
import Partners from '../components/Partners/Partners'
import MaisPopularesCards from '../components/MaisPopularesCards/MaisPopularesCards'
import QueDiferenca from '../components/QueDiferenca/QueDiferenca'
import Testemunhos from '../components/Testemunhos/Testemunhos'
import JunteColLab from '../components/JunteColLab/JunteColLab'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <section>
        <Banner />
        <Partners />
        <MaisPopularesCards />
        <QueDiferenca />
        <Testemunhos />
        <JunteColLab />
        <Footer/>
    </section>
  )
}
