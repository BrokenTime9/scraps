"use client";
import styles from "./styles.module.css";
import Link from "next/link";

export default function ButtonSmall({ link }) {
  return (
    <Link href={link} className={styles.buttonSmall}>
      Learn more
    </Link>
  );
}
