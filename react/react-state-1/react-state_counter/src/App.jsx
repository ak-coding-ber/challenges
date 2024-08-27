import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            console.log("🤔");
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("🤔");
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
