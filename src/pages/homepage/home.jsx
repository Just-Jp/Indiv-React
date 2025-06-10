import styles from "./home.module.css"

export function Home() {
    return (
        <div className={styles.container}>
            <a href="#">Ir para Questão 1 - Tema Claro/Escuro</a>
            <a href="#">Ir para Questão 2 - Mensagem de Boas-Vindas</a>
            <a href="#">Ir para Questão 3 - Lista de Tarefas</a>
        </div>
    );
}