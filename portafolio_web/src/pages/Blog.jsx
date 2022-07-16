import React from 'react'
import CardPost from '../components/CardPost'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function Blog() {
  return (
    <>
        <Navigation />
        <Header title={'Blog'} subtitle={'Escribo tutoriales sobre desarrollo web y servidores Linux'} />
        <CardPost />
    </>
  )
}
