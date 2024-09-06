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
