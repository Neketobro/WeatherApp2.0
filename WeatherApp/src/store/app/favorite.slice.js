import { createSlice } from '@reduxjs/toolkit';

const savedFavorite = JSON.parse(localStorage.getItem('favorite')) || [];

const initialState = {
  favorite: savedFavorite,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite: (state, { payload }) => {
      state.favorite = payload;
      localStorage.setItem('favorite', JSON.stringify(payload));
    },
  },
  selectors: {
    selectFavorite: (state) => state.favorite,
  },
});

export const { setFavorite } = favoriteSlice.actions;
export const { selectFavorite } = favoriteSlice.selectors;
export default favoriteSlice.reducer;
