import styles from "../Footer/Footer.module.css"
import { Link, useLocation } from 'react-router-dom'

//ASSETS
import bobitoLogo2 from "../../images/icons/bobito-logo-2.svg"
import cart from '../../images/icons/cart.svg'
import twitter from '../../images/icons/twitter.svg'
import insta from '../../images/icons/instagram.svg'
import facebook from '../../images/icons/facebook.svg'
export default function Footer(){

    const { pathname } = useLocation();
    const splitLocation = pathname.split("/");

    return(
        <>
            <div className={styles.mainContainer}>
                <div className={styles.logoSection}>
                    <img
                        src={bobitoLogo2}
                        alt="secondary logo"
                    />
                </div>
                <div className={styles.menuSection}>
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
                <div className={styles.socialSection}>
                    <img
                        src={twitter}
                        alt="twitter logo"
                    />
                    <img
                        src={insta}
                        alt="instagram logo"
                    />
                    <img
                        src={facebook}
                        alt="facebook logo"
                    />
                </div>
            </div>
        </>
    )
}