import styles from "./Testimonial.module.css"
import { useEffect, useState } from "react";

export default function Testimonial() {
  const [data, setData] = useState();

  // const options = {
  //   method: 'POST',
  //   url: 'https://data.twingly.net/review/c/search/v1/search',
  //   headers: {
  //     Authorization: 'apikey 7656E6AD-D227-4766-9E7C-3123CAB21D97',
  //     ContentType: 'application/json; charset=utf-8"',
  //     Accept: 'application/json; charset=utf-8'
  //   },
  //   data: {
  //     all: ["hotel", "pool"], 
  //     none: ["cockroach", "bedbug"], 
  //     languages: ["en"], "size": 10, 
  //     published_time: {
  //       since: "2022-09-09T00:00:00Z"
  //     }
  //   }
  // };

  useEffect(() => {
    async function getData() {
      const resp = await fetch("https://jsonplaceholder.typicode.com/comments");
      const fetchData = await resp.json();
      setData(fetchData);
    }

    getData();
  }, [])
  
  console.log("data", data);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Testimonial</p>
      <div className={styles.testimonialCard}>
        {data && data.map((info, index) => {
          return (
              info.id <= 3 ? 
              <div key={index} className={styles.cardInfo}>
                <p>{info?.email.split('@')[0].split('_')}</p>
                <p>@{info?.email.split('@')[0].toLowerCase()}</p>
                <p className={styles.comments}>{info.body}</p> 
              </div>
              : ''
            )
          })}
      </div>
    </div>
  )
}