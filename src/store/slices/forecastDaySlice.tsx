import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DayForecastState {
    dayName: string;
    dateNum: number;
    health: number;
    relationship: number;
    career: number;
}

const initialState: DayForecastState = {
    dayName: "",
    dateNum: 0,
    health: 0,
    relationship: 0,
    career: 0,
};

const dayForecastSlice = createSlice({
    name: "dayForecast",
    initialState,
    reducers: {
        setDayForecast(state, action: PayloadAction<DayForecastState>) {
            return action.payload;
        },
    },
});

export const { setDayForecast } = dayForecastSlice.actions;
export default dayForecastSlice.reducer;
