import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <>
            <div className={styles["not-found"]}>
                <h1 className={styles["title"]}>お探しのページが見つかりません。</h1>
                <Link to={`/`}>Topに戻る</Link>
            </div>
        </>
    );
};

export default NotFound;