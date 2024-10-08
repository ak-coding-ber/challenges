import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  const foundCountries = countries.filter((foundCountry) =>
    foundCountry.name.startsWith(searchString)
  );

  foundCountries.forEach((foundCountry) => {
    if (foundCountry) {
      const countryElement = Country(foundCountry);
      container.append(countryElement);
    }
  });
});
