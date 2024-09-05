console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const numberA = Number.parseInt(data.numberA);
  const numberB = Number.parseInt(data.numberB);

  if (data.operator === "addition") {
    result = add(numberA, numberB);
  } else if (data.operator === "subtraction") {
    result = subtract(numberA, numberB);
  } else if (data.operator === "multiplication") {
    result = multiply(numberA, numberB);
  } else {
    result = divide(numberA, numberB);
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
