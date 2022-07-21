import './styles.css'
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import {useState} from 'react'

function Navbar(){ 
    
    const [navAtiva, setNavAtiva] = useState(`ul`)
    const [esconderMenu, setEsconderMenu] = useState(false)

    const navToggle = () =>{
    navAtiva === `ul` ? setNavAtiva(`ul ativa`) : setNavAtiva(`ul`)

    setEsconderMenu(!esconderMenu)
 }

    return (
        <nav className='navbar-container'>
            <p>Fillip</p>
            <ul className={navAtiva}>
                <li className="item">Home</li>
                <li className="item">Sobre mim</li>
                <li className="item">Habilidades</li>
                <li className="item">Projetos</li>
                <li className="item">Contato</li>
            </ul>

            <div className='toggle'>
                {!esconderMenu ? <AiOutlineMenu className='menu' onClick={navToggle}/> : <GrClose className='fechar' onClick={navToggle}/>}  
            </div>
        </nav>
    )
}

export default Navbar