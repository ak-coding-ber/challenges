import "./App.css";

import { useState } from "react";

export default function App() {
  const [isActive, setState] = useState(false);

  function handleClick() {
    setState(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
