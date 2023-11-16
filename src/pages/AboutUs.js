import styles from '../styles/AboutUs.module.css'
import { boba } from '../data/boba'

// COMPONENTS
import NavBar from '../components/NavBar'

// Images
import bubbleTea from '../images/assets/milk_tea_with_pearl.png'

export default function AboutUs() {
    return (
        <>
            <NavBar />
            <div className={styles.aboutContainer}>
                <div>
                    <div>
                        <h1>
                            Stirring Up Smiles, One Sip at a Time
                        </h1>
                        <p>
                            Welcome to our bubble tea haven! At “Bobito”, we are passionate about 
                            crafting the most delightful and unique bubble tea experiences for our 
                            customers. Our journey began with a simple desire to share the joy of 
                            this beloved Taiwanese tradition, and it has since blossomed into a 
                            commitment to delivering the highest quality and most innovative bubble 
                            tea creations
                        </p>
                    </div>
                    <img 
                        src={bubbleTea} 
                        alt="boba"
                    />
                </div>
            </div>
        </>
    )
}