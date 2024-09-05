//example data
const city1 = { name: "Stockholm", country: "Sweden" };
const city2 = { name: "Madrid", country: "Spain" };

function getNameAndCountry(city) {
  return [city.name, city.country];
}

function getRelocatedCity(city1, city2) {
  if (city2 === undefined) {
    city2 = { name: "Berlin", country: "Germany" };
  }

  const country = getNameAndCountry(city2)[1];

  return { name: city1.name, country: country };
}

//example function call - creates same result as original function
const result = getRelocatedCity(city1, city2);
console.log(result);
