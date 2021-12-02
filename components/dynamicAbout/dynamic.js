//next

//styles
import styles from "./dynamic.module.scss";

//react-icons
import { BsDot } from "react-icons/bs";

const Dynamic = ({ reverse }) => {
  return (
    <div
      className={styles.scooterContainer}
      style={reverse ? { flexDirection: "row-reverse" } : null}
    >
      <div className={styles.scooter}>
        {reverse ? (
          <img src="/trottinette.png"></img>
        ) : (
          <img src="/scooter.png"></img>
        )}
      </div>
      {reverse ? (
        <div
          className={styles.description}
          style={{ backgroundImage: "url(/backgroundScooter1.png" }}
        >
          <div className={styles.type}>
            <BsDot className={styles.icon}></BsDot>
            <span>Trottinette</span>
          </div>
          <h3>
            Profitez de <br></br> <span>nos trottinettes</span>
            <br></br> en libre-service
          </h3>
          <p>
            Avec la trottinette POGO T 100% électrique, roulez doucement,
            confortablement et élégamment
          </p>
          <div className={styles.check}>
            <img src="/check.png" width="25px" height="25px"></img>
            <span>Ultra légère et très pratique </span>
          </div>
          <div className={styles.check}>
            <img src="/check.png" width="25px" height="25px"></img>
            <span>Facilement pliable et portable </span>
          </div>
          <div className={styles.check}>
            <img src="/check.png" width="25px" height="25px"></img>
            <span>Puissante et monte facilement les pentes </span>
          </div>
        </div>
      ) : (
        <div
          className={styles.description}
          style={{ backgroundImage: "url(/backgroundScooter1.png)" }}
        >
          <div className={styles.type}>
            <BsDot className={styles.icon}></BsDot>
            <span>Scooter</span>
          </div>
          <h3>
            Profitez de <br></br>
            <span>nos scooters</span> <br></br> en libre-service
          </h3>
          <p>
            Avec le scooter POGO S 100% électrique, roulez en toute élégance, en
            toute sécurité, sans polluer l’environnement !{" "}
          </p>
          <div className={styles.check}>
            <img src="/check.png" width="25px" height="25px"></img>
            <span>Prise pour charger votre téléphone </span>
          </div>
          <div className={styles.check}>
            <img src="/check.png" width="25px" height="25px"></img>
            <span>Crochet pour porter votre sac ou cartable </span>
          </div>
          <div className={styles.check}>
            <img src="/check.png" width="25px" height="25px"></img>
            <span>Dossier pour une balade confortable à deux </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dynamic;
