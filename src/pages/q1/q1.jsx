import { useState, useEffect } from "react";
import { Button } from "../../components/button/button";
import styles from "./q1.module.css"

export function Q1() {
    const [claro, setClaro] = useState(true);

    const handleTrocaTema = () => setClaro(!claro);

    useEffect(() => {
        document.body.style.backgroundColor = claro ? "#f9f9f9" : "#242424";
    }, [claro]);

    return (
        <div className={styles.container}>
            <Button
                className={styles.button}
                type="button"
                title={claro ? "Tema Escuro" : "Tema Claro"}
                onClick={handleTrocaTema}
            />
        </div>
    );
}