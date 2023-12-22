import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Bruno!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Bruno"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou aluno de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no Senac (Jessé Freire), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Java, mas sem aprofundar muito em cada uma delas. Eu gosto muito da área de programação.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, cursei Recursos Humanos mais logo após entrar no curso técnico fiz uma MBA em Ciências de Dados e Big Data Analystcs na faculdade (METROPOLITANA). Lá eu tive a oportunidade desenvolver mais um pouco os meus conhecimentos para a área de TI.
            </p>
        
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. E continuo no caminho, a procura de desenvolver meus conhecimentos no âmbito da empresa!
            </p>
        </PostModelo>
    )
}