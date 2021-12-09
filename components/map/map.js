//next

//styles
import styles from "./map.module.scss";

const Map = () => {
  return (
    <div className={styles.mapContainer} id={"ou"}>
      <h1 className={styles.title}>Où se trouve POGO ? </h1>
      <div className={styles.description}>
        <div>
          <img
            className={styles.img}
            src="map.png"
            width="400px"
            // height="500px"
          ></img>
        </div>
        <div className={styles.text}>
          <div>
            <img src="rec.png" width="30px" height="30px"></img>
            <p>Fès – 24 scooters et 6 trottinettes </p>
          </div>
          <div>
            <img src="rec.png" width="30px" height="30px"></img>
            <p>Ifrane – 6 scooters et 6 trottinettes </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
