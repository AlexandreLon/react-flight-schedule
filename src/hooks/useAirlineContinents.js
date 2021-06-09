import React from 'react';
import api from '../../continents.json';
import { sleep } from '../utils/sleep';

export const useContinents = () => {
  const [continents, setContinents] = React.useState();
  const [loadingContinents, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    sleep(1).then(() => {
      const continents = api.map(continent => {
        return {
          code: continent.code,
          text: continent.name,
          children: continent.countries.map(country => {
            return {
              code: country.code,
              text: country.name,
              children: country.cities.map(city => {
                return {
                  code: city.code,
                  text: city.name
                };
              })
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
