"use client";

import style from "./styles.module.css";
import ButtonSmall from "../button";

export default function Hero_image() {
  return (
    <div className={style.image}>
      <div className={style.img_text}>
        <h1>
          Get Ready to Explore India <br />
          With <span>Adrenaline Junkie</span> <br />
        </h1>
      </div>
    </div>
  );
}
