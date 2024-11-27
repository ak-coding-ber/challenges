import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [data, setData] = useState({});
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");

  function handleClickPrevious() {
    if (!data.previous) {
      alert("You are already on the first page. You cannot go back further.");
    } else {
      // fixes problem that on last page the limit gets changed to 2 in the previous link
      setUrl(data.previous.replace(/limit=\d+/, "limit=20"));
    }
  }

  function handleClickNext() {
    if (!data.next) {
      alert("You are already on the last page. You cannot go on further.");
    } else {
      // fixes problem that on second-last page the limit gets changed to 2 in the next link
      setUrl(data.next.replace(/limit=\d+/, "limit=20"));
    }
  }

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);

  if (Object.entries(data).length) {
    console.log(data);
    console.log(data.results);
  }

  if (!Object.entries(data).length) {
    return <div>Loading</div>;
  }

  return (
    <main>
      <button type="button" className="button" onClick={handleClickPrevious}>
        Previous Page
      </button>
      <button type="button" className="button" onClick={handleClickNext}>
        Next Page
      </button>
      <ul>
        {data.results.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
