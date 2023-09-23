import { Link } from "react-router-dom";
import styles from "./Top.module.css";

const Top = () => {

  // return内は JSX による記述
  return (
    <>
      <div id="bg">
        <div className={`${styles["top-right"]}`}></div>
        <div className={`${styles["top-left"]}`}></div>
        <div className={`${styles["bottom-left"]}`}></div>
        <div className={`${styles["bottom-right"]}`}></div>
        <div className={`${styles["center-right"]}`}></div>
        <div className={`${styles["center-left"]}`}></div>
      </div>
      <div className={styles["top"]}>
        <div className={`${styles["center"]}`}>
          <h1 className={styles["title"]}>Color Book</h1>
          <nav>
            <Link to={`/question/`} className={styles["nav"]}>適色診断</Link>
            <Link to={`/omikuji/`} className={styles["nav"]}>おみくじ</Link>
            <Link to={`/palette/`} className={styles["nav"]}>パレット</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Top;

function fadeInBubble() {
  setTimeout(3000, )

}