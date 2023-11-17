import React, { useState } from 'react';
import { CustomizeDrinksData } from '../../data/CustomizeDrinksData'
import { Link, useLocation } from 'react-router-dom'
import styles from "./Cart.module.css";

// ASSETS
import Close from '../../images/icons/close-icon.svg'
import drinkPink_cart from '../../images/assets/drinksPink_cart.svg'
import Delete from '../../images/icons/delete.svg'
import RightArrow from '../../images/icons/right arrow.svg'

export default function Cart({ selectedOptions, price, amount, closeCart }) {

  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  // Counter
  const [counterAmount, setCounterAmount] = React.useState(0);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img 
          src={Close} 
          alt="close_icon" 
          onClick={closeCart}
          className={styles.close_icon}
        />
        <div className={styles.drinkInfo}>
          <img
            src={drinkPink_cart} 
            alt="drink_image"
            className={styles.drink_image}
          />
          <div className={styles.drinkInfoText}>
            {
              CustomizeDrinksData.map((category, index) => {
                return(
                  <div key={index}>
                      {category.drink && category.drink.map((drink, drinkIndex) => (
                          <div key={drinkIndex}>
                              <p className={styles.drinkName}>{drink.name}</p>
                          </div>
                      ))}
                  </div>
                )})
            }
            <div className={styles.drinkOptions}>
              <p>Size: {selectedOptions.size}</p>
              <p>Sweetness: {selectedOptions.sweetness}</p>
              <p>Temperature: {selectedOptions.temperature}</p>
              <p>Topping: {selectedOptions.topping}</p>
            </div>
            <p className={styles.price}>${price}</p>
          </div>
          <div className={styles.drinkButtons}>
            <div className={styles.drinkButtons_1}>
              <p>Update</p>
              <img
                src={Delete}
                alt="delete"
                className={styles.deleteIcon}
              />
            </div>
            <div className={styles.drinkButtons_2}>
              <button onClick={() => setCounterAmount(Math.max(counterAmount - 1, 1))}> 
                  -
              </button>
              <p className={styles.counter}>{counterAmount + amount}</p>
              <button onClick={() => setCounterAmount(counterAmount + 1)}>
                  +
              </button>
            </div>
          </div>
        </div>
        <div className={styles.note}>
            <button>
              <p>Add a note</p>
              <img
                src={RightArrow}
                alt="rightarrow"
              />
            </button>
        </div>
        <Link to={'/checkout'} className={splitLocation[1] === "checkout" ? styles.active : ""}>
          <button>Go To Checkout</button>
        </Link>
      </div>
    </div>
  );
};
