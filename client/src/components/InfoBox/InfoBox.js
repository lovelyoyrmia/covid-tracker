import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './InfoBox.css'

function InfoBox({ isRed, active, title, cases, total, ...props }) {
  return (
    <div className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}>
      <Card onClick={props.onClick}>
        <CardContent>
          <Typography align='left' color='textSecondary'>
            {title}
          </Typography>
          <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`} >{cases}</h2>
          <Typography  
            className='infoBox__total' 
            color='textSecondary'
          >
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default InfoBox
