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
          <img src="/scooter.png" className={styles.scooterimg}></img>
        )}
      </div>
      {reverse ? (
        <div
          className={styles.description}
          style={{ backgroundImage: "url(/backgroundScooter1.png" }}
        >
          <div className={styles.type}>
            <BsDot className={styles.icon}></BsDot>
            <span>POGO T</span>
          </div>
          <h3>
            Profitez de <span>nos trottinettes</span>
            <br></br> en libre-service
          </h3>
          <p>
            Avec la trottinette <span>POGO T </span>{" "}
            <strong>de haute qualité</strong>, roulez doucement, confortablement
            et élégamment
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
            <span>POGO S</span>
          </div>
          <h3>
            Profitez de
            <span> nos scooters</span> <br></br> en libre-service
          </h3>
          <p>
            Avec le scooter <span>POGO S </span>{" "}
            <strong>de haut calibre</strong>, roulez en toute élégance, en toute
            sécurité, sans polluer l’environnement !{" "}
          </p>
          <div className={styles.check}>
            <img src="/check.png" width="25px" height="25px"></img>

            <span>Conçu pour une balade confortable à 2</span>
          </div>
          <div className={styles.check}>
            <img src="/check.png" width="25px" height="25px"></img>
            <span>Crochet pour porter votre sac ou cartable </span>
          </div>
          <div className={styles.check}>
            <img src="/check.png" width="25px" height="25px"></img>
            <span>Prise pour charger votre téléphone </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dynamic;
