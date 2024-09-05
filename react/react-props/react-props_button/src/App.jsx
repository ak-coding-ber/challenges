import "./App.css";

export default function App() {
  function handleClick(color) {
    alert(`You clicked the button with the color ${color}.`);
  }
  return (
    <>
      <Button color="blue" disabled={false} text="blau" onClick={handleClick} />
      <Button
        color="green"
        disabled={false}
        text="grün"
        onClick={handleClick}
      />
      <Button
        color="hotpink"
        disabled={false}
        text="hotpink"
        onClick={handleClick}
      />
    </>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      // Necessary to use arrow function to pass the color parameter to onClick function which displays the alert message
      onClick={() => onClick(color)}
    >
      {text}
    </button>
  );
}
