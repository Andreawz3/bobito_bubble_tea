import { Link, useLocation } from 'react-router-dom'
import styles from './NavBar.module.css'

// ASSETS
import cart from '../../images/icons/cart.svg'

export default function NavBar() {
    const { pathname } = useLocation();
    const splitLocation = pathname.split("/");

    return (
        <nav className={styles.navbar}>
            <Link to={'/'} className={styles.bobito}>bobito</Link>
            <div className={styles.nav_links}>
                <Link to={'/'} className={splitLocation[1] === "" ? styles.active : ""}>
                    HOME
                </Link>
                <Link to={'/menu'} className={splitLocation[1] === "menu" ? styles.active : ""}>
                    MENU
                </Link>
                <Link to={'/about-us'} className={splitLocation[1] === "about-us" ? styles.active : ""}>
                    ABOUT US
                </Link>
                <Link to={'/checkout'} className={splitLocation[1] === "checkout" ? styles.active : ""}>
                    <img src={cart} alt={'cart'} />
                </Link>
            </div>
        </nav>
    )
}