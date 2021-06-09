import axios from 'axios';

export const holidays = async (long, lat) => {
  const res_addr = await axios.get(
    `https://api-adresse.data.gouv.fr/reverse/?lon=${long}&lat=${lat}&type=street`
  );
  if (!res_addr?.data?.features[0]?.properties?.citycode) {
    console.error('No information from this location');
    return null;
  }
  const res_location = await axios.get(
    'https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-adresse-et-geolocalisation-etablissements-premier-et-second-degre&q=&rows=1&facet=code_academie&facet=libelle_academie&refine.code_commune=' +
      res_addr.data.features[0].properties.citycode
  );
  if (!res_location?.data?.records[0]?.fields?.libelle_academie) {
    console.error('No information from this city');
    return null;
  }
  let academie = res_location?.data?.records[0]?.fields?.libelle_academie;
  if (
    res_location?.data?.records[0]?.fields?.libelle_academie === 'Rouen' ||
    res_location?.data?.records[0]?.fields?.libelle_academie === 'Caen'
  ) {
    academie = 'Normandie';
  }
  const res = await axios.get(
    'https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-calendrier-scolaire&q=&lang=fr&facet=description&facet=population&facet=start_date&facet=end_date&facet=location&facet=zones&facet=annee_scolaire&refine.annee_scolaire=2020-2021&refine.location=' +
      academie
  );
  return res.data.records
    .map(record => {
      return record.fields;
    })
    .sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
};

export async function holidays_str(str) {
  return await holidays(str.split(',')[1], str.split(',')[0].trim());
}
