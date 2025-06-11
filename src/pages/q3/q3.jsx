import { useState } from "react";
import { Button } from "../../components/button/button";
import styles from "./q3.module.css";

export function Q3() {
    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);

    const handleInputChange = (e) => setTarefa(e.target.value);

    const handleAdicionar = () => {
        if (tarefa.trim() !== "") {
            setTarefas([...tarefas, tarefa]);
            setTarefa("");
        }
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text"
                value={tarefa}
                onChange={handleInputChange}
                placeholder="Digite uma tarefa"
            />
            <Button
                type="button"
                title="Adicionar"
                onClick={handleAdicionar}
                className={styles.button}
            />
            <ul className={styles.lista}>
                {tarefas.map((t, i) => (
                    <li key={i}>{t}</li>
                ))}
            </ul>
        </div>
    );
}