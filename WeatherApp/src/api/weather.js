import { get } from './httpClient';

const APIkey = import.meta.env.VITE_BASE_API_KEY;

export async function getForecastCity(payload, signal) {
  // console.log('payload -> ', payload);
  // console.log('signal -> ', signal);

  return await get(`?units=metric&q=dnipro&appid=${APIkey}`, signal);
  // return await get(`?q=${city}&appid=${APIkey}`, signal);
}