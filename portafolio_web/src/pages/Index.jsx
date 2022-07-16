import React from 'react'
import Button from '../components/Button'
import CardPost from '../components/CardPost'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import VideoCard from '../components/VideoCard'

export default function Index() {
  return (
    <>
        <Navigation />
        <Header title="Hola, I'm José" subtitle="Soy desarrollador freelance y blogger ocasional" img="https://res.cloudinary.com/ddfsqcy12/image/upload/v1657726159/portafolio/josedeodanes_xshiwi.png" />
        <CardPost >
          <Button title={'Más posts'} url={'/blog'} />
        </CardPost>
        <VideoCard>
          <Button title={'Más vídeos'} url={'/videos'} />
          </VideoCard>
        <Footer />
    </>
  )
}
