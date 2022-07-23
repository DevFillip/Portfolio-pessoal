import './style.css'
import fotodeperfil2 from '../../imagens/fotodeperfil2.png'

function SobreMim(){
    return (
        <>
            <h1 id='h1-sobre'>Sobre mim</h1>
            <div className='sobreMim'>
                <img src={fotodeperfil2} className='fotodeperfil2' alt='fotodeperfil2'/>

                <div className='resumo'>
                    <p id='p-sobre'>Eu me chamo Fillip Hudson, estudo programação e faço faculdade de engenharia de software pela universidade Unoeste, além disso tenho um canal no Youtube que falo sobre programação e publico um pouco do meu conhecimento para poder ajudar a comunidade. </p>
                    <button id='button-sobre'>Baixe meu CV<i class="uil uil-import"></i></button>
                </div>
            </div>
        </>
    )
}

export default SobreMim