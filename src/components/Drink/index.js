import { useState } from 'react';
import styles from './Drink.module.css'
import CustomizeDrinks from '../CustomizeDrinks/index'

export default function Drink({name, desc, image, index}) {
    // Popup Order Modal
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div 
                className={styles.drink} 
                style={{ backgroundColor: 
                    index === 0 ? '#FFDF98' :
                    index === 1 ? '#FEC7DB' :
                    index === 2 ? '#B6E2F2' : 
                    index === 3 ? '#EACBAD' : '#E7B082'
                }}
            >
                <div>
                    <img src={image} alt={name} />
                    <h3 
                        style={{ color: 
                            index === 0 ? '#F0BF54' :
                            index === 1 ? '#E194B0' :
                            index === 2 ? '#9EC3D0' :
                            index === 3 ? '#C8A079' : '#CA8B54'
                        }}
                    >{name}</h3>
                    <p className={styles.desc} >{desc}</p>
                </div>
                <button 
                    style={{ backgroundColor: 
                        index === 0 ? '#F0BF54' :
                        index === 1 ? '#E194B0' :
                        index === 2 ? '#9EC3D0' :
                        index === 3 ? '#C8A079' : '#CA8B54'
                    }}
                    onClick={() => setIsOpen(true)}
                >
                    SELECT
                </button>
            </div>
            { isOpen && 
                <CustomizeDrinks
                    name={name}
                    desc={desc}
                    image={image}
                    index={index}
                    setIsOpen={setIsOpen}
                />
            }
        </>
    )
}