import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";
import Square from "./components/Square/Square.js";
import Pentagon from "./components/Pentagon/Pentagon.js";

console.clear();

const root = document.getElementById("root");

root.append(Circle(), Square(), Pentagon());
