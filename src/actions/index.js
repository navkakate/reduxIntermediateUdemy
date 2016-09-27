import axios from 'axios';

const API_KEY = '63a4fe5e57ad26e30afd3ce2acb31192';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; //doesn't matter what a string is

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ua`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
