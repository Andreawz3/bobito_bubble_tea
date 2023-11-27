import React, { useState } from 'react';
import { CustomizeDrinksData } from '../../data/CustomizeDrinksData'
import { Link, useLocation } from 'react-router-dom'
import styles from "./Cart.module.css";

// ASSETS
import Close from '../../images/icons/close-icon.svg'
import Delete from '../../images/icons/delete.svg'
import RightArrow from '../../images/icons/right arrow.svg'

export default function Cart({ selectedOptions, price, amount, closeCart, name, image, onDelete, onEdit }) {

  // Link
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  // Counter
  const [counterAmount, setCounterAmount] = useState(0);
  const Counter = () => counterAmount + amount;


  return (
    <div className={styles.overlay}>
		<div className={styles.boba__container}>
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
						<p className={styles.price}>${price + ((price * counterAmount) / amount)}</p>
					</div>
				</div>
				<div className={styles.drinkButtons}>
					<div className={styles.drinkButtons_1}>
						<p onClick={onEdit}>Edit</p>
						<img
							src={Delete}
							alt="delete"
							className={styles.deleteIcon}
							onClick={onDelete}
						/>
					</div>
					<div className={styles.drinkButtons_2}>
						<button onClick={() => setCounterAmount(Math.max(counterAmount - 1, 0))}>  
							-
						</button>
						<p className={styles.counter}>{Counter()}</p>
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
