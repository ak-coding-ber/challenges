import "./App.css";

export default function App() {
  return (
    <div>
      <Greeting name="Andreas" />
      <Greeting name="Jan" />
    </div>
  );
}

function Greeting({ name }) {
  const coaches = ["jan", "sven", "gimena", "klaus"];
  return (
    <h1>
      "Hello, {coaches.includes(name.toLowerCase().trim()) ? "Coach" : name}"
    </h1>
  );
}
