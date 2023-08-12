import {
  BaseUrlParams,
  ForecastItem,
  GeocodeApiResponse,
  Hourly,
  HourlyData,
  WeatherApiResponse,
} from "./types";

export const WEATHER_API_BASE_URL = (params: BaseUrlParams) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&hourly=${params.hourly}&current_weather=true&temperature_unit=${params.temperature_unit}`;

export async function getForecast(query: string): Promise<Array<ForecastItem>> {
  const weatherData = await getWeatherData(query);
  const hourlyData: HourlyData = weatherData?.hourly?.time.map(
    (time, index) => ({
      time,
      temperature: weatherData?.hourly?.temperature_2m[index],
    })
  );
  return createForecast(hourlyData);
}

function createForecast(hourlyData: HourlyData): ForecastItem[] {
  const daysForecast: Array<ForecastItem> = [];
  for (let i = 0; i < hourlyData?.length; i += 24) {
    const hourlyTemperatures = hourlyData.slice(i, i + 24);
    const min = Math.min(...hourlyTemperatures.map((t) => t.temperature));
    const max = Math.max(...hourlyTemperatures.map((t) => t.temperature));
    daysForecast.push({
      data: hourlyData[i],
      temperatures: hourlyData.slice(i, i + 24),
      lo: min,
      high: max,
    });
  }
  return daysForecast;
}

async function fetchJsonData(path: string): Promise<any> {
  return fetch(path).then((res) => res.json());
}

async function getGeocodeData(query: string): Promise<GeocodeApiResponse> {
  return await fetchJsonData(
    `https://geocode.search.hereapi.com/v1/geocode?q=${query}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`
  );
}

async function getWeatherData(query: string): Promise<WeatherApiResponse> {
  const geoData = await getGeocodeData(query);
  const { position } = geoData.items[0];
  return await fetchJsonData(
    WEATHER_API_BASE_URL({
      latitude: position.lat,
      longitude: position.lng,
      hourly: Hourly.temperature_2m,
      temperature_unit: "fahrenheit",
    })
  );
}
