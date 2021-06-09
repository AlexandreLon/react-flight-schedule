import React from 'react'
import {Accordion} from './components/Accordion'
import {DestinationList} from './components/DestinationList'
import Container from '@material-ui/core/Container';
import flightIcon from '../../assets/flight.svg'

export const Result = ({countries = []}) => {
  return <>
    <div style={{width: "100%", maxWidth: "500px"}}>
      {countries.map(country => (
        <Accordion key={country.name} header={country.name}>
          {country.destinations.map(destination => (
            <div key={destination.name}>
              <div style={{display: 'flex', justifyContent: 'space-evenly', width: '40%'}}>
                <img src={flightIcon} />
                <span>{destination.name}</span>
              </div>
              <DestinationList airlines={destination.airlines} />
            </div>
          ))}
        </Accordion>
      ))}
    </div>
  </>
}