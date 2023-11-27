import styles from '../styles/Checkout.module.css'

// COMPONENTS
import NavBar from '../components/NavBar'

// ASSETS
import Map from '../../src/images/assets/map.svg'
import Card from '../../src/images/assets/card.svg'
import RightArrow from '../../src/images/icons/right arrow.svg'
import Footer from '../components/Footer'

export default function Checkout() {
    return(
        <>
            <NavBar/>
            <div className={styles.container}>
                <div className={styles.leftInfo}>
                    <div className={styles.pickupInfo}>
                        <p className={styles.pickupHeading}>Pickup</p>
                        <p>123 Victoria St , Vancouver, BC</p>
                    </div>
                    <img
                        className={styles.map}
                        src={Map} 
                        alt="map" 
                    />
                    <div className={styles.orderInfo}>
                        <p className={styles.heading}>Order summary</p>

                    </div>
                </div>
                <div className={styles.rightInfo}>
                    <p className={styles.heading}>Order total</p>
                    <div className={styles.subheading}>
                        <p>Subtotal</p>
                        <p>$6.75</p> {/* change the price later */}
                    </div>
                    <div className={styles.subheading}>
                        <p>Taxes & Other Fees</p>
                        <p>$0.42</p> {/* change the price later */}
                    </div>
                    <hr/>
                    <div className={styles.totalHeading}>
                        <p>Total</p>
                        <p>$7.17</p> {/* change the price later */}
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardNumber}>
                            <img
                                src={Card}
                                alt="card"
                            />
                            <p>Visa  ****1234</p>
                        </div>
                        <img
                            src={RightArrow}
                            alt="rightarrow"
                        />
                    </div>
                    <button className={styles.placeOrder}>
                        <p>Place Your Order - $7.17</p> {/* change the price later */}
                    </button>
                </div>
            </div>
            <Footer/>
        </>
    )

}