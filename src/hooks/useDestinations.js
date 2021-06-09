import React from 'react';
import api from '../../flights.json';
import { sleep } from '../utils/sleep';

export const useDestinations = () => {
  const [destinations, setDestinations] = React.useState([]);
  const [loadingDestinations, setLoading] = React.useState(false);

  const getDestinations = code => {
    setDestinations([]);
    setLoading(true);
    sleep(1).then(() => {
      const destinations = api
        .map(continent => ({
          ...continent,
          countries: continent.countries.filter(country => {
            return country.code === code;
          })
        }))
        .filter(continent => continent.countries.length > 0);
      if (destinations.length > 0) {
        console.log(destinations[0].countries[0]);
        setDestinations(destinations[0].countries[0].destinations);
      }
      setLoading(false);
    });
  };

  return { destinations, getDestinations, loadingDestinations };
};
