const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the console.

  //Depends what you consider a teen, but I considered all ages that contain a 'teen' as 'teenager'
  if (age > 12 && age <= 19) {
    console.log("You are a teen.");
  } else {
    console.log("You are not a teen.");
  }
});
