import fotoPefil from '../../imagens/fotodeperfil1.png'
import styles from './Home.module.css'

function Home(){

    const scrollContato = () => {
        window.scrollTo({
            top: 2070,
            behavior: "smooth"
        })
    }

    const scrollSobre = () => {
        window.scrollTo({
            top: 530,
            behavior: "smooth"
            })
    }

    return (
        <>
        <div className={styles.home_container}>

            <div className={styles.sobre_mim}>
                <h1>Olá, eu sou Fillip</h1>
                <p className={styles.p_primeiro}>
                    Desenvolvedor Front-end
                </p>
                <p className={styles.p_segundo}>Sou estudante de Engenharia de software, e estudante de programação.</p>
                <button onClick={scrollContato}>contate-me<i class="uil uil-message"></i></button>
            </div>

            <img alt="fotodeperfil" src={fotoPefil}/>

        </div>
        <div className={styles.scroll_down}>
            <i class="uil uil-mouse-alt"></i>
            <button onClick={scrollSobre}>Role para baixo</button>
            <i class="uil uil-angle-double-down"></i>
        </div>
        </>
    )
}

export default Home