import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './app/theme.slice.js';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false })
  ],
});
