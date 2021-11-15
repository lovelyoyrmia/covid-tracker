import React from 'react'
import styled from 'styled-components'

const MainStyle = styled.div`
  height: 100%;
  padding: 1rem 3rem;

  .header {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  .main__title {
    font-size: 30px;
    font-weight: bold;
  }
  p {
    font-size: 22px;
    text-align: center;
  }
  .paragraph {
    padding: 0 3rem;
    margin: 2rem 0;
  }
  .container__middle {
    width: 10%;
    height: 2px;
    position: relative;
    background-color: rgb(255, 0, 255);
    position: relative;
    left: 45%;
    right: 45%;
  }
  @media only screen and (max-width: 605px) {
    p {
      text-align: left;
      font-size: 19px;
    }
  }
`

function AboutMain() {
  return (
    <MainStyle>
      <div className='main__body'>
        <div className='header'>
          <div className='main__title'>
            ABOUT ME
          </div>
        </div>
        <div className='container__middle' />
        <div className='paragraph'>
          <p>
            Hello !!, I am Lovelyo from Indonesia. I'm a Developer, Producer and Student at Gunadarma University.
            I love programming, playing music, singing, and learning new things that i think i'm interested in.
            I started getting my Bachelor's degree in Information Technology since 2019, and passed in 2023.
            These days, technology is growing up so fast, and so many People are using technology 
            in education, learning, business and so on. One thing that you need to know, 
            Covid-19 has affected many things in this world. 
            We can't see people in person, go out with friends, and we're just in lockdown at home. 
            So, I think i just built Covid-19 Tracker Website can help many people in this world 
            to analyze Development of Covid-19 over the world. 
          </p>
        </div>
      </div>
      
    </MainStyle>
  )
}

export default AboutMain
