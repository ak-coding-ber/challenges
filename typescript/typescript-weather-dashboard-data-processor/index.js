"use strict";
function processWeatherData(data) {
    return data.map((entry) => {
        // check if data.temperature is a single number or an array of numbers - make it an array if only one value exists
        const temperatures = Array.isArray(entry.temperature)
            ? entry.temperature
            : [entry.temperature];
        // sum up all temperatures and divide it by the total amount of temperature entries in the temperatures array
        // round average temperature to 2 decimal places
        const avgTemperature = Math.round((temperatures.reduce((sum, temp) => sum + temp, 0) /
            temperatures.length) *
            100) / 100;
        const maxTemperature = Math.max(...temperatures);
        const minTemperature = Math.min(...temperatures);
        const detailedDescription = entry.description || "No description available";
        const isWindy = checkIsWindy(entry);
        return {
            avgTemperature,
            maxTemperature,
            minTemperature,
            detailedDescription,
            isWindy,
        };
    });
}
function checkIsWindy(data, threshold = 15) {
    return data.windSpeed !== undefined && data.windSpeed > threshold;
}
function filterByDescription(data, description) {
    const normalizedDescription = description.trim().toLowerCase();
    return data.filter((entry) => entry.detailedDescription
        .trim()
        .toLowerCase()
        .includes(description.trim().toLowerCase()));
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
    },
];
console.log("\nOriginal weather data:\n\n", data);
/* test data processing function
- should show "No description available" for third entry
- should show isWindy:true for third entry, because windSpeed exceeds threshold of 15 (set in checkIsWindy-function)
*/
const processedData = processWeatherData(data);
console.log("\nProcessed data:\n\n", processedData);
// test filter function
console.log("\nFiltered processed data:\n\n", filterByDescription(processedData, "sunny"));
