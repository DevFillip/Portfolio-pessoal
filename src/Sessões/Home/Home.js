import fotoPefil from '../../imagens/fotodeperfil1.png'
import './styles.css'

function Home(){
    return (
        <>
        <div className="home-container">

            <div className="sobre-mim">
                <h1>Olá, eu sou Fillip</h1>
                <p className='p-primeiro'>Desenvolvedor Front-end</p>
                <p className='p-segundo'>Sou estudante de Engenharia de software, e estudante de programação.</p>
                <button>contate-me<i class="uil uil-message"></i></button>
            </div>

            <img alt="fotodeperfil" src={fotoPefil}/>

        </div>
        <div className='scroll-down'>
            <i class="uil uil-mouse-alt"></i>
            <button>Role para baixo</button>
            <i class="uil uil-angle-double-down"></i>
        </div>
        </>
    )
}

export default Home