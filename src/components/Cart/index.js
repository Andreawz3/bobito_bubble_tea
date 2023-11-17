import React, { useState } from 'react';
import styles from "./Cart.module.css";

const Cart = ({ selectedOptions }) => {
  return (
    <div>
      <p>Selected Size: {selectedOptions.size}</p>
      <p>Selected Sweetness: {selectedOptions.sweetness}</p>
      <p>Selected Temperature: {selectedOptions.temperature}</p>
      <p>Selected Topping: {selectedOptions.topping}</p>
    </div>
  );
};

export default Cart;