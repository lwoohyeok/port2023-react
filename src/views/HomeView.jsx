import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Main from '../components/Main'
import Port from '../components/Port'
import Site from '../components/Site'
import Skill from '../components/Skill'
import Skip from '../components/Skip'

const HomeView = () => {
    return (
      <div>
        <Skip />
        <Header />
        <Main>
        <Intro/>
        <Skill />
        <Site />
        <Port />
        <Contact/> 
        </Main>
        <Footer />

      </div>
  )
}

export default HomeView