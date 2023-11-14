import React, { useState, useEffect  } from 'react';
import { CustomizeDrinksData } from '../../data/CustomizeDrinksData'
import styles from './CustomizeDrinks.module.css'

// ASSETS
import Close from '../../images/assets/close-icon.svg'
import drinkPink from '../../images/assets/customize-drink-pink.svg'
import drinkGreen from '../../images/menu/drink-green.png'
import drinkYellow from '../../images/menu/drink-yellow.png'

export default function CustomizeDrinks() {

    // const drinks = [drinkPink, drinkGreen, drinkYellow];
    const [isOpen, setIsOpen] = useState(false);
    const [counter, setCounter] = React.useState(1);
    const [selectedButtonsSize, setSelectedButtonsSize] = useState(Array(3).fill(false));
    const [selectedButtonsSweetness, setSelectedButtonsSweetness] = useState(Array(4).fill(false));
    const [selectedButtonsTopping, setSelectedButtonsTopping] = useState(Array(6).fill(false));

    // Updated handleButtonClick function
    const handleButtonClick = (index, group) => {
        let newSelectedButtons = [];
      
        switch (group) {
          case 'Topping':
            newSelectedButtons = [...selectedButtonsTopping];
            setSelectedButtonsTopping(toggleButtonState(newSelectedButtons, index));
            break;
          case 'Size':
            newSelectedButtons = [...selectedButtonsSize];
            setSelectedButtonsSize(toggleButtonState(newSelectedButtons, index));
            break;
          case 'Sweetness':
            newSelectedButtons = [...selectedButtonsSweetness];
            setSelectedButtonsSweetness(toggleButtonState(newSelectedButtons, index));
            break;
          default:
            break;
        }
      };

      // Updated toggleButtonState function
      const toggleButtonState = (buttons, index) => {
        const newButtons = buttons.map((button, i) => (i === index ? !button : false));
        return newButtons;
      };    
 
    return (
        <div>
            <div className={styles.select}>
                <button 
                    onClick={() => setIsOpen(true)}>
                    {/* SELECT */}
                </button>
            </div>

            {isOpen && (
                <div className={styles.container}>
                    <img 
                        src={Close} 
                        alt="close_icon" 
                        onClick={() => setIsOpen(false)}
                        className={styles.close_icon}
                    />
                    <div className={styles.drink_info}>
                        <img 
                            src={drinkPink} 
                            alt="drink_image"
                            className={styles.drink_image}
                        />
                        {CustomizeDrinksData.map((category, index) => {
                            return(
                            <div key={index}>
                                {category.drink && category.drink.map((drink, drinkIndex) => (
                                    <div key={drinkIndex}>
                                        <h3>{drink.name}</h3>
                                        <p className={styles.price}>{drink.price}</p>
                                        <p>{drink.description}</p>
                                    </div>
                                ))}
                            </div>
                            )
                        })}
                        <div className={styles.amount_container}>
                            <button onClick={() => setCounter(counter - 1)}>
                                -
                            </button>
                            <p className={styles.counter}>{counter}</p>
                            <button onClick={() => setCounter(counter + 1)}>
                                +
                            </button>
                        </div>
                    </div>
                    <hr className={styles.hr}/>
                    <div className={styles.options_container}>
                        <div className={styles.options}>
                            <p className={styles.heading}>Size</p>
                            {
                                CustomizeDrinksData.map((category, index) => {
                                    return(
                                        <div key={index} className={styles.options_button}>
                                            {category.Size && category.Size.map((Size, SizeIndex) => (
                                                <button 
                                                    key={SizeIndex}
                                                    className={`${styles.options_text_button} ${selectedButtonsSize[SizeIndex] ? styles.selected : ''}`}
                                                    onClick={() => handleButtonClick(SizeIndex, 'Size')}
                                                >
                                                    <p className={styles.options_text}>{Size.name}</p>
                                                    <p className={styles.price_change}>{Size.price}</p>
                                                </button>
                                            ))}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.options}>
                            <p className={styles.heading}>Sweetness</p>
                            {
                                CustomizeDrinksData.map((category, index) => {
                                    return(
                                        <div key={index} className={styles.options_button_Sweetness}>
                                            {category.Sweetness && category.Sweetness.map((Sweetness, SweetnessIndex) => (
                                                <button 
                                                    key={SweetnessIndex}
                                                    className={`${styles.options_text_button} ${selectedButtonsSweetness[SweetnessIndex] ? styles.selected : ''}`}
                                                    onClick={() => handleButtonClick(SweetnessIndex, 'Sweetness')}
                                                >
                                                    <p className={styles.options_text}>{Sweetness.name}</p>
                                                    <p className={styles.price_change}>{Sweetness.price}</p>
                                                </button>
                                            ))}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.options_Topping}>
                            <p className={styles.heading}>Topping</p>
                            {
                                CustomizeDrinksData.map((category, index) => {
                                    return(
                                        <div key={index} className={styles.options_button_Topping}>
                                            {category.Topping && category.Topping.map((Topping, ToppingIndex) => (
                                                <button 
                                                    key={ToppingIndex}
                                                    className={`${styles.options_text_button} ${selectedButtonsTopping[ToppingIndex] ? styles.selected : ''}`}
                                                    onClick={() => handleButtonClick(ToppingIndex, 'Topping')}
                                                >
                                                    <p className={styles.options_text}>{Topping.name}</p>
                                                    <p className={styles.price_change}>{Topping.price}</p>
                                                </button>
                                            ))}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.add_container}>
                        <button onClick={() => setIsOpen(false)}>
                            <p>Add to order</p>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}