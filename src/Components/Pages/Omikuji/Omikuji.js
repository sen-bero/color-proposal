import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Header, decimalToHexadecimal, getRandomColor } from "../../index.js";
import styles from "./Omikuji.module.css";

const Omikuji = () => {
  const [randomColor, setRandomColor] = useState("#000000");

  // 初回レンダリング時にランダムな色を生成する
  useEffect(() => {
    refreshColor();
  }, []);

  // 画面がリロードされる毎に、全画面の背景色に変数 'randomColor' の値を設定する関数
  useEffect(() => {
    const icon = document.getElementById("refresh-icon");
    icon.style.fontSize = '40px';
    
    const bg = document.getElementById("randomBackGround");
    bg.style.width = '100vw';
    bg.style.height = '100vh';

    bg.style.backgroundColor = randomColor;
    setColorCode(randomColor);
  }, [randomColor]);

  const refreshColor = () => {
    const red = getRandomColor(0, 255);
    const green = getRandomColor(0, 255);
    const blue = getRandomColor(0, 255);
    
    const newRandomColor = decimalToHexadecimal(red, 2)
                         + decimalToHexadecimal(green, 2)
                         + decimalToHexadecimal(blue, 2);

    setRandomColor("#" + newRandomColor);
  }

  function setColorCode(color) {
    const ave = (parseInt(color.substr(1, 2), 16) +
      parseInt(color.substr(3, 2), 16) +
      parseInt(color.substr(5, 2), 16)) / 3;
    const codeColor = document.getElementById("color-code");
    const iconColor = document.getElementById("refresh-icon");

    if (ave < 125) {
      codeColor.style.color = '#ffffff';
      iconColor.style.color = '#ffffff';
    } else {
      codeColor.style.color = '#000000';
      iconColor.style.color = '#000000';
    }
  }

  return (
    <>
      <Header />
      <div id="randomBackGround">
        <div className={styles["omikuji"]}>
          <div className={styles["contents"]}>
            <button onClick={refreshColor} className={styles["refresh-btn"]}>
              <span id="refresh-icon" className="material-icons">refresh</span>
            </button>
            <h1 id="color-code" className={styles["color-code"]}> {randomColor} </h1>
          </div>
          <Link to={`/`} className={styles["nav-btn"]}>Topに戻る</Link>
        </div>
      </div>
    </>
  );
};

export default Omikuji;
