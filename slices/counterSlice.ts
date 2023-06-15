import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
    }
})

export const { increment, decrement } = counterSlice.actions

export const selectValue = (state: RootState) => state.counter.value

export default counterSlice.reducer