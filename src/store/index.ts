import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import forecastReducer from "./slices/forecastSlice";
import dayForecastReducer from "./slices/forecastDaySlice";

export const makeStore = () =>
    configureStore({
        reducer: {
            forecast: forecastReducer,
            DayForecast: dayForecastReducer,
        },
    });

export const store = makeStore();

export const wrapper = createWrapper(makeStore);

export type AppState = ReturnType<typeof store.getState>;
