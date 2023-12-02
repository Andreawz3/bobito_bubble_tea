import styles from "./Testimonial.module.css"
import { useEffect, useState } from "react";

export default function Testimonial() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const resp = await fetch("https://andreawz3.github.io/user_testimonial_api/data/user.json");
      const fetchData = await resp.json();
      setData(fetchData);
    }

    getData();
  }, [])
  
  // console.log("data", data);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Testimonial</p>
      <div className={styles.testimonialCard}>
        {data && data.map((info, index) => {
          return (
              info.id <= 3 ? 
              <div key={index} className={styles.cardInfo}>
                <img className={styles.userImage} src={info.image} alt="user"/>
                <p className={styles.userName}>{info.name.split(" ")[0]}</p>
                <p className={styles.userEmail}>@{info?.email.split('@')[0].toLowerCase()}</p>
                <p className={styles.comments}>{info.comment}</p> 
              </div>
              : ''
            )
          })}
      </div>
    </div>
  )
}