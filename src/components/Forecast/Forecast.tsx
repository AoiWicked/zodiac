"use client";

import React, { useEffect, useMemo } from "react";
import cl from "./Forecast.module.scss";
import { generateRatings } from "@/utils/generateRatings";
import { DayForecast } from "@/components/UI/DayForecast/DayForecast";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/store";
import { setDayForecast } from "@/store/slices/forecastDaySlice";
import { useRouter, useSearchParams } from "next/navigation";
import DayStats from "../DayStats/DayStats";
import { setDaysCount, setZodiac } from "@/store/slices/forecastSlice";

export interface DayForecastProps {
    dayName: string;
    dateNum: number;
    health: number;
    relationship: number;
    career: number;
}

export const Forecast = () => {
    const { zodiac, daysCount } = useSelector(
        (state: AppState) => state.forecast
    );
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentDayName = searchParams.get("dayName");
    const currentDayNum = searchParams.get("dayNum");
    const currentZodiac = searchParams.get("zodiac");
    const currentDaysCount = searchParams.get("daysCount");

    const today = new Date();
    const dayNames = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    useEffect(() => {
        const urlZodiac = searchParams.get("zodiac");
        const urlDaysCount = searchParams.get("daysCount");

        if (urlZodiac && urlZodiac !== zodiac) {
            dispatch(setZodiac(urlZodiac));
        }
        if (urlDaysCount && Number(urlDaysCount) !== daysCount) {
            dispatch(setDaysCount(Number(urlDaysCount)));
        }
    }, []);

    const forecastDays: DayForecastProps[] = useMemo(() => {
        return Array.from({ length: daysCount }, (_, i) => {
            const dateObj = new Date();
            dateObj.setDate(today.getDate() + i);
            const dayIndex = dateObj.getDay() === 0 ? 6 : dateObj.getDay() - 1;
            const dayName = dayNames[dayIndex] || "День";
            const dateNum = dateObj.getDate();

            const dateString = dateObj.toISOString().split("T")[0];
            const { health, relationship, career } = generateRatings(
                zodiac,
                dateString
            );

            return {
                dayName,
                dateNum,
                health,
                relationship,
                career,
            };
        });
    }, [daysCount, zodiac, today, dayNames]);

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        let needUpdate = false;

        if (currentZodiac !== zodiac) {
            params.set("zodiac", zodiac);
            needUpdate = true;
        }
        if (currentDaysCount !== String(daysCount)) {
            params.set("daysCount", String(daysCount));
            needUpdate = true;
        }

        const matched = forecastDays.find(
            (day) =>
                day.dayName === currentDayName &&
                String(day.dateNum) === String(currentDayNum)
        );
        if (!matched && forecastDays.length > 0) {
            params.set("dayName", forecastDays[0].dayName);
            params.set("dayNum", String(forecastDays[0].dateNum));
            needUpdate = true;
            dispatch(setDayForecast(forecastDays[0]));
        } else if (matched) {
            dispatch(setDayForecast(matched));
        }

        if (needUpdate) {
            router.replace(`?${params.toString()}`);
        }
    }, [
        currentDayName,
        currentDayNum,
        currentZodiac,
        currentDaysCount,
        forecastDays,
        zodiac,
        daysCount,
        dispatch,
        router,
        searchParams,
    ]);

    const handleSelectDay = (dayData: DayForecastProps) => {
        dispatch(setDayForecast(dayData));
        const params = new URLSearchParams(searchParams.toString());
        params.set("dayName", dayData.dayName);
        params.set("dayNum", String(dayData.dateNum));
        params.set("zodiac", zodiac);
        params.set("daysCount", String(daysCount));
        router.push(`?${params.toString()}`);
    };

    return (
        <>
            <div className={cl.forecastWrapper}>
                {forecastDays.map((item, idx) => (
                    <div key={idx} onClick={() => handleSelectDay(item)}>
                        <DayForecast
                            active={item.dayName === currentDayName}
                            dayName={item.dayName}
                            dateNum={item.dateNum}
                            health={item.health}
                            relationship={item.relationship}
                            career={item.career}
                        />
                    </div>
                ))}
            </div>
            <DayStats />
        </>
    );
};
