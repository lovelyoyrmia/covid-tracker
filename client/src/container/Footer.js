import React from 'react'
import { Footer, Icons }  from '../components/Footer'
import { Link } from 'react-router-dom'

export const instagram = () => window.location.href = 'https://instagram.com/lovelyoyrmia'

export const github = () => window.location.href = 'https://github.com/lovelyoyrmia'

export const facebook = () => window.location.href = 'https://www.facebook.com/lovelyo.mokalu'


export function FooterContainer() {
  
  const navStyle = {
    color: 'black',
    textDecoration: 'none',
  }

  

  return (
      <Footer>
        <Footer.Wrapper>
          <Footer.Row>
            <Footer.Column>
              <Footer.Title>About</Footer.Title>
              <br />
              <Link style={navStyle} to='/about'>
                <Footer.Link>About Me</Footer.Link>
              </Link>
              <Link style={navStyle} to='/contact'>
                <Footer.Link>Contact</Footer.Link>
              </Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>By Region</Footer.Title>
              <br />
              <Link style={navStyle} to='/'>
                <Footer.Link>All Regions</Footer.Link>
              </Link>
              <Footer.Link>Select Region</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Social</Footer.Title>
              <br />
              <Link style={navStyle} onClick={instagram}>
                <Footer.Link>
                  <Icons className='fab fa-instagram' />Instagram
                </Footer.Link>
              </Link>
              <Link style={navStyle} onClick={github}>
                <Footer.Link>
                  <Icons className='fab fa-github' />GitHub
                </Footer.Link>
              </Link>
              <Link style={navStyle} onClick={facebook}>
                <Footer.Link>
                  <Icons className='fab fa-facebook' />Facebook
                </Footer.Link>
              </Link>
            </Footer.Column>
          </Footer.Row>
        </Footer.Wrapper>
      </Footer>
  )
}
