"use client";

import styles from "./styles.module.css";
import { useRouter, usePathname } from "next/navigation";

export default function Card({ array }) {
  const router = useRouter();

  const pathname = usePathname();
  const image = array.name;
  const imageName = image.split(" ").join("").toLowerCase();
  const heading = image.slice(0, -2);

  console.log(imageName);

  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={`/images/sports/${imageName}.jpg`}
        alt={image}
      />
      <div className={styles.info}>
        <div>
          <h3>{heading}</h3>
        </div>
      </div>
    </div>
  );
}
