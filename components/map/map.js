//next

//styles
import styles from "./map.module.scss";

const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <h1 className={styles.title}>Trouvez voter scooter</h1>
      <div className={styles.description}>
        <div className={styles.img}>
          <img src="map1.png" width="350px" height="350px"></img>
        </div>
        <div className={styles.text}>
          <p>
            <img src="rec.png" width="30px" height="30px"></img> Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
          <p>
            <img src="rec.png" width="30px" height="30px"></img> Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
