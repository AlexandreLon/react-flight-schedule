import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const TabEngineDirection = () => {
  
  const [direction, setDirection] = React.useState('to');

  const handleChange = (event, newValue) => {
      setDirection(newValue);
  };

  return <Paper>
    <Tabs
      value={direction}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab value="to" label="Au départ de" />
      <Tab value="from" label="A l'arrivée de" />
    </Tabs>
    {direction}
</Paper>
}