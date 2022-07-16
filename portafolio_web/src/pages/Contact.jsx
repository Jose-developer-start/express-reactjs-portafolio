import React from 'react'
import Information from '../components/contact/Information'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function Contact() {
  return (
    <>
    <Navigation />
    <Header title="Contáctame" subtitle={'Te desarrollo tu web empresarial, portafolio o para tu negocio'} />
    <Information />
    </>
  )
}
