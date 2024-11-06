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

function processWeatherData<T extends WeatherData>(
  data: T[]
): ProcessedWeatherData[] {
  // TODO: Implement the function
}

function isWindy(data: WeatherData, threshold: number = 25): boolean {
  // TODO: Implement the type guard
}

function filterByDescription(
  data: ProcessedWeatherData[],
  description: string
): ProcessedWeatherData[] {
  // TODO: Implement the function
}

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
