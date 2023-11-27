import styles from '../styles/Menu.module.css'
import { boba } from '../data/boba'

// COMPONENTS
import NavBar from '../components/NavBar'

// ASSETS
import headerImg from '../images/menu/header-img.png'
import headerDesign from '../images/menu/bg.png'
import drinkPink from '../images/menu/drink-pink.png'
import drinkGreen from '../images/menu/drink-green.png'
import drinkYellow from '../images/menu/drink-yellow.png'
import Drink from '../components/Drink'
import Footer from '../components/Footer'

export default function Menu() {
    const drinks = [drinkPink, drinkGreen, drinkYellow];

    return (
        <>
            <NavBar />
            <div className={styles.menu_container}>
                <div className={styles.img_container}>
                    <img src={headerImg} alt='header-img' />
                    <img src={headerDesign} alt='header-design-img' />
                </div>
                <div className={styles.drinks_container}>
                    {boba.map((data, index) => {
                        return (
                            <Drink 
                                key={index}
                                index={index}
                                name={data.name}
                                desc={data.description}
                                image={drinks[index]}
                            />
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </>
    )
}