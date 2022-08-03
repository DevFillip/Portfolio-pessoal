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
                    <a target='https://www.linkedin.com/in/fillip-hudson-8455b5235/' href='https://www.linkedin.com/in/fillip-hudson-8455b5235/'><BsLinkedin /></a>
                    <a target='https://www.youtube.com/channel/UCUOYpRNIBKtyPcswYjhRa8A' href="https://www.youtube.com/channel/UCUOYpRNIBKtyPcswYjhRa8A"><BsYoutube/></a>
                    <a target='https://www.instagram.com/fillip_hudson/' href="https://www.instagram.com/fillip_hudson/"><BsInstagram /></a>
                    <a target='https://github.com/DevFillip' href='https://github.com/DevFillip'><BsGithub /></a>
                </div>
            </div>
            <p className='copy'><span>&copy;</span>Feito por Fillip</p>
        </footer>   
    )
}



export default Footer