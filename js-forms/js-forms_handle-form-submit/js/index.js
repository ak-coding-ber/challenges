console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formElements = e.target.elements;
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  console.log(
    `The age-badness-sum of ${data.firstName} is ${
      Number.parseInt(data.age) + Number.parseInt(data.badness)
    }.`
  );

  e.target.reset();

  formElements.firstName.focus();
});
