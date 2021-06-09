import React from 'react';
import { Accordion } from './Accordion';
import { Flight } from './Flight';
import {useContinents} from '../hooks/useContinents';
import {useDestinations} from '../hooks/useDestinations';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Engine = () => {
  const [currContinent, setCurrContinent] = React.useState(false);
  const [countries, setCountries] = React.useState([]);

  const {continents, loadingContinents} = useContinents();
  const {destinations, getDestinations, loadingDestinations} = useDestinations();

  const [currCountry, setCurrCountry] = React.useState(false);

  React.useEffect(() => {
    if (!currContinent) {
      setCountries([]);
      return;
    }
    const value = continents.filter(
      continent => continent.id === currContinent
    )[0].countries;
    setCountries(value);
  }, [currContinent]);

  React.useEffect(() => {
    getDestinations(currCountry)
  }, [currCountry])

  return <>
    {loadingContinents && <div style={{position: 'relative', left: '50%', marginTop: '30px',  marginBottom: '30px'}}>
          <CircularProgress />
        </div>}
    <Accordion
      color="primary"
      defaultValue={currContinent}
      elements={continents}
      onChange={setCurrContinent}
    >
      <Accordion
        color="secondary"
        defaultValue={currCountry}
        elements={countries}
        onChange={setCurrCountry}
      >
        {destinations.map((flight) => <Flight name={flight.route} days={flight.days} />)}
        {loadingDestinations && <div style={{position: 'relative', left: '50%', marginTop: '30px',  marginBottom: '30px'}}>
          <CircularProgress />
        </div>}
      </Accordion>
    </Accordion>
  </>;
};
