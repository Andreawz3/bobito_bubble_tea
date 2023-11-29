import styles from '../styles/Checkout.module.css'
import { Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react';

// COMPONENTS
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// ASSETS
import Map from '../../src/images/assets/map.svg'
import Card from '../../src/images/assets/card.svg'
import RightArrow from '../../src/images/icons/right arrow.svg'

export default function Checkout() {

    // Link
    const { pathname } = useLocation();
    const splitLocation = pathname.split("/");

    //handle data from cart
    const location = useLocation();
    const {currentData} = location.state || {};

    //card
    const [cardInitial, setCardInitial] = useState('****1234');
    const [cardButton, setCardButton] = useState(true);
    const [cardSave, setCardSave] = useState(false);

    //toggle the card
    const handleCard = () => {
        setCardButton(false)
        setCardSave(true)
        setCardInitial('****' + cardInfo.slice(-4));
        setCardInfo('');
    }

    //save card info
    const [cardInfo, setCardInfo] = useState('');
    const handleChange = (e) => {
        setCardInfo(e.target.value);

        // Remove non-numeric characters
        const input = e.target.value.replace(/\D/g, '');

        // Limit the input to 16 characters
        const limitInput = input.slice(0, 16);

        setCardInfo(limitInput);
    }
    const saveCard = () => {
        setCardButton(true)
        setCardSave(false)
    }

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
                    {currentData ? (
                        <div className={styles.order}>
                            <p className={styles.heading}>Order summary</p>
                            <div className={styles.orderInfo_container}>
                                <p>{currentData.finalAmount}</p>
                                <div className={styles.orderInfo}>
                                    <p>{currentData.name}</p>
                                    <div className={styles.drinkOptions}>
                                        <p>Size: {currentData.selectedOptions.size}</p>
                                        <p>Sweetness: {currentData.selectedOptions.sweetness}</p>
                                        <p>Temperature: {currentData.selectedOptions.temperature}</p>
                                        <p>Topping: {currentData.selectedOptions.topping}</p>
                                    </div>
                                </div>
                                <p>${currentData.price}</p>
                            </div>
                            <div className={styles.note_container}>
                                <p>Note</p>
                                <div className={styles.note_box}>{currentData.noteText}</div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.noAdded}>
                            <p>No drinks have been added</p>
                            <Link
                                to={'/menu'} 
                                className={splitLocation[1] === "menu" ? styles.active : ""}
                            >
                                <button className={styles.goTo_button}>Go to menu</button>
                            </Link>
                        </div>
                    )}
                </div>

                {currentData ? (
                    <div className={styles.rightInfo}>
                        <p className={styles.heading}>Order total</p>
                        <div className={styles.subheading}>
                            <p>Subtotal</p>
                            <p>${currentData.price}</p>
                        </div>
                        <div className={styles.subheading}>
                            <p>Taxes & Other Fees</p>
                            <p>${(currentData.price * 0.03).toFixed(2)}</p>
                        </div>
                        <hr/>
                        <div className={styles.totalHeading}>
                            <p>Total</p>
                            <p>${(currentData.price * 0.03 + currentData.price).toFixed(2)}</p>
                        </div>
                        {cardButton && (
                            <div   
                                className={styles.card}
                                onClick={handleCard}
                            >
                                <button 
                                    className={styles.cardNumber}
                                >
                                    <img
                                        src={Card}
                                        alt="card"
                                    />
                                    <p>Visa {cardInitial}</p>
                                </button>
                                <img
                                    src={RightArrow}
                                    alt="rightarrow"
                                />
                            </div>
                        )}
                        {cardSave && (
                            <div className={styles.card_save}>
                                <input
                                    className={styles.card_input}
                                    type="text"
                                    placeholder="Add a card ..."
                                    value={cardInfo}
                                    onChange={handleChange}
                                />
                                <button 
                                    className={styles.button}
                                    onClick={saveCard}
                                >
                                    Save
                                </button>
                            </div>
                        )}
                        <Link
                            to={'/order-placed'} 
                            className={splitLocation[1] === "order-placed" ? styles.active : ""}
                        >
                            <button className={styles.placeOrder}>
                            <p>Place Your Order - {(currentData.price * 0.03 + currentData.price).toFixed(2)}</p> 
                        </button>
                        </Link>
                    </div>
                ) : (
                    ''
                )}
            </div>
            <Footer/>
        </>
    )

}