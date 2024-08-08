console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();
successMessage.style.display = "none";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formElements = event.target.elements;
  const tosChecked = formElements.tos.checked;

  if (tosChecked) {
    hideTosError();
    successMessage.style.display = "block";
    event.target.reset();
  } else {
    showTosError();
    successMessage.style.display = "none";
    return;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  // I disabled the alert, because successMessage is not shown until you click 'okay' on the warning window
  // alert("Form submitted");
});
