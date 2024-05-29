"use client";

import { useParams, useRouter } from "next/navigation";
import directions from "@/data/directions/index.js";
import Card from "./components/card/index";
import styles from "./styles.module.css";

export default function Direction() {
  const params = useParams();
  const { direction } = params;
  const router = useRouter();

  // state image card blah blah balh data
  return (
    <div className={styles.flexContainer}>
      {directions[direction].map((state, index) => {
        return <Card array={state} key={index} />;
      })}
    </div>
  );
}
