"use client";

import styles from "./styles.module.css";
import { useRouter, usePathname } from "next/navigation";

export default function Card({ array }) {
  const router = useRouter();

  const pathname = usePathname();

  const imageName = array.name.toLowerCase();

  return (
    <div
      className={styles.card}
      onClick={() => {
        router.push(pathname + "/" + array.name);
      }}
    >
      <img
        className={styles.img}
        src={`/images/states/${imageName}.jpg`}
        alt={array.name}
      />
      <div className={styles.info}>
        <div>
          <h3>{array.name}</h3>
        </div>
      </div>
    </div>
  );
}
