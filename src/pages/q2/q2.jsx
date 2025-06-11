import { useState } from "react";
import { Button } from "../../components/button/button";
import styles from "./q2.module.css"

export function Q2() {
    const [message, setMessage] = useState("Olá!");

    const handleMessage = () => setMessage("Bem-vindo!");

    return (
        <div className={styles.container}>
            <p>{message}</p>
            <Button type="button" title="Entrar" onClick={handleMessage} />
        </div>
    );
}