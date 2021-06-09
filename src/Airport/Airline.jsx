import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const labelDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

const Day = ({children, color}) => {
  return <span style={{display: 'inline-block', height: '20px', width: '20px', textAlign: 'center', fontFamily: 'Verdana', borderRadius: '5px', color: 'white', background: color === 'primary' ? '#0780c9' : '#ccc', margin: '2px'}}>{children}</span>
}

export const Airline = ({name, days}) => {
  return <div style={{padding: "10px", background: "white"}}><Grid container spacing={3}>
        <Grid item xs>
          <img width="100px" height="30px" src={`https://engines.airiane.com/public/images/airlines/Easyjet.svg`} alt={name} />
        </Grid>
        <Grid item xs={5}>
          {labelDays.map((day, index) => <Day color={days.includes(index+1) ? 'primary' : 'secondary'}>{day}</Day>)}
        </Grid>
    </Grid></div>;
};
