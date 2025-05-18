import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getForecastCity } from '@api';

const initialState = {
    value: {},
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
    extraReducers: (builder) => {
        builder.addCase(weatherFetch.pending, (state) => {
            state.status = "loading";
        })
        builder.addCase(weatherFetch.fulfilled, (state, { payload }) => {
            state.value = payload;
            state.status = "success";
        })
        builder.addCase(weatherFetch.rejected, (state, { payload }) => {
            state.status = "failed";
            state.error = payload;
        })

    },
    selectors: {
        selectValue: (state) => state.value,
    }
})

export const { increment, decrement } = weatherSlice.actions;
export default weatherSlice.reducer;
export const { selectValue } = weatherSlice.selectors;

export const weatherFetch = createAsyncThunk(
    'weather/weatherFetchData',
    async (payload, { signal }) => {
        try {
            const response = await getForecastCity(payload, signal);

            return response;
        } catch (e) {
            console.log(`oops, error: ${e}`);
        }
    },
);
