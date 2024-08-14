import { getRandomColor } from "../../utils/randomColor.js";

export default () => {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = getRandomColor();
  });
  return pentagon;
};
