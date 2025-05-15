import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './app/theme.slice.js';
import weatherReducer from './weatherAPI/weatherAPI.slice.js';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware()
  ],
});
