import { useNavigate } from "react-router-dom";
import styles from "./home.module.css"

export function Home() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <a onClick={()=> navigate("/Q1")}>Ir para Questão 1 - Tema Claro/Escuro</a>
            <a onClick={()=> navigate("/Q2")}>Ir para Questão 2 - Mensagem de Boas-Vindas</a>
            <a onClick={()=> navigate("/Q3")}>Ir para Questão 3 - Lista de Tarefas</a>
        </div>
    );
}