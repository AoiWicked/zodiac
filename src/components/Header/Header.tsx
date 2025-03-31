import React from "react";
import cl from "./Header.module.scss";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";

export const Header: React.FC = () => {
    return (
        <header className={cl.header}>
            <div className={cl.header__container}>
                <div className={cl.header__logo}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="gold">
                        <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.73 5.82 22 
                   7 14.14 2 9.27l6.91-1.01L12 2z"
                        />
                    </svg>
                    <span className={cl.header__title}>My Horoscope</span>
                </div>

                <ThemeSwitcher />
            </div>
        </header>
    );
};
