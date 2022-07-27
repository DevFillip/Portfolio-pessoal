import './footer.css'
import { BsLinkedin, BsYoutube, BsInstagram, BsGithub} from 'react-icons/bs'

function Footer(){
    return (
        <footer>
            <div className='footer-container'>
                <div className='quem-sou'>
                    <p>Fillip</p>
                    <p>Desenvolvedor Front-end</p>
                </div>

                <div className='partes-pagina'>
                    <ul>
                        <li>Portfólios</li>
                        <li>Sobre mim</li>
                    </ul>
                </div>

                <div className='rede-sociais'>
                    <BsLinkedin />
                    <BsYoutube/>
                    <BsInstagram />
                    <BsGithub />
                </div>
            </div>
            <p className='copy'><span>&copy;</span>Feito por Fillip</p>
        </footer>   
    )
}

export default Footer