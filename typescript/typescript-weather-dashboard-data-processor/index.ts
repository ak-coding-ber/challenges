interface WeatherData {
  temperature: number | number[];
  humidity: number;
  windSpeed?: number;
  description?: string;
}

interface ProcessedWeatherData {
  avgTemperature: number;
  maxTemperature: number;
  minTemperature: number;
  detailedDescription: string;
  isWindy: boolean;
}

function checkIsWindy(data: WeatherData, threshold: number = 15): boolean {
  return data.windSpeed !== undefined && data.windSpeed > threshold;
}

function processWeatherData<T extends WeatherData>(
  data: T[]
): ProcessedWeatherData[] {
  console.log(Array.isArray(data[0].temperature));

  return data.map((entry) => {
    // check if data.temperature is a number or an array of numbers - make it an array if only one value exists
    const temperatures = Array.isArray(entry.temperature)
      ? entry.temperature
      : [entry.temperature];
    // round average temperature to 2 decimal places
    const avgTemperature =
      Math.round(
        (temperatures.reduce((sum, temp) => sum + temp, 0) /
          temperatures.length) *
          100
      ) / 100;
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

function filterByDescription(
  data: ProcessedWeatherData[],
  description: string
): ProcessedWeatherData[] {}

// example data
const data: WeatherData[] = [
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

console.log(processWeatherData(data));
