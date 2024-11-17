import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 3,
      name: "🍋 Lemon",
      color: "yellow",
    },
    {
      id: 4,
      name: "🍇 Grapes",
      color: "purple",
    },
    {
      id: 5,
      name: "🍊 Mandarine",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card name={fruit.name} color={fruit.color} key={fruit.id} />
      ))}
    </div>
  );
}
