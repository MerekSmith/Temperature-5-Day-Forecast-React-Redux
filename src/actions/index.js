import axios from 'axios';

const API_KEY = '44f3438a5821465d8d6aff9c02355fec';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},US`
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
