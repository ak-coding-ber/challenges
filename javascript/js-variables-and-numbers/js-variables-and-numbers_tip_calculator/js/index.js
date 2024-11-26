// I used const everywhere, but I am aware that one should
//use "let" keyword if for example users can type in mealCost etc. themselves
const mealCost = 12;
const percentageTip = 0.1;
const tipAmount = mealCost * percentageTip;
const totalCost = mealCost + tipAmount;

console.log(
  "The total cost of your bill is: ",
  totalCost,
  " Euros",
  mealCost + tipAmount,
  "€"
);
