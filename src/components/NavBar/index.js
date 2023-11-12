import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

// ASSETS
import cart from '../../images/menu/cart.svg'

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Link to={'/'} className={styles.bobito}>bobito</Link>
            <div>
                <Link to={'/'}>
                    HOME
                </Link>
                <Link to={'/menu'}>
                    MENU
                </Link>
                <Link to={'/about-us'}>
                    ABOUT US
                </Link>
                <img src={cart} alt={'cart'} />
            </div>
        </nav>
    )
}