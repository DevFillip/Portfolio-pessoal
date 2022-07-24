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

    return (
        <nav className={styles.navbar_container}>
            <p className={styles.p_navbar}>Fillip</p>
            <ul className={navAtiva}>
                <li className={styles.item}>Home</li>
                <li className={styles.item}>Sobre mim</li>
                <li className={styles.item}>Habilidades</li>
                <li className={styles.item}>Projetos</li>
                <li className={styles.item}>Contato</li>
            </ul>

            <div className={styles.toggle}>
                {!esconderMenu ? <AiOutlineMenu className={styles.menu} onClick={navToggle}/> : <GrClose className={styles.fechar} onClick={navToggle}/>}  
            </div>
        </nav>
    )
}

export default Navbar