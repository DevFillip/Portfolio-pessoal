import fotodeperfil2 from '../../imagens/fotodeperfil2.png'
import styles from './SobreMim.module.css'
import cv from '../../arquivos/Meu CV primeira tentativa.pdf'

function SobreMim(){
    return (
        <>
            <h1 className={styles.h1_sobre}>Sobre mim</h1>
            <div className={styles.sobreMim}>
                <img src={fotodeperfil2} className={styles.fotodeperfil2} alt='fotodeperfil2'/>

                <div className={styles.resumo}>
                    <p className={styles.p_sobre}>Eu me chamo Fillip Hudson, estudo programação e faço faculdade de engenharia de software pela universidade Unoeste, além disso tenho um canal no Youtube que falo sobre programação e publico um pouco do meu conhecimento para poder ajudar a comunidade. </p>
                    <a download="Fillip-CV" href={cv} ><button className={styles.button_sobre}>Baixe meu CV<i class="uil uil-import"></i></button></a>
                </div>
            </div>
        </>
    )
}

export default SobreMim