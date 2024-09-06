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

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

hideTosError();
hideSuccessMessage();

tosCheckbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    hideTosError();
    return;
  }
  showTosError();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formElements = event.target.elements;
  const tosChecked = formElements.tos.checked;

  if (tosChecked) {
    hideTosError();
    event.target.reset();
    showSuccessMessage();
  } else {
    showTosError();
    hideSuccessMessage();
    return;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  // I disabled the alert, because successMessage is not shown until you click 'okay' on the warning window
  // alert("Form submitted");
});
