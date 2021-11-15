import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { showDataOnMap } from '../../utils'
import './Maps.css'


function Maps({ countries, casesType, center, zoom }) {
  return (
    <div className='map'>
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer 
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  )
}

export default Maps
