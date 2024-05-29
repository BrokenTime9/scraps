"use client";

import Hero_image from "./components/hero_image";
import styles from "./styles.module.css";
import Navbar from "./components/navbar";
import Card_page from "./components/card_page";

export default function home() {
  return (
    <>
      <Hero_image />
      <Card_page />
    </>
  );
}
