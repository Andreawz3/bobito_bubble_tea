import styles from '../styles/Home.module.css'

// COMPONENTS
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

//GRAPHICS
import bobaGraphic from '../images/assets/boba-graphic.svg'
import noodleGraphic from '../images/assets/noodle-graphic.svg'
import starGraphic from '../images/assets/stars-graphic.svg'
import strawGraphic2 from '../images/assets/straw-graphic2.svg'
import bubbleTeaGraphic from '../images/assets/bubble-tea-graphic.svg'
import splashGraphic from '../images/assets/splash-graphic.svg'

import customizeBackground from '../images/assets/customize-background.svg'
import passionfruitDrink from '../images/assets/passionfruit-mango-boba.png'
import strawberryLycheeDrink from '../images/assets/strawberry-lychee-boba.png'
import pandanDrink from '../images/assets/pandan-boba.png'

//ICON
import arrowIcon from '../images/assets/arrow-icon.svg'

//TEXT 
import bubbleText from '../images/assets/bubble-text.svg'
import upText from '../images/assets/up-text.svg'
import yourDayText from '../images/assets/your-day-text.svg'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <NavBar/>
            <div className={styles.mainContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.landingContainer}>
                        <div className={styles.firstRowGraphics}>
                            <div className={styles.bobaBox}>
                                <img 
                                    src={bobaGraphic} 
                                    alt="boba"
                                    />
                            </div>
                            <div className={styles.bubbleBox}>
                                <img 
                                    src={bubbleText}
                                    alt="Bubble text"
                                    />
                            </div>
                            <div className={styles.upTextBox}>
                                <img 
                                    src={upText}
                                    alt="Up text"
                                    />
                            </div>
                            <div className={styles.noodleBox}>
                                <img 
                                    src={noodleGraphic}
                                    alt="noodle"
                                    />
                            </div>
                        </div>
                        <div className={styles.secondRowGraphics}>
                            <div className={styles.starBox}>
                                <img 
                                    src={starGraphic}
                                    alt="starts"
                                    />
                            </div>
                            <div className={styles.secondRowColumn}>
                                <div className={styles.yourDayBox}>
                                    <img 
                                        src={yourDayText}
                                        alt="Your day text"
                                        />
                                </div>
                                <div className={styles.strawBox}>
                                    <img 
                                        className={styles.strawImage}
                                        src={strawGraphic2}
                                        alt="straw"
                                    />
                                    <Link 
                                        className={styles.makeDrink}
                                        alt="make a drink"
                                        to={'/menu'}
                                        >
                                            Make a drink
                                    </Link>
                                    <img 
                                        className={styles.arrowIcon} 
                                        src={arrowIcon}
                                        alt="arrow icon"    
                                    />
                                </div>
                            </div>
                            <div className={styles.bubbleTeaBox}>
                                <img 
                                    src={bubbleTeaGraphic}
                                    alt="bubble tea"    
                                />
                            </div>
                        </div>
                        <div className={styles.thirdRowGraphics}>
                            <img 
                                className={styles.splashImage}
                                src={splashGraphic}
                                alt="splash"
                            />
                        </div>
                    </div>
                    <div className={styles.customizeContainer}>
                        <div className={styles.background}>
                            {/* <div className={styles.pinkRectangle}/> */}
                            <div className={styles.menuContainer}>
                                <div className={styles.drinksMenu}>
                                    <div className={styles.drinkColumn} >
                                        <img 
                                            src={passionfruitDrink}
                                            alt="passionfruit"
                                            />
                                        <div className={styles.passionBox}>Mango Tango</div>
                                    </div>
                                    <div className={styles.drinkColumn}>
                                        <img 
                                            src={strawberryLycheeDrink}
                                            alt="strawberry serenade"
                                            />
                                        <div className={styles.strawlychBox}>Strawberry Serenade</div>
                                    </div>
                                    <div className={styles.drinkColumn}>
                                    <img 
                                        src={pandanDrink}
                                        alt="pandan"
                                        />
                                    <div className={styles.pandanBox}>Pandan dream pop</div>
                                    </div>
                                </div>
                                <img 
                                    src={customizeBackground}
                                    className={styles.customBackground}
                                />
                            </div>

                        </div>
                    </div>
                    //testimonials section
                </div>
            </div>
            <Footer/>
        </>
    )
}