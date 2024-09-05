import "./App.css";

function Smiley({ isHappy }) {
  return <h1>{isHappy ? "😁" : "😒"}</h1>;
}

export default function App() {
  return (
    <>
      <Smiley />
      <Smiley isHappy={false} />
      <Smiley isHappy={true} />
    </>
  );
}
