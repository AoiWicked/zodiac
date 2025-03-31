import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ForecastState {
    daysCount: number;
    zodiac: string;
}

const initialState: ForecastState = {
    daysCount: 3,
    zodiac: "aries",
};

const forecastSlice = createSlice({
    name: "forecast",
    initialState,
    reducers: {
        setZodiac(state, action: PayloadAction<string>) {
            state.zodiac = action.payload;
        },
        setDaysCount(state, action: PayloadAction<number>) {
            state.daysCount = action.payload;
        },
    },
});

export const { setDaysCount, setZodiac } = forecastSlice.actions;
export default forecastSlice.reducer;
