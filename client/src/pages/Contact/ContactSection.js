import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import ContactInfoItem from './ContactInfoItem'

const ContactSectionStyle = styled.div`
  padding: 2rem 5rem;

  .contactsection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-evenly;
    postion: relative;
  }
  .contactsection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: black;
    bottom: 30%
    transform: translate(-50%, -50%)
    border-radius: 8px;
    margin-top: 1.5rem;
  }
  .contactsection__left {
    width: 100%;
    max-width: 500px;
  }
  .contactsection__right {
    width: 100%;
    max-width: 500px;
  }
  h2 {
    text-align: center;
    font-weight: lighter;
    font-size: 18px;
  }
  h1 {
    text-align: center;
    font-size: 40px;
  }
  
  @media only screen and (max-width: 765px) {
    .contactsection__wrapper {
      flex-direction: column;
    }
    .contactsection__wrapper::after {
      display: none;
    }
    .contactsection__left,
    .contactsection__right {
      max-width: 100%
    }
  }
`

function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className='container__title'>
        <div>
          <h1>CONTACT</h1>
          <br />
          <h2>Get to know  me better</h2>
        </div>
      </div>
      <div className='container'>
        <div className='contactsection__wrapper'>
          <div className='contactsection__left'>
            <ContactInfoItem text='+6285813501033' />
            <ContactInfoItem icon='fas fa-envelope' text='mokalulovelyo@gmail.com' />
            <ContactInfoItem icon='fas fa-map-marked-alt' text='Jakarta, Indonesia' fontSize='29px' />
          </div>
          <div className='contactsection__right'>
            <ContactForm />
          </div>
        </div>
      </div> 
    </ContactSectionStyle>
  )
}

export default ContactSection
