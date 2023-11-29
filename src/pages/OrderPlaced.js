import styles from '../styles/OrderPlaced.module.css'
import { Link, useLocation } from 'react-router-dom'

// COMPONENTS
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// ASSETS
import orderPlaced from '../images/assets/orderPlaced.svg'

export default function OrderPlaced() {

    //Link
    const { pathname } = useLocation();
    const splitLocation = pathname.split("/");

    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <img
                    src={orderPlaced}
                    alt='orderPlaced'
                />
                <p>
                    Your bubble tea order has been received. Our team is working diligently to prepare your drink. Get ready to enjoy the amazing flavor! Thank you for choosing us!
                </p>
                <Link to={'/'} className={splitLocation[1] === "" ? styles.active : ""}>
                    <button className={styles.goToHome_button}>
                        Go To Home
                    </button>
                </Link>
            </div>
            <Footer/>
        </>
    )
}