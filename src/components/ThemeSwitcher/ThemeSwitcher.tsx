"use client";

import React, { useEffect, useState } from "react";
import cl from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher: React.FC = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("app-theme");
        if (savedTheme === "dark") {
            setTheme("dark");
            document.body.classList.add("dark-theme");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("app-theme", newTheme);
    };

    return (
        <button className={` button--theme ${cl.button}`} onClick={toggleTheme}>
            {theme === "light" ? "Темная тема" : "Светлая тема"}
        </button>
    );
};
