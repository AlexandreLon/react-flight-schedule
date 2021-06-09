import React from 'react';
import api from '../../flights.json';
import { sleep } from '../utils/sleep';

export const useContinents = () => {
  const [continents, setContinents] = React.useState();
  const [loadingContinents, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    sleep(1).then(() => {
      const continents = api.map(continent => {
        return {
          id: continent.code,
          title: continent.name,
          countries: continent.countries.map(country => {
            return {
              id: country.code,
              title: country.name
            };
          })
        };
      });
      setContinents(continents);
      setLoading(false);
    });
  }, []);

  return { loadingContinents, continents };
};
