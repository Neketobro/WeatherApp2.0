import { get } from './httpClient';

export async function getForecastCity(signal) {
  return await get('/', signal);
}