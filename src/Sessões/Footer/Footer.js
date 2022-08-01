import './footer.css'
import { BsLinkedin, BsYoutube, BsInstagram, BsGithub} from 'react-icons/bs'

function Footer(){

    const scrollPortfolio = () => {
        window.scrollTo({
            top: 1530,
            behavior: "smooth"
        })
    }

    function scrollSobre(){
        window.scrollTo({
            top: 530,
            behavior: "smooth"
            })
    }

    return (
        <footer>
            <div className='footer-container'>
                <div className='quem-sou'>
                    <p>Fillip</p>
                    <p>Desenvolvedor Front-end</p>
                </div>

                <div className='partes-pagina'>
                    <ul>
                        <li onClick={scrollPortfolio}>Portfólios</li>
                        <li onClick={scrollSobre}>Sobre mim</li>
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