console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people");
    if (response.ok) {
      const data = await response.json();

      console.log(data);

      console.log("Teached Anakin & Luke Skywalker:", data.results[9].name);

      console.log("Eye color of R2-D2:", data.results[2].eye_color);
    } else {
      console.log("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred", error);
  }
}

fetchData();
