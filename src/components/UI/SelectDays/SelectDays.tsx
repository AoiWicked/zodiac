"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/store";
import { setDaysCount } from "@/store/slices/forecastSlice";

function SelectDays() {
    const dispatch = useDispatch();

    const daysCount = useSelector(
        (state: AppState) => state.forecast.daysCount
    );

    const handleDaysChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newDaysCount = Number(e.target.value);
        dispatch(setDaysCount(newDaysCount));
    };

    return (
        <div>
            <label>Forecast for:</label>
            <select value={daysCount} onChange={handleDaysChange}>
                <option value={3}>3 days</option>
                <option value={7}>7 days</option>
            </select>
        </div>
    );
}

export default SelectDays;
