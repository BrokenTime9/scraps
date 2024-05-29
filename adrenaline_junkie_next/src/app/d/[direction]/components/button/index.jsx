"use client";
import styles from "./styles.module.css";
import Link from "next/link";

export default function ButtonSmall({ link }) {
  return (
    <Link href={link}>
      <button type="button" className={styles.buttonSmall}>
        Learn more
      </button>
    </Link>
  );
}
