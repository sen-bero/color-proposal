import React, { useState } from "react";
import styles from "./RandomRGB.module.css";

export function getRandomColor(min, max) {
  const random = Math.floor(Math.random() * (max + 1 - min)) + min;
  return random;
}

export function decimalToHexadecimal(decimal, n) {
  const hexadecimal = decimal.toString(16).padStart(n, "0");
  return hexadecimal;
}

export const RandomRGB = () => {
  const [currentColor, setCurrentColor] = useState("#000000");

  const setColor = (color) => {
    let red = 0;
    let green = 0;
    let blue = 0;

    switch (color) {
      case "red":
        red = getRandomColor(100, 255);
        green = getRandomColor(0, red - 50);
        blue = getRandomColor(0, red - 50);
        break;
      case "green":
        green = getRandomColor(100, 255);
        red = getRandomColor(0, green - 50);
        blue = getRandomColor(0, green - 50);
        break;
      case "blue":
        blue = getRandomColor(100, 255);
        red = getRandomColor(0, blue - 50);
        green = getRandomColor(0, blue - 50);
        break;
      default:
        break;
    }

    const randomColor =
      decimalToHexadecimal(red, 2) +
      decimalToHexadecimal(green, 2) +
      decimalToHexadecimal(blue, 2);

    setCurrentColor("#" + randomColor);
  };

  return (
    <>
      <div className={styles["main"]}>
        <h1 className={styles["color-code"]}>{currentColor}</h1>
        <div
          id="color-box"
          className={styles["color-box"]}
          style={{ backgroundColor: currentColor }}
        ></div>
      </div>
      <div className={styles["rgb-btns"]}>
        <button className={styles["red-btn"]} onClick={() => setColor("red")}></button>
        <button className={styles["green-btn"]} onClick={() => setColor("green")}></button>
        <button className={styles["blue-btn"]} onClick={() => setColor("blue")}></button>
      </div>
    </>
  );
};

export default RandomRGB;
