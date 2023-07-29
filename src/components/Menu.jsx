import { Link } from 'react-router-dom'
import styles from '../style/components/menu.module.css'

import logo from '../assets/logo.png'

const Menu = () => {
    return (
        <nav className={styles.menuContainer}>
            <div className={styles.logoMenu}>
               <a href="/"> 
               <img src={logo} className={styles.logo} alt=""/>
               </a>
            </div>

            <div className={styles.navLink}>
                <ul className={styles.navItens}>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/sobre'>QUEM SOMOS</Link>
                    </li>
                    <li>
                        <Link to='/contato'>CONTATO</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu