const APIkey = import.meta.env.VITE_BASE_API_KEY;
const baseURL_Currently = import.meta.env.VITE_BASE_URL_API;
const baseURL_Hourly = import.meta.env.VITE_BASE_URL_API_HOURLY;

export async function fetchCurrentWeather(payload) {
  try {
    const response = await fetch(`${baseURL_Currently}?units=metric&cnt=70&q=${payload}&appid=${APIkey}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.warn('error message', error);
  }
}

export async function fetchHourlytWeather(payload) {
  try {
    const response = await fetch(`${baseURL_Hourly}?units=metric&q=${payload}&appid=${APIkey}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.warn('error message', error);
  }
}