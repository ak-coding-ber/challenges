import { getRandomColor } from "../../utils/randomColor.js";

export default () => {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor();
  });
  return square;
};
