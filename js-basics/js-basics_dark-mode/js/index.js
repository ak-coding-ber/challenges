console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

// Define behaviour when Dark Mode button is clicked
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

darkModeButton.addEventListener("click", () => {
  console.log("Dark Mode Button was clicked.");
  bodyElement.classList.add("dark");
});

// Define behaviour when Light Mode button is clicked

const lightModeButton = document.querySelector('[data-js="light-mode-button"]');

lightModeButton.addEventListener("click", () => {
  console.log("Light Mode Button was clicked.");
  bodyElement.classList.remove("dark");
});

// Define behaviour when Toggle Button is clicked

const toggleButton = document.querySelector('[data-js="toggle-button"]');

toggleButton.addEventListener("click", () => {
  console.log("Toggle Button was clicked.");
  bodyElement.classList.toggle("dark");
});
