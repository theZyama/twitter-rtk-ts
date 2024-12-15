import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StatsType} from "../../utils/types";

interface StatsPayload {
    sum: number,
    statsType: StatsType
}

const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        followers: 0,
        following: 0
    },
    reducers: {
        changeStats: {
            reducer: (state, action: PayloadAction<StatsPayload>) => {
                const res = state[action.payload.statsType] + action.payload.sum;
                state[action.payload.statsType] = res < 0 ? 0 : res;
            },
            prepare: (statsType, sum) => ({payload: {statsType, sum}})
        }
    }
})

export const {changeStats} = statsSlice.actions;
export default statsSlice.reducer;