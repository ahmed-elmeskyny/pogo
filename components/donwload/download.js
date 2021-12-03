//next

//styles
import styles from "./download.module.scss";

//react-ion
import { AiFillApple } from "react-icons/ai";

const Download = ({ style, white, footer, width }) => {
  return (
    <div className={styles.badgecontainer} style={style}>
      <div
        className={styles.store}
        style={
          white
            ? { backgroundColor: "#03d3b9", color: "white", width: width }
            : null
        }
      >
        <img src="/playstore.png" height="30px" width="30px"></img>
        <div className={styles.storeText}>
          <span>DISPONIBLE SUR</span>
          <h3 style={footer ? { fontSize: "15px" } : null}>Google Play</h3>
        </div>
      </div>
      <div
        className={styles.store}
        style={
          white
            ? { backgroundColor: "#03d3b9", color: "white", width: width }
            : null
        }
      >
        <img src="/apple.png" height="30px" width="30px"></img>
        <div className={styles.storeText}>
          <span>DISPONIBLE SUR</span>
          <h3 style={footer ? { fontSize: "15px" } : null}>App Store</h3>
        </div>
      </div>
    </div>
  );
};

export default Download;
