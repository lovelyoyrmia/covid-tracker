import React from 'react'
import styled from 'styled-components'

const ItemStyle = styled.div`
  padding: 1.2rem;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`

function ContactInfoItem({
  icon= 'fas fa-phone',
  text= 'This is an Info',
  fontSize= '30px'
}) {
  return (
    <ItemStyle>
      <div className='contactitem__icon'>
        <i className={icon} style={{
          fontSize: `${fontSize}`,
          backgroundColor: 'rgb(201, 228, 228)',
          padding: '1rem',
          alignItems: 'center',
          borderRadius: '50%',
          justifyContent: 'center',
        }}/>
      </div>
      <div className='contactitem__info'>{text}</div>
    </ItemStyle>
  )
}

export default ContactInfoItem
