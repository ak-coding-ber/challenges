"use strict";
function processWeatherData(data) {
    // TODO: Implement the function
}
function isWindy(data, threshold = 25) {
    // TODO: Implement the type guard
}
function filterByDescription(data, description) {
    // TODO: Implement the function
}
// example data
const data = [
    {
        temperature: 23,
        humidity: 55,
        description: "Clear skies",
    },
    {
        temperature: [18, 21, 19],
        humidity: 70,
        windSpeed: 15,
        description: "Partly cloudy with occasional sunny breaks",
    },
    {
        temperature: [28, 20, 35, 25],
        humidity: 80,
        windSpeed: 20,
        description: "Hot and humid conditions with light winds",
    },
];
