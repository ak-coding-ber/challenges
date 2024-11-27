import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  function handleClickPrevious() {
    if (offset === 0) {
      alert("You are already on the first page.You cannot go back further.");
    } else {
      setOffset(offset - 20);
    }
  }

  function handleClickNext() {
    if (offset === 1300) {
      alert("You are already on the last page.You cannot go on further.");
    } else {
      setOffset(offset + 20);
    }
  }

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
        console.log(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  return (
    <main>
      <button type="button" className="button" onClick={handleClickPrevious}>
        Previous Page
      </button>
      <button type="button" className="button" onClick={handleClickNext}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
