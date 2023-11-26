import React, { useState } from 'react';
import { CustomizeDrinksData } from '../../data/CustomizeDrinksData'
import { Link, useLocation } from 'react-router-dom'
import styles from "./Cart.module.css";

// ASSETS
import Close from '../../images/icons/close-icon.svg'
import drinkPink_cart from '../../images/assets/drinksPink_cart.svg'
import Delete from '../../images/icons/delete.svg'
import RightArrow from '../../images/icons/right arrow.svg'

export default function Cart({ selectedOptions, price, amount, closeCart, name, image }) {

  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  // Counter
  const [counterAmount, setCounterAmount] = React.useState(0);

  return (
    <div className={styles.cart__background}>
		<div className={styles.cart__container}>
			<img 
				src={Close} 
				alt="close_icon" 
				onClick={closeCart}
				className={styles.close_icon}
			/>
			<div className={styles.cart__info}>
				<div className={styles.cart__info_content}>
					<img
						src={image} 
						alt="drink_image"
						className={styles.drink_image}
					/>
					<div className={styles.cart__info_text}>
						<h3 className={styles.drinkName}>{name}</h3>		
						<div className={styles.drinkOptions}>
							<p>Size: {selectedOptions.size}</p>
							<p>Sweetness: {selectedOptions.sweetness}</p>
							<p>Temperature: {selectedOptions.temperature}</p>
							<p>Topping: {selectedOptions.topping}</p>
						</div>
						<p className={styles.price}>${price}</p>
					</div>
				</div>
				<div className={styles.drinkButtons}>
					<div className={styles.drinkButtons_1}>
						<p>Edit</p>
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
			<div className={styles.cart__note}>
				<button>
					<p>Add a note</p>
					<img
						src={RightArrow}
						alt="rightarrow"
					/>
				</button>
			</div>
			<Link to={'/checkout'} className={splitLocation[1] === "checkout" ? styles.active : ""}>
				<button className={styles.cart__checkout}>Go To Checkout</button>
			</Link>
		</div>
    </div>
  );
};
