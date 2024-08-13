const numbers = [1, 2, 3, 4, 5];

function myMap(array, callBackFunction) {
  results = [];
  for (element of array) {
    results.push(double(element));
  }
  return results;
}

function double(element) {
  return element * 2;
}

myMap(numbers, double);
