import React, { useEffect, useState } from "react";
import axios from "axios";
import cl from "./CatFact.module.scss";

export const CatFact: React.FC = () => {
    const [fact, setFact] = useState("");

    useEffect(() => {
        axios
            .get("https://catfact.ninja/fact")
            .then((res) => setFact(res.data.fact))
            .catch(console.error);
    }, []);

    const copyLink = () => {
        navigator.clipboard
            .writeText(window.location.href)
            .then(() => alert("Ссылка скопирована!"))
            .catch(() => alert("Не удалось скопировать ссылку"));
    };

    return (
        <div className={`${cl.catFactContainer} catFactContainer`}>
            <h3>Fact about cat:</h3>
            <p>{fact}</p>
            <button onClick={copyLink} className={cl.copyButton}>
                Copy link
            </button>
        </div>
    );
};
