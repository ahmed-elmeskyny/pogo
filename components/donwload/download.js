//styles
import styles from "./download.module.scss";

const Download = ({ style, white, footer, width }) => {
  return (
    <div className={styles.badgecontainer} style={style}>
      <a
        href="https://play.google.com/store/apps/details?id=com.pogo.sharing.app"
        className={styles.store}
        style={
          white
            ? { backgroundColor: "#03d3b9", color: "white", width: width }
            : null
        }
      >
        <img
          src="/playstore.png"
          alt="application playstore pogo"
          height="30px"
          width="30px"
        ></img>
        <div className={styles.storeText}>
          <span>DISPONIBLE SUR</span>
          <h3 style={footer ? { fontSize: "15px" } : null}>Google Play</h3>
        </div>
      </a>
      <a
        href="https://apps.apple.com/dz/app/pogo-sharing/id1610088371"
        className={styles.store}
        style={
          white
            ? { backgroundColor: "#03d3b9", color: "white", width: width }
            : null
        }
      >
        <img
          src="/apple.png"
          alt="application appstore pogo"
          height="30px"
          width="30px"
        ></img>
        <div className={styles.storeText}>
          <span>DISPONIBLE SUR</span>
          <h3 style={footer ? { fontSize: "15px" } : null}>App Store</h3>
        </div>
      </a>
    </div>
  );
};

export default Download;
