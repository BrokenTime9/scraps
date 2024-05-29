"use client";

import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function Card({ array }) {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      onClick={() => {
        router.push(array.link);
      }}
    >
      <img className={styles.img} src={array.src} alt={array.name} />
      <div className={styles.info}>
        <div>
          <h3>{array.name}</h3>
          <p>{array.name}</p>
        </div>
      </div>
    </div>
  );
}
