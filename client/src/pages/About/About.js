import React, { useEffect } from 'react'
import { FooterContainer } from '../../container/Footer'
import AboutSection from './AboutSection'
import Nav from '../Nav/Nav'

function About() {

  useEffect(() => {
    document.title = 'About Me'
  },[])

  return (
    <div>
      <Nav />
      <div>
        <AboutSection />
      </div>
      <FooterContainer /> 
    </div>
  )
}

export default About
