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
            alt="où se trouve pogo "
            width="400px"
          ></img>
        </div>
        <div className={styles.text}>
          <div>
            <img src="rec.png" width="30px" height="30px"></img>
            <p>Fès </p>
          </div>
          <div>
            <img src="rec.png" width="30px" height="30px"></img>
            <p>Marrakech </p>
          </div>
          <div>
            <img src="rec.png" width="30px" height="30px"></img>
            <p>Agadir </p>
          </div>
          <div>
            <img src="rec.png" width="30px" height="30px"></img>
            <p>Ben Guerir </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
