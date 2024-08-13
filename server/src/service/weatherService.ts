import dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";

//api.openweathermap.org/data/3.0/onecall?lat=0&lon=0&exclude=minutely,hourly,alerts&appid=bc97ed4b63e1414a18515471fcf826c9
//api.openweathermap.org/data/3.0/onecall?q=Paris&exclude=minutely,hourly,alerts&appid=bc97ed4b63e1414a18515471fcf826c9

// https://api.openweathermap.org/geo/1.0/direct?q=Paris&appid=bc97ed4b63e1414a18515471fcf826c9

export async function getWeatherForCity(city: string) {
  const cityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=bc97ed4b63e1414a18515471fcf826c9`;
  const cityResponse = await fetch(cityUrl);
  const cityData: any = await cityResponse.json();
  const firstCity = cityData[0];
  console.log(firstCity);
  const lat = firstCity.lat;
  const lon = firstCity.lon;
  console.log(lat, lon);

  const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=bc97ed4b63e1414a18515471fcf826c9`;
  const weatherResponse = await fetch(weatherUrl);
  const weatherData = await weatherResponse.json();

  return weatherData;
}

// TODO: Define an interface for the Coordinates object

// TODO: Define a class for the Weather object

// TODO: Complete the WeatherService class
// class WeatherService {
//   // TODO: Define the baseURL, API key, and city name properties
//   // TODO: Create fetchLocationData method
//   // private async fetchLocationData(query: string) {}
//   // TODO: Create destructureLocationData method
//   // private destructureLocationData(locationData: Coordinates): Coordinates {}
//   // TODO: Create buildGeocodeQuery method
//   // private buildGeocodeQuery(): string {}
//   // TODO: Create buildWeatherQuery method
//   // private buildWeatherQuery(coordinates: Coordinates): string {}
//   // TODO: Create fetchAndDestructureLocationData method
//   // private async fetchAndDestructureLocationData() {}
//   // TODO: Create fetchWeatherData method
//   // private async fetchWeatherData(coordinates: Coordinates) {}
//   // TODO: Build parseCurrentWeather method
//   // private parseCurrentWeather(response: any) {}
//   // TODO: Complete buildForecastArray method
//   // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
//   // TODO: Complete getWeatherForCity method
//   // async getWeatherForCity(city: string) {}
// }

// export default new WeatherService();
