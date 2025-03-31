import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "@/store";
import cl from "./DayStats.module.scss";
import { CatFact } from "../UI/CatFact/CatFact";

function DayStats() {
    const defaultText = {
        health: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, omnis.",
        relationship:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos quasi consequatur praesentium eius sit!",
        career: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum.",
    };

    const day = useSelector((state: AppState) => {
        const day = {
            dayName: state.DayForecast.dayName,
            dateNum: state.DayForecast.dateNum,
            health: state.DayForecast.health,
            relationship: state.DayForecast.relationship,
            career: state.DayForecast.career,
        };

        return day;
    });

    const maxVal = Math.max(day.health, day.relationship, day.career);

    const bestIndicator = (() => {
        if (day.health === maxVal) return "health";
        if (day.relationship === maxVal) return "relationship";
        if (day.career === maxVal) return "career";
        return "";
    })();

    return (
        <div className={cl.day}>
            <div className={cl.hexWrapper}>
                <svg
                    className={cl.hexIcon}
                    viewBox="0 0 100 86.6"
                    fill="#ffd700"
                >
                    <polygon points="50,0 100,25 100,61.6 50,86.6 0,61.6 0,25" />
                </svg>
                <span className={cl.hexText}>{bestIndicator}</span>
            </div>
            <div className={cl.day__right}>
                <div className={cl.day__item}>
                    <div className={cl.day__icon}>
                        <span role="img" aria-label="health">
                            ❤️
                        </span>
                        <span>Health:</span>
                    </div>
                    <div className={cl.day__number}>
                        <p>{day.health}</p>
                    </div>
                    <p className={cl.day__text}>{defaultText.health}</p>
                </div>
                <div className={cl.day__item}>
                    <div className={cl.day__icon}>
                        <span role="img" aria-label="relationship">
                            {"\u{1F9E1}"}
                        </span>
                        <span>Relationship:</span>
                    </div>
                    <div className={cl.day__number}>
                        <p>{day.relationship}</p>
                    </div>
                    <p className={cl.day__text}>{defaultText.relationship}</p>
                </div>
                <div className={cl.day__item}>
                    <div className={cl.day__icon}>
                        <span role="img" aria-label="career">
                            {"\u{1F4BC}"}
                        </span>
                        <span>Career:</span>
                    </div>
                    <div className={cl.day__number}>
                        <p>{day.career}</p>
                    </div>
                    <p className={cl.day__text}>{defaultText.career}</p>
                </div>
                <CatFact />
            </div>
        </div>
    );
}

export default DayStats;
