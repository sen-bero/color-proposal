import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";


const Header = () => {    
    return(
        <nav className={styles["header"]}>
            <Link to="/"><h1 >Color Book</h1></Link>
            <span className={styles["header-nav"]}>
                <Link to="/question" className={styles["header-nav-item"]}><h3>適色診断</h3></Link>
                <Link to="/omikuji" className={styles["header-nav-item"]}><h3>おみくじ</h3></Link>
                <Link to="/palette" className={styles["header-nav-item"]}><h3>パレット</h3></Link>
            </span>
        </nav>
    );
}

export default Header;