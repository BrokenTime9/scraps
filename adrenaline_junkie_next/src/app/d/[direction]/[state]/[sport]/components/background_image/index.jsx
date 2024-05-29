"use client";

import styles from "./styles.module.css";

export default function Background({ imgData, data }) {
  const img = `/images/sports/${imgData}.jpg`;
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={img} alt={Object.values(imgData)} />
        <div className={styles.text}>
          <h3>Sport:{data.location}</h3>
          <hr />
          <p>Price range:{data.price}</p>
        </div>
      </div>
      <div>
        <p>Detailed Location:{data.locationDetailed}</p>
        <p>Best Season:{data.season}</p>
        <p>Weather Conditions:{data.weather}</p>
      </div>
    </>
  );
}
