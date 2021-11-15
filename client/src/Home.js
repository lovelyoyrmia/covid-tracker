import React, {useEffect, useState} from 'react'
import { MenuItem, FormControl, Select } from '@material-ui/core'
import { InfoBox, Maps, Table, LineGraph } from './components'
import { Card, CardContent } from '@material-ui/core'
import coronaImage from './images/image.png'
import { prettyPrintStat, sortData } from './utils'
import { Link } from 'react-router-dom'
import { FooterContainer } from './container/Footer'
import { MenuItems } from './pages/Nav/Nav'
import './App.css'
import "leaflet/dist/leaflet.css";
import styled from 'styled-components'

const BarStyle = styled.div`
  background: linear-gradient(to right, rgba(138, 117, 114, 0.2) 0%, rgba(112,130,110,0.5) 100% );
  left: 0;
  opacity: 1;
  transition: all 0.5s ease;
  z-index: 1; 
  padding: 2rem;
  text-align: center;
  font-size: 25px;
  border-radius: 20px;
  margin-bottom: 1.5rem;
  .nav__item {
    padding: 1rem 0;
  }
`

function Home() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(['worldwide'])
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 })
  const [mapZoom, setMapZoom] = useState(3)
  const [mapCountries, setMapCountries] = useState([])
  const [casesType, setCasesType] = useState('cases')
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then((response) => response.json())
    .then((data) => {
      setCountryInfo(data)
    })
    document.title = 'Covid-Tracker'
  }, [])

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ))
        let sortedData = sortData(data)
        setTableData(sortedData)
        setMapCountries(data)
        setCountries(countries)
      })
    }
    getCountriesData()
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value
    const url = countryCode === 'worldwide' 
      ? 'https://disease.sh/v3/covid-19/all' 
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setCountry(countryCode)   
      setMapCenter([data.countryInfo.lat, data.countryInfo.long])
      setMapZoom(4)
      setCountryInfo(data)
    })
  }

  const handleClicked = () => setClicked(!clicked)

  return (
    <div>
      <div className="app">
        <div className='app_left'>
          <div className='app__header'>
            <Link to='/'>
              <img className='app__image' src={coronaImage} alt='COVID-19' />
            </Link>
            <FormControl className='app__dropdown'>
              <Select variant='outlined' onChange={onCountryChange}  value={country}>
                <MenuItem value='worldwide'>Worldwide</MenuItem>
                {countries.map((country)=>(
                  <MenuItem value={country.value}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className='menu__bars' onClick={handleClicked}>
              <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} style={{
                fontSize: '30px'
              }} />
            </div>
          </div>
          <BarStyle className={clicked ? 'menu__active' : 'menu__nav'}>
            {MenuItems.map((item) => {
              return (
                <div className='nav__item' >
                  <Link to={item.url} style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}>
                    {item.title} 
                  </Link>
                </div>
              )
            })}
          </BarStyle>
          <div className='app__stats'>
            <InfoBox 
              isRed
              active={casesType === 'cases'}
              onClick={(e) => setCasesType('cases')}
              title='Coronavirus Cases' 
              cases={prettyPrintStat(countryInfo.todayCases)} 
              total={prettyPrintStat(countryInfo.cases)} 
            />
            <InfoBox 
              active={casesType === 'recovered'}
              onClick={(e) => setCasesType('recovered')}
              title='Recovered' 
              cases={prettyPrintStat(countryInfo.todayRecovered)} 
              total={prettyPrintStat(countryInfo.recovered)} 
            />
            <InfoBox 
              isRed
              active={casesType === 'deaths'}
              onClick={(e) => setCasesType('deaths')}
              title='Deaths' 
              cases={prettyPrintStat(countryInfo.todayDeaths)} 
              total={prettyPrintStat(countryInfo.deaths)} 
            />
          </div>
          <Maps 
            casesType={casesType}
            countries={mapCountries}
            center={mapCenter}
            zoom={mapZoom}
          />
        </div>
        <Card className='app_right'>
          <CardContent >
            <div className='app__informations'>
              <h3>Live Cases by Country</h3>
              <Table countries={tableData} />
              <br />
              <h3>Worldwide News {casesType.toLocaleUpperCase()}</h3>
              <br />
              <LineGraph casesType={casesType} />
            </div>
          </CardContent>
        </Card>
      </div>
      <FooterContainer />
    </div>
    
  )
}

export default Home
