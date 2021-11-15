import React from 'react'
import numeral from 'numeral'
import './utils.css'
import { Circle, Popup } from 'react-leaflet'

const casesTypeColors = {
  cases: {
    hex: '#cc1034',
    multiplier: 200
  },
  recovered: {
    hex: '#7FFF00',
    multiplier: 200
  },
  deaths: {
    hex: '#FFA500',
    multiplier: 1500
  }
}

export const sortData = (data) => {
  const sortedData = [...data]

  return sortedData.sort((a,b) => (a.cases > b.cases ? -1 : 1))
}

export const prettyPrintStat = (stat) => 
  stat ? `+${numeral(stat).format('0.0a')}` : '+0'

// draw circles
export const showDataOnMap = (data, casesType) => (
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className='info-container'>
          <div 
            className='info-flag' 
            style={{ backgroundImage: `url(${country.countryInfo.flag})`}} 
          />
          <br />
          <div className='info-name'>{country.country}</div>
          <div className='info-cases'>Cases: {numeral(country.cases).format('0,0')}</div>
          <div className='info-recovered'>Recovered: {numeral(country.recovered).format('0,0')}</div>
          <div className='info-deaths'>Deaths: {numeral(country.deaths).format('0,0')}</div>
        </div>
      </Popup>
    </Circle>
  ))
)