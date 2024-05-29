"use client";

import React from "react";
import Card from "./components/card/card";
import cards from "@/data/cardData";
import styles from "./styles.module.css";

export default function Card_page() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heading}>Discover India With Adrenaline Junkie</h1>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <Card key={index} array={card} />
        ))}
      </div>
    </div>
  );
}
