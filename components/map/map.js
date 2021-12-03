//next

//styles
import styles from "./map.module.scss";

const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <h1 className={styles.title}>Où se trouve POGO ? </h1>
      <div className={styles.description}>
        <div>
          <img
            className={styles.img}
            src="map.png"
            width="500px"
            height="500px"
          ></img>
        </div>
        <div className={styles.text}>
          <div>
            <img src="rec.png" width="30px" height="30px"></img>
            <p>Ifrane – Université Al Akhawayn</p>
          </div>
          <div>
            <img src="rec.png" width="30px" height="30px"></img>
            <p>Benguerir – Université Mohammed VI Polytechnique </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
