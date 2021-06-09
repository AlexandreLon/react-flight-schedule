import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, FormControlLabel, Grid, Switch, TextField } from "@material-ui/core";
import iataAirport from '../../assets/airports.json'

export const Departure = ({onChange = (_) => {}}) => {

  const [departure_airport, setDepartureAirport] = React.useState()

  const departureAirportChange = (_f, departure_airport) => {
    setDepartureAirport(departure_airport)
    onChange(departure_airport.iata)
  }


  return <div><Autocomplete
                    value={departure_airport}
                    onChange={departureAirportChange}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    options={iataAirport}
                    getOptionLabel={(option) => option.iata}
                    renderOption={(option) => option.name ? `${option.name} (${option.iata})` : option.iata}
                    freeSolo
                    fullWidth={true}
                    renderInput={(params) => (
                        <TextField {...params} label="Aéroport de départ" fullWidth={true} />
                    )}
                /></div>
}