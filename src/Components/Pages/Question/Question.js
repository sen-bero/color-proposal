import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Question.module.css";
import { Header } from "../../index.js"

const Question = () => {

  return (
    <div>
      <Header />
      <div className={styles["bg"]}>
        <div className={styles["question"]}>
          <h3 className={styles["question-name"]}>Q1. 好きな季節は？</h3>
          <div className={styles["choices"]}>
            <div>
              <input type="radio" name="season" value="spring"></input>
              <label>春</label>
            </div>
            <div>
              <input type="radio" name="season" value="summer"></input>
              <label>夏</label>
            </div>
            <div>
              <input type="radio" name="season" value="autumn"></input>
              <label>秋</label>
            </div>
            <div>
              <input type="radio" name="season" value="winter"></input>
              <label>冬</label>
            </div>
          </div>
        </div>

        <div className={styles["question"]}>
          <h3 className={styles["question-name"]}>Q2. 決断力がある？</h3>
          <div className={styles["choices"]}>
            <div>
              <input type="radio" name="determination" value="o"></input>
              <label>決断力がある</label>
            </div>
            <div>
              <input type="radio" name="determination" value="x"></input>
              <label>優柔不断だと思う</label>
            </div>
          </div>
        </div>      
          
        <div className={styles["question"]}>
          <h3 className={styles["question-name"]}>Q3. この中で好きな色は？</h3>
          <div className={styles["choices"]}>
            <div>
              <input type="radio" name="select-rgb" value="red"></input>
              <label>赤</label>
            </div>
            <div>
              <input type="radio" name="select-rgb" value="blue"></input>
              <label>青</label>
            </div>
            <div>
              <input type="radio" name="select-rgb" value="green"></input>
              <label>緑</label>
            </div>
          </div>
        </div>
        <Link to={`/`}>Topに戻る</Link>
      </div>
    </div>
  );
};

export default Question;