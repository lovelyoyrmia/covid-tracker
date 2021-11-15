import React from 'react'
import styled from 'styled-components'
import video from '../../videos/Video.mp4'
import vioImage from '../../images/vio.jpg'
import AboutHeader from './AboutHeader'
import AboutMain from './AboutMain'

const AboutStyle = styled.div`
  height: 100%;

  .about__header {
    height: 100%;
    padding: 2rem;
    display: flex;
    justify-content: space-evenly;
  }
  .about__right {
  }
  img {
    height: 290px;
    border-radius: 50px;
  }
  video {
    width: 100%;
    height: 50%;
    object-fit: cover;
    z-index: -1;
    position: absolute;
  }
  @media only screen and (max-width: 765px) {
    .about__header {
      flex-direction: column;
    }
    img {
      width: 200px;
    }
    .image__header {
      display: flex;
      justify-content: center;
    }
    video {
      height: 88%;
    }
  }
`

function AboutSection() {
  return (
    <AboutStyle>
      <video 
        autoPlay 
        muted
        loop
        src={video}
      />
      <div className='about'>
        <div className='about__header'>
          <div className='image__header'>
            <img src={vioImage} alt='vio' />
          </div>
          <div className='about__right'>
            <AboutHeader />
          </div>
        </div>
      </div>
      <AboutMain />
    </AboutStyle>
  )
}

export default AboutSection
