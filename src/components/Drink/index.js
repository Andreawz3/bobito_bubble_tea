import styles from './Drink.module.css'
import CustomizeDrinks from '../CustomizeDrinks/index'

export default function Drink({name, desc, image, index}) {
    return (
        <div 
            className={styles.drink} 
            style={{ backgroundColor: 
                index === 0 ? '#FFDF98' :
                index === 1 ? '#FEC7DB' :
                index === 2 ? '#B6E2F2' : '#FFDF98'
            }}
        >
            <div>
                <img src={image} alt={name} />
                <h3 
                    style={{ color: 
                        index === 0 ? '#F0BF54' :
                        index === 1 ? '#E194B0' :
                        index === 2 ? '#9EC3D0' : '#F0BF54'
                    }}
                >{name}</h3>
                <p>{desc}</p>
            </div>
            <button 
                style={{ backgroundColor: 
                    index === 0 ? '#F0BF54' :
                    index === 1 ? '#E194B0' :
                    index === 2 ? '#9EC3D0' : '#F0BF54'
                }}
            >SELECT<CustomizeDrinks/></button>
        </div>
    )
}