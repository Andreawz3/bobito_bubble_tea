import styles from '../styles/AboutUs.module.css'

// COMPONENTS
import NavBar from '../components/NavBar'
// import Testimonial from '../components/Testimonial'

// Images
import bubbleTea from '../images/assets/milk_tea_with_pearl.png'
export default function AboutUs() {

    return (
        <div>
            <NavBar />
            <div className={styles.aboutContainer}>
                <div className={styles.infoContainer}>
                    <div>
                        <h1 style={{marginBottom: '1.3em'}}>Stirring Up Smiles, One Sip at a Time</h1>
                        <p className={styles.aboutParagraph}>
                            Welcome to our bubble tea haven! At “Bobito”, we are passionate about 
                            crafting the most delightful and unique bubble tea experiences for our 
                            customers. Our journey began with a simple desire to share the joy of 
                            this beloved Taiwanese tradition, and it has since blossomed into a 
                            commitment to delivering the highest quality and most innovative bubble 
                            tea creations
                        </p>
                        <h1 style={{marginBottom: '1.3em', marginTop: '1.3em'}}>Our Vision</h1>
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
                    <img className={styles.infoImage} src={bubbleTea} alt="boba" />
                </div>
                <h1 style={{marginTop: '4em'}}>Meet Our Team</h1>
                <div>
                    <div className={styles.imageContainer}>
                        <div className={`${styles.memberImg} ${styles.member}`}>
                            <div className={styles.memberDetail}>
                                <div className={styles.designIcon}>
                                    <i class='fas fa-palette'></i>
                                </div>
                                <div>
                                    <h4 className={styles.memberName}>Y. TAEYEON</h4>
                                    <p className={styles.memberTitle}>Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.memberImg} ${styles.member1}`}>
                            <div className={styles.memberDetail}>
                                <div className={styles.designIcon}>
                                    <i class='fas fa-palette'></i>
                                </div>
                                <div>
                                    <h4 className={styles.memberName}>D. MOMO</h4>
                                    <p className={styles.memberTitle}>Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.memberImg} ${styles.member2}`}>
                            <div className={styles.memberDetail}>
                                <div className={styles.designIcon}>
                                    <i class='fas fa-laptop-code'></i>
                                </div>
                                <div>
                                    <h4 className={styles.memberName}>L. YEON</h4>
                                    <p className={styles.memberTitle}>Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.memberImg} ${styles.member3}`}>
                            <div className={styles.memberDetail}>
                                <div className={styles.designIcon}>
                                    <i class='fas fa-laptop-code'></i>
                                </div>
                                <div>
                                    <h4 className={styles.memberName}>A. YIFEI</h4>
                                    <p className={styles.memberTitle}>Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Testimonial /> */}
            </div>
        </div>
    )
}