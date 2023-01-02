import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./Omikuji.module.css";

const Omikuji = () => {

  
  
  
  // RGBについて、それぞれ 0 ~ 256 の値をランダムで設定する
  const randomR = getRandomColor( 0, 255 );
  const randomG = getRandomColor( 0, 255 );
  const randomB = getRandomColor( 0, 255 );
  
  // 各 RGB値 を合わせてカラーを指定する
  const randomColor = decimalToHexadecimal( randomR, 2 )
  + decimalToHexadecimal( randomG, 2 )
  + decimalToHexadecimal( randomB, 2 );
  
  // 画面がリロードされる毎に、全画面の背景色に変数 'randomColor' の値を設定する関数
  useEffect(() => {
    const icon = document.getElementById("refresh-icon");
    icon.style.fontSize = '36px';
    icon.style.display = 'flex';
    icon.style.alignSelf = 'center';
    icon.style.justifyContent = 'center';
    
    const bg = document.getElementById("randomBackGround");
    bg.style.width = '100vw';
    bg.style.height = '100vh';
    bg.style.backgroundColor = '#' + randomColor;
    setTitleColor( randomR, randomG,randomB );
    console.log( randomColor );
  }, []);

  // return内は JSX による記述
  return (
    <div id="randomBackGround">
      <div className={styles["omikuji"]}>
        <div className={styles["contents"]}>
          <button onClick={() => window.location.reload()} className={styles["refresh-btn"]}><span id="refresh-icon" class="material-icons">refresh</span></button>
          <h1 id="color-code-color" className={styles["color-code"]}> #{ randomColor } </h1>
          {/* 下のアイコンは id名 が重複するためスタイル反映されない */}
          <button onClick={() => window.location.reload()} className={styles["refresh-btn"]}><span id="refresh-icon" class="material-icons">refresh</span></button>
        </div>
        <Link to={`/`} className={styles["nav-btn"]}>Topに戻る</Link>
      </div>
    </div>
  );
};

export default Omikuji;

// 引数として与えられた最小・最大値の間の範囲で疑似乱数を生成して返す関数
function getRandomColor( min, max ) {
  const random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  return random;
}

// 10進数表記の値 (decimal) を n 桁の16進数に変換して返す関数
function decimalToHexadecimal( decimal, n ) {
  const hexadecimal = decimal.toString(16).padStart(n, '0');
  return hexadecimal;
}


function setTitleColor(r, g, b) {
  const ave = ( r + g + b ) / 3;
  const codeColor = document.getElementById("color-code-color")
  const iconColor = document.getElementById("refresh-icon")

  if( ave < 150 ){
    codeColor.style.color = '#ffffff';
    iconColor.style.color = '#ffffff';
  } else {
    codeColor.style.color = '#000000';
    iconColor.style.color = '#000000';
  }
}