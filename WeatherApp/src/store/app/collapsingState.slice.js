import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collapsingState: false,
};

const collapsingStateSlice = createSlice({
    name: 'collapsingState',
    initialState,
    reducers: {
        setCollapsingState: (state, { payload }) => {
            state.collapsingState = payload !== undefined ? payload : !state.collapsingState;
        },
    },
    selectors: {
        selectcCollapsingState: (state) => state.collapsingState,
    },
});

export const { setCollapsingState } = collapsingStateSlice.actions;
export const { selectcCollapsingState } = collapsingStateSlice.selectors;
export default collapsingStateSlice.reducer;