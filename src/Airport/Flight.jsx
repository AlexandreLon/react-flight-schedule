import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {Airlines} from './Airlines'

const labelDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

const Day = ({children, color}) => {
  return <span style={{display: 'inline-block', height: '20px', width: '20px', textAlign: 'center', fontFamily: 'Verdana', borderRadius: '5px', color: 'white', background: color === 'primary' ? '#0780c9' : '#ccc', margin: '2px'}}>{children}</span>
}

export const Flight = ({name, days}) => {

  const [airlines, setAirlines] = React.useState(false)

  const toggleAirline = () => {
    setAirlines(e => !e)
  }

  return <div style={{padding: "10px", background: "#EAEAEA"}}><Grid container spacing={3}>
        <Grid item xs>
          {name}
        </Grid>
        <Grid item xs={5}>
          {labelDays.map((day, index) => <Day color={days.includes(index+1) ? 'primary' : 'secondary'}>{day}</Day>)}
        </Grid>
        <Grid item xs={1}>
          <div style={{cursor: 'pointer'}}>
            {!airlines && <AddCircleIcon onClick={toggleAirline} />}
            {airlines && <RemoveCircleIcon onClick={toggleAirline} />}
          </div>
        </Grid>
        <Grid item xs={2}>
          - vols/sem
        </Grid>
    </Grid>
    <Airlines show={airlines} days={days} /></div>;
};
