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
                <div className={styles.infoContainer}>
                    <div>
                        <h1 style={{marginBottom: '2rem'}}>Stirring Up Smiles, One Sip at a Time</h1>
                        <p className={styles.aboutParagraph}>
                            Welcome to our bubble tea haven! At “Bobito”, we are passionate about 
                            crafting the most delightful and unique bubble tea experiences for our 
                            customers. Our journey began with a simple desire to share the joy of 
                            this beloved Taiwanese tradition, and it has since blossomed into a 
                            commitment to delivering the highest quality and most innovative bubble 
                            tea creations
                        </p>
                        <h1 style={{marginBottom: '2rem', marginTop: '2rem'}}>Our Vision</h1>
                        <p className={styles.aboutParagraph}>
                            To be the premier destination for bubble tea enthusiasts, offering a world 
                            of innovative flavors and a hub for the bubble tea community to connect, 
                            share, and savor the joy of this beloved beverage
                        </p>
                        <br />
                        <p className={styles.aboutParagraph}>
                            To redefine the bubble tea experience by empowering customers to create 
                            their perfect cup of tea, fostering a vibrant community of tea enthusiasts, 
                            and becoming the go-to destination for customizable and innovative bubble tea 
                            creations. We aim to inspire creativity, celebrate individuality, and deliver 
                            a personalized and delightful bubble tea experience to every doorstep
                        </p>
                    </div>
                    <img 
                        className={styles.infoImage}
                        src={bubbleTea} 
                        alt="boba"
                    />
                </div>
            </div>
        </>
    )
}