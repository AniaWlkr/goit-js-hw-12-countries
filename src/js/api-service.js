const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

async function fetchCountry(countryName) {
  // return fetch(`${BASE_URL}${countryName}`)
  //   .then(res => res.json());
  const resolve = await fetch(`${BASE_URL}${countryName}`);
  return await resolve.json();
}

export default {fetchCountry};