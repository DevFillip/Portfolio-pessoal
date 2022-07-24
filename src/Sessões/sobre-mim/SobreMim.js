import fotodeperfil2 from '../../imagens/fotodeperfil2.png'
import styles from './SobreMim.module.css'

function SobreMim(){
    return (
        <>
            <h1 className={styles.h1_sobre}>Sobre mim</h1>
            <div className={styles.sobreMim}>
                <img src={fotodeperfil2} className={styles.fotodeperfil2} alt='fotodeperfil2'/>

                <div className={styles.resumo}>
                    <p className={styles.p_sobre}>Eu me chamo Fillip Hudson, estudo programação e faço faculdade de engenharia de software pela universidade Unoeste, além disso tenho um canal no Youtube que falo sobre programação e publico um pouco do meu conhecimento para poder ajudar a comunidade. </p>
                    <button className={styles.button_sobre}>Baixe meu CV<i class="uil uil-import"></i></button>
                </div>
            </div>
        </>
    )
}

export default SobreMim