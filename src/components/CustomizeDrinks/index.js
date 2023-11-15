import React, { useState } from 'react';
import { CustomizeDrinksData } from '../../data/CustomizeDrinksData'
import styles from './CustomizeDrinks.module.css'

// ASSETS
import Close from '../../images/icons/close-icon.svg'
import drinkPink from '../../images/assets/customize-drink-pink.svg'
import drinkGreen from '../../images/menu/drink-green.png'
import drinkYellow from '../../images/menu/drink-yellow.png'

export default function CustomizeDrinks() {

    // const drinks = [drinkPink, drinkGreen, drinkYellow];

    // Popup
    const [isOpen, setIsOpen] = useState(false);

    // Counter
    const [counterAmount, setCounterAmount] = React.useState(1);
    const [counterTopping, setCounterTopping] = React.useState(0);
    const [counterSizeSmall, setCounterSizeSmall] = React.useState(0);
    const [counterSizeLarge, setCounterSizeLarge] = React.useState(0);

    // Set options buttons
    const [selectedButtonsSize, setSelectedButtonsSize] = useState(Array(3).fill(false));
    const [selectedButtonsSweetness, setSelectedButtonsSweetness] = useState(Array(4).fill(false));
    const [selectedButtonsTemperature, setSelectedButtonsTemperature] = useState(Array(6).fill(false));
    const [selectedButtonsTopping, setSelectedButtonsTopping] = useState(Array(6).fill(false));

    // Updated handleButtonClick function
    const handleButtonClick = (index, group) => {
        let newSelectedButtons = [];
      
        switch (group) {
          case 'Size':
            newSelectedButtons = toggleButtonState(selectedButtonsSize, index); //`true` or `false`, `1` or `0`
            setSelectedButtonsSize(newSelectedButtons);
            switch (index) {
                case 0: // Small
                    setCounterSizeSmall((isChecked) => (isChecked === -1 ? 0 : -1));
                    setCounterSizeLarge(0); // Reset counterSizeLarge to 0 when toggling Small
                    break;
                case 2: // Large
                    setCounterSizeLarge((isChecked) => (isChecked === 1 ? 0 : 1));
                    setCounterSizeSmall(0); // Reset counterSizeSmall to 0 when toggling Large
                    break;
                default:
                    break;
            }
            break;
          case 'Sweetness':
            newSelectedButtons = toggleButtonState(selectedButtonsSweetness, index);
            setSelectedButtonsSweetness(newSelectedButtons); 
            break;
          case 'Temperature':
            newSelectedButtons = toggleButtonState(selectedButtonsTemperature, index);
            setSelectedButtonsTemperature(newSelectedButtons); 
            break;
          case 'Topping':
            newSelectedButtons = toggleButtonState(selectedButtonsTopping, index); //use the toggleButtonState function to create a new array (newSelectedButtons) based on the current state of selectedButtonsTopping with the button at the specified index toggled
            setSelectedButtonsTopping(newSelectedButtons); //set the state of selectedButtonsTopping to the newly created array (newSelectedButtons)

            // Update topping counter
            const counterTopping = newSelectedButtons.filter((isChecked) => isChecked).length;
            setCounterTopping(counterTopping);
            break;


            // newSelectedButtons = [...selectedButtonsTopping];
            // setSelectedButtonsTopping(toggleButtonState(newSelectedButtons, index)); //index = 0, 1, 2, 3, 4, 5

            // Update topping counter
                //`counterPrice` is calculated as the length of the `newSelectedButtons` array where `isChecked` is true
                //`filter` method uses a callback function to determine which elements of an array should be retained
                //`(isChecked) => isChecked` is an arrow function that takes an argument isChecked and returns the same value
                //`.length` get the number of elements in this filtered array. because `(isChecked) => isChecked` is `true` which only have one element
                //if one topping is selected (`isChecked` is `true` for at least one element), then `counterPrice` = 1 (length = 1)
                //if no topping is selected (`isChecked` is `false` and return a empty array), then `counterPrice` = 0 (length = 0)
            // const counterPrice = newSelectedButtons.filter((isChecked) => isChecked).length; 
            // setCounterPrice(counterPrice === 0 ? 1 : 0);
            // break;

          default:
            break;
        }
      };
      
      // Updated toggleButtonState function
      const toggleButtonState = (buttons, index) => {
        const newButtons = buttons.map((button, i) => (i === index ? !button : false)); //`!button` is used to toggle the current boolean value of the button
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
                            {/* The Math.max function is used to determine the maximum value among its arguments. In this case, it compares the result of counterAmount - 1 with the value 1 and returns the greater of the two. */}
                            {/* If counterAmount - 1 is greater than 1, it returns counterAmount - 1.
                            If counterAmount - 1 is less than or equal to 1, it returns 1. */}
                            <button onClick={() => setCounterAmount(Math.max(counterAmount - 1, 1))}> 
                                -
                            </button>
                            <p className={styles.counter}>{counterAmount}</p>
                            <button onClick={() => setCounterAmount(counterAmount + 1)}>
                                +
                            </button>
                        </div>
                    </div>
                    <hr className={styles.hr}/>
                    <div className={styles.options_container}>

                        {/* Size */}
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

                        {/* Sweetness */}
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

                        {/* Temperature */}
                        <div className={styles.options_Topping}>
                            <p className={styles.headingTemperature}>Temperature</p>
                            {
                                CustomizeDrinksData.map((category, index) => {
                                    return(
                                        <div key={index} className={styles.options_button_Topping}>
                                            {category.Temperature && category.Temperature.map((Temperature, TemperatureIndex) => (
                                                <button 
                                                    key={TemperatureIndex}
                                                    className={`${styles.options_text_button} ${selectedButtonsTemperature[TemperatureIndex] ? styles.selected : ''}`}
                                                    onClick={() => handleButtonClick(TemperatureIndex, 'Temperature')}
                                                >
                                                    <p className={styles.options_text}>{Temperature.name}</p>
                                                </button>
                                            ))}
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* Topping */}
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
                            <p>Add to order - ${(6.75 + counterTopping + counterSizeSmall + counterSizeLarge) * counterAmount}</p>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}