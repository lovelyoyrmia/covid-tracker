import React from 'react'
import numeral from 'numeral'
import './Table.css'

function Table({ countries }) {
  return (
    <div className='table'>
      {countries.map(({ country, countryInfo, cases }) => (
        <tr>
          <div className='flags__country'>
            <img className='flags' src={countryInfo.flag} alt='flag'/>
            <td>{country}</td>
          </div>
          <td>
            <strong>{numeral(cases).format('0,00')}</strong>
          </td>
        </tr>
      ))}
    </div>
  )
}

export default Table
