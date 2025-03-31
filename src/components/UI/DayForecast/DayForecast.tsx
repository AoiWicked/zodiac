import React from "react";
import cl from "./DayForecast.module.scss";

interface DayForecastProps {
    dayName: string;
    dateNum: number;
    health: number;
    relationship: number;
    career: number;
    active: boolean;
}

export const DayForecast: React.FC<DayForecastProps> = ({
    dayName,
    dateNum,
    health,
    relationship,
    career,
    active = false,
}) => {
    return (
        <div
            className={
                active
                    ? `${cl.dayCard} dayCard`
                    : `${cl.dayCard} dayCard active--card`
            }
        >
            <div className={cl.dayCard__dayHeader}>
                <span className={cl.dayCard__dayName}>{dayName}</span>
                <span className={cl.dayCard__dateNum}>{dateNum}</span>
            </div>

            <div className={cl.dayCard__iconsRow}>
                <div className={cl.dayCard__iconItem}>
                    <span role="img" aria-label="health">
                        ❤️
                    </span>
                    <div>{health}</div>
                </div>
                <div className={cl.dayCard__iconItem}>
                    <span role="img" aria-label="relationship">
                        {"\u{1F9E1}"}
                    </span>
                    <div>{relationship}</div>
                </div>
                <div className={cl.dayCard__iconItem}>
                    <span role="img" aria-label="career">
                        {"\u{1F4BC}"}
                    </span>
                    <div>{career}</div>
                </div>
            </div>
        </div>
    );
};
