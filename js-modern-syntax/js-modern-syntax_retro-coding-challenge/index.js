let getNameAndCountry = ({ name, country }) => [name, country];

let getRelocatedCity = (
  city1,
  city2 = { name: "Berlin", country: "Germany" }
) => {
  let [, country] = getNameAndCountry(city2);
  return {
    ...city1,
    country,
  };
};
