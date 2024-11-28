import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [data, setData] = useState({});
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");
  const [page, setPage] = useState(1);
  const previousButtons = document.querySelectorAll(".button__previous");
  const nextButtons = document.querySelectorAll(".button__next");

  function handleClickPrevious() {
    // fixes problem that on last page the limit gets changed to 2 in the previous link
    setUrl(data.previous.replace(/limit=\d+/, "limit=20"));
    setPage(page - 1);
  }

  function handleClickNext() {
    // fixes problem that on second-last page the limit gets changed to 2 in the next link
    setUrl(data.next.replace(/limit=\d+/, "limit=20"));
    setPage(page + 1);
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

  if (!Object.entries(data).length) {
    return <div>Loading</div>;
  }

  if (previousButtons && nextButtons && data) {
    if (!data.previous) {
      // case, when user reached the first page
      previousButtons.forEach((button) =>
        button.classList.add("button--disabled")
      );
    } else if (!data.next) {
      // case, when user reached the last page
      nextButtons.forEach((button) => button.classList.add("button--disabled"));
    } else {
      previousButtons.forEach((button) =>
        button.classList.remove("button--disabled")
      );
      nextButtons.forEach((button) =>
        button.classList.remove("button--disabled")
      );
    }
  }

  return (
    <main>
      <div className="page-navigation">
        <button
          type="button"
          className="button button__previous button--disabled"
          onClick={handleClickPrevious}
        >
          Previous
        </button>
        <div className="page-info">{page}</div>
        <button
          type="button"
          className="button button__next"
          onClick={handleClickNext}
        >
          Next
        </button>
      </div>
      <ul className="pokemon-list">
        {data.results.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
      <div className="page-navigation">
        <button
          type="button"
          className="button button__previous button--disabled"
          onClick={handleClickPrevious}
        >
          Previous
        </button>
        <div className="page-info">{page}</div>
        <button
          type="button"
          className="button button__next"
          onClick={handleClickNext}
        >
          Next
        </button>
      </div>
    </main>
  );
}
