import styles from "./Palette.module.css";
import { Header, RandomRGB } from "../../index.js";

const Palette = () => {
  // return内は JSX による記述
  return (
    <>
      <Header />
      <div id="palette" className={styles["palette"]}>
        <div>
          <RandomRGB />
        </div>
        <input type="number" min="0" max="16777216" placeholder="0~16,777,215の整数値を入力してください" />
      </div>
    </>
  );
};

export default Palette;