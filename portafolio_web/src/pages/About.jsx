import React from 'react'
import Info from '../components/about/Info'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function About() {
  return (
    <>
        <Navigation />
        <Header title="Sobre mí" subtitle={'Conoce sobre mi persona'} />
        <Info />
        <Footer />
    </>
  )
}
