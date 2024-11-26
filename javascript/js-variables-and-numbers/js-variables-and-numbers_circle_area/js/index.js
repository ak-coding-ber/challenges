const circleRadius = 5;
const circleArea = Math.PI * Math.pow(circleRadius, 2);
const circumference = 2 * Math.PI * circleRadius;

console.log(circleArea);
console.log(circumference);

console.log(
  "For a circle with a radius of " +
    circleRadius +
    " units:\n\n- The area is approximately " +
    Math.round(circleArea * 100) / 100 +
    " square units.\n\n- The circumference is approximately " +
    Math.round(circumference * 100) / 100 +
    " units."
);
