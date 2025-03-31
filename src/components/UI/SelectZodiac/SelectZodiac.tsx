import React from "react";
import styles from "./SelectZodiac.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/store";
import { setZodiac } from "@/store/slices/forecastSlice";

const ZODIAC_SIGNS = [
    { label: "Овен", value: "aries" },
    { label: "Телец", value: "taurus" },
    { label: "Близнецы", value: "gemini" },
    { label: "Рак", value: "cancer" },
    { label: "Лев", value: "leo" },
    { label: "Дева", value: "virgo" },
    { label: "Весы", value: "libra" },
    { label: "Скорпион", value: "scorpio" },
    { label: "Стрелец", value: "sagittarius" },
    { label: "Козерог", value: "capricorn" },
    { label: "Водолей", value: "aquarius" },
    { label: "Рыбы", value: "pisces" },
];

export const SelectZodiac = () => {
    const dispatch = useDispatch();
    const zodiac = useSelector((state: AppState) => state.forecast.zodiac);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setZodiac(e.target.value));
    };

    return (
        <div className={styles.container}>
            <label htmlFor="zodiac-select">Select Zodiac:</label>
            <select id="zodiac-select" value={zodiac} onChange={handleChange}>
                {ZODIAC_SIGNS.map((sign) => (
                    <option key={sign.value} value={sign.value}>
                        {sign.value}
                    </option>
                ))}
            </select>
        </div>
    );
};
