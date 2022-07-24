import styles from './Tecnologias.module.css'

function Tecnologias(){
    return (

        <div className={styles.barra_tecnologias}>

            <div className={styles.barra}>
                <div className={styles.informacao}>
                    <span>HTML</span>
                </div>
                <div className={styles.linha_progresso}>
                    <span></span>
                </div>
            </div>
            

            <div className={styles.barra}>
                <div className={styles.informacao}>
                    <span>CSS</span>
                </div>
                <div className={styles.linha_progresso}>
                    <span></span>
                </div>
            </div>

            <div className={styles.barra}>
                <div className={styles.informacao}>
                    <span>JS</span>
                </div>
                <div className={styles.linha_progresso}>
                    <span></span>
                </div>
            </div>
            

            <div className={styles.barra}>
                <div className={styles.informacao}>
                    <span>React JS</span>
                </div>
                <div className={styles.linha_progresso}>
                    <span></span>
                </div>
            </div>
            
        </div>

    )
}

export default Tecnologias