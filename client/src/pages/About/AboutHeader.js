import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { facebook, github, instagram } from '../../container/Footer'

const HeaderStyle = styled.div`
  text-align: center;
  margin: 5rem 0;

  .icon__style {
    display: flex;
    margin-top: 2rem;
    justify-content: space-evenly;
  }

  .title__about {
    font-size: 35px;
    font-weight: bold;
  }

  .subTitle__about {
    font-size: 25px;
    font-weight: 700;
  }
`
const StyleIcon = {
  fontSize: '35px'
}

function AboutHeader() {
  return (
    <HeaderStyle>
      <div className='title__about'>Lovelyo Yeremia Mokalu</div>
      <br />
      <div className='subTitle__about'>Student, Developer, Producer</div>
      <div className='icon__style'>
        <Link href={instagram}>
          <i className='fab fa-instagram' style={StyleIcon} />
        </Link>
        <Link href={github}>
          <i className='fab fa-github' style={StyleIcon} />
        </Link>
        <Link href={facebook}>
          <i className='fab fa-facebook' style={StyleIcon} />
        </Link>
      </div>  
    </HeaderStyle>
  )
}

export default AboutHeader
