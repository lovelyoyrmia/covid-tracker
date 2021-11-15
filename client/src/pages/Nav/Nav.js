import React, { useState } from 'react'
import coronaImage from '../../images/image.png'
import { Link } from 'react-router-dom'
import './Nav.css'
import styled from 'styled-components'

export const MenuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About Me',
    url: '/about'
  },
  {
    title: 'Contact',
    url: '/contact'
  }
]

const MenuStyle = styled.ul`
  background: linear-gradient(to right, rgba(138, 117, 114, 0.2) 0%, rgba(112,130,110,0.5) 100% );
  left: 0;
  opacity: 1;
  transition: all 0.5s ease;
  z-index: 1; 
  height: 50%;
  padding: 2rem;
  text-align: center;
  font-size: 25px;
  .nav__item {
    margin-bottom: 2.2rem;
  }
`

function Nav() {
  const [clicked, setClicked] = useState(false)

  return (
    <div>
      <div className='nav__header'>
        <Link to='/'>
            <img className='nav__img--home' src={coronaImage} alt='COVID-19'/>
        </Link>
        <div className='menu__bars' onClick={() => setClicked(!clicked)}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} style={{
            fontSize: '30px'
          }} />
        </div>
      </div>
      <MenuStyle className={clicked ? 'menu__active' : 'menu__nav'}>
        {MenuItems.map((item) => {
          return (
            <div className='nav__item'>
              <Link to={item.url} style={{
                textDecoration: 'none',
                color: 'black',
              }}>
                {item.title} 
              </Link>
            </div>
          )
        })}
        <div className='nav__region'>Region</div>
      </MenuStyle>
    </div>
  )
}

export default Nav
