import styles from './navbar.module.css'
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import {useState} from 'react'

function Navbar(){ 
    
    const [navAtiva, setNavAtiva] = useState(`${styles.ul}`)
    const [esconderMenu, setEsconderMenu] = useState(false)

    const navToggle = () =>{
    navAtiva === `${styles.ul}` ? setNavAtiva(`${styles.ul} ${styles.ativa}`) : setNavAtiva(`${styles.ul}`)

    setEsconderMenu(!esconderMenu)
    }

    const scrollHome = () => {
        window.scrollTo({
            top: 30,
            behavior: "smooth"
        })
    }

    const scrollSobre = () => {
    window.scrollTo({
        top: 530,
        behavior: "smooth"
        })
    }

    const scrollTecnologias = () => {
        window.scrollTo({
            top: 1010,
            behavior: "smooth"
        })
    }

    const scrollPortfolio = () => {
        window.scrollTo({
            top: 1530,
            behavior: "smooth"
        })
    }


    const scrollContato = () => {
        window.scrollTo({
            top: 2070,
            behavior: "smooth"
        })
    }

    return (
        <nav className={styles.navbar_container}>
            <p className={styles.p_navbar}>Fillip</p>
            <ul className={navAtiva}>
                <li className={styles.item} onClick={scrollHome}>Home</li>
                <li className={styles.item} onClick={scrollSobre}>Sobre mim</li>
                <li className={styles.item} onClick={scrollTecnologias}>Tecnologias</li>
                <li className={styles.item} onClick={scrollPortfolio}>Projetos</li>
                <li className={styles.item} onClick={scrollContato}>Contato</li>
            </ul>

            <div className={styles.toggle}>
                {!esconderMenu ? <AiOutlineMenu className={styles.menu} onClick={navToggle}/> : <GrClose className={styles.fechar} onClick={navToggle}/>}  
            </div>
        </nav>
    )
}

export default Navbar