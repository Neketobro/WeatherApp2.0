import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    status: null,
    error: null,
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
    },
    selectors: {
        selectValue: (state) => state.value,
    }
})

export  const { increment, decrement } = weatherSlice.actions;
export default weatherSlice.reducer;
export const { selectValue } = weatherSlice.selectors;