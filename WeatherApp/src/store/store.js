import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './app/theme.slice.js';
import weatherReducer from './weatherAPI/weatherAPI.slice.js';
import collapsingStateReducer from './app/collapsingState.slice.js';
import favoriteReducer from './app/favorite.slice.js';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    weather: weatherReducer,
    collapsingState: collapsingStateReducer,
    favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware()
  ],
});
