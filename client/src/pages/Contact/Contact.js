import React, { useEffect } from 'react'
import { FooterContainer } from '../../container/Footer'
import Nav from '../Nav/Nav'
import ContactMap from './ContactMap'
import ContactSection from './ContactSection'
import './Contact.css'

function Contact() {

  useEffect(() => {
    document.title = 'Let\'s get in touch'
  },[])

  return (
    <div>
      <Nav />
      <div className='contact__body'>
        <ContactSection />
        <ContactMap />
      </div>
      <FooterContainer />
    </div>
    
  )
}

export default Contact
