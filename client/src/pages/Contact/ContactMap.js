import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import styled from 'styled-components'
import { iconPerson } from './Icon'

const MapStyle = styled.div`
  height: 200px;
  margin: 0rem 4rem;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);

  .leaflet-container {
    height: 100%;
  }

  .container__map {
    width: 250px;
  }
  .map__heading {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
  }
  .map__subHeading {
    font-size: 16px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
  }
`

const position = [-6.241976, 106.858621]

function ContactMap() {
  return (
    <MapStyle>
      <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer 
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={iconPerson}>
          <Popup>
            <div className='container__map'>
              <div className='map__heading'>Here is me</div>
              <div className='map__subHeading'>Cawang, Jakarta, Indonesia</div>
              <a 
                href='https://www.google.co.id/maps/place/Cawang,
                  +Kec.+Kramat+jati,+Kota+Jakarta+Timur,
                  +Daerah+Khusus+Ibukota+Jakarta/@-6.1349818,106.5230545,15z/
                  data=!4m5!3m4!1s0x2e69f3072537bb4f:0x547770388c26051b!8m2!3d-6.
                  2490679!4d106.8679899'>
                  Open in Google Maps
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </MapStyle>
  )
}

export default ContactMap
