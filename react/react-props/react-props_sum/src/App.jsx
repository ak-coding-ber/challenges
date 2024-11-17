import "./App.css";

export default function App() {
  return <Sum valueA={12} valueB={45} />;
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
}
