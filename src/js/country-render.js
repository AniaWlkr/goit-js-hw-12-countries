import countryCardTpl from '../templates/country-card.hbs';
import countriesListTpl from '../templates/countriesList.hbs';
import getRefs from './get-refs';

const ref = getRefs();

export default function renderCountries(countries) {
      if (countries.status===404) { 
        throw 'Nothing was found!';
      }
      else if (countries.length > 10) {
        throw 'Too many matches found. Please enter a more specific query!';
      }
      else if (countries.length === 1) {
        renderCountry(countries[0]);
      }
      else {
        renderCountriesList(countries);
      }
}

function renderCountry(country) {
  const countryCardMarkup = countryCardTpl(country);
  ref.replyBlockRef.innerHTML = countryCardMarkup; 
}

function renderCountriesList(countries) { console.log(countries);
  const countriesListMarkup = countriesListTpl(countries);
  ref.replyBlockRef.innerHTML = countriesListMarkup;
}

