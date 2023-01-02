import { Link } from "react-router-dom";
import styles from "./Sample.module.css";

const Sample = () => {
  
  

  // return内は JSX による記述
  return (
    <>
        <div className={styles["sample"]}>
          <div>
            <button className={styles["change-color-btn"]} onClick={ setBackGroundRed }>背景色を赤系統に設定</button>
            <button className={styles["change-color-btn"]} onClick={ setBackGroundGreen }>背景色を緑系統に設定</button>
            <button className={styles["change-color-btn"]} onClick={ setBackGroundBlue }>背景色を青系統に設定</button>
          </div>
          <input type="number" min="0" max="16777216" placeholder="0~16777216の整数値を入力してください"/>
          <h1 className={styles["red"]}>This is sample.</h1>
          <h1 className={styles["green"]}>This is sample.</h1>
          <h1 className={styles["blue"]}>This is sample.</h1>
          <div>
              <Link to={`/`} className={styles["nav"]}>Topに戻る</Link>
              <Link to={`/question/`} className={styles["nav"]}>適色診断</Link>
              <Link to={`/omikuji/`} className={styles["nav"]}>おみくじ</Link>
          </div>
        </div>

    </>
  );
};

export default Sample;



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

function setBackGroundRed() {
  const bg = document.getElementById("randomBackGround");

  const red = getRandomColor(0, 256);
  const green = getRandomColor(0, red);
  const blue = getRandomColor(0, red);

  const randomColor = decimalToHexadecimal(red, 2)
                    + decimalToHexadecimal(green, 2)
                    + decimalToHexadecimal(blue, 2);

  bg.style.backgroundColor = '#' + randomColor;
  setTitleColor( red, green, blue );
  console.log(randomColor)
}

function setBackGroundGreen() {
  const bg = document.getElementById("randomBackGround");
  bg.style.width = '100vw';
  bg.style.height = '100vh';

  const green = getRandomColor(0, 256);
  const red = getRandomColor(0, green);
  const blue = getRandomColor(0, green);

  const randomColor = decimalToHexadecimal(red, 2)
                    + decimalToHexadecimal(green, 2)
                    + decimalToHexadecimal(blue, 2);

  bg.style.backgroundColor = '#' + randomColor;
  setTitleColor( red, green, blue );
  console.log(randomColor)
}

function setBackGroundBlue() {
  const bg = document.getElementById("randomBackGround");

  const blue = getRandomColor(0, 256);
  const red = getRandomColor(0, blue);
  const green = getRandomColor(0, blue);

  const randomColor = decimalToHexadecimal(red, 2)
                    + decimalToHexadecimal(green, 2)
                    + decimalToHexadecimal(blue, 2);

  bg.style.backgroundColor = '#' + randomColor;
  setTitleColor( red, green, blue );
  console.log(randomColor)
}

function setTitleColor(r, g, b) {
  const ave = ( r + g + b ) / 3;
  const title = document.getElementById("title");
  const q = document.getElementsByClassName("question");
  const q_name = document.getElementsByClassName("question-name");

  if( ave > 211 || ( r > 201 || g > 201 || b > 201 ) ){
    title.style.color = '#000000';
    for( var i = 0; i < q.length; i++){
      q[i].style.color = '#000000';
    }
  } else {
    title.style.color = '#ffffff';
    for( var i=0; i<q.length; i++ ){
      q[i].style.color = '#ffffff';
    }
  }

  for( var i=0; i<q_name.length; i++ ){
    q_name[i].style.marginBottom = '2vh';
  }

}