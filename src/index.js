import './styles.css';
import { debounce } from "lodash";
import api from './js/api-service';
import getRefs from './js/get-refs';
import renderCountries from './js/country-render';
import onFetchError from './js/pnotify-error';

const ref = getRefs();

function querySubmit(event) { 
  const searchQuery = event.target.value.trim();
  console.log(searchQuery);
  if (!searchQuery) return;
  
  api.fetchCountry(searchQuery)
    .then(renderCountries)
    .catch(onFetchError);
}

ref.queryInpRef.addEventListener('input', debounce(querySubmit, 500));

