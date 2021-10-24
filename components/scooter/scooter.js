//react
import { useState } from "react";

//styles
import styles from "./scooter.module.scss";

const Scooter = () => {
  const [isone, setone] = useState(false);
  const [istwo, settwo] = useState(false);
  const [isthree, setthree] = useState(false);
  const [isfour, setfour] = useState(false);

  return (
    <div className={styles.scooterContainer}>
      <div className={styles.scooter}></div>
      <div className={styles.hows}>
        <div
          className={styles.how}
          onMouseEnter={() => setone(true)}
          onMouseLeave={() => setone(false)}
        >
          <div className={styles.header}>
            <img src="/number1.png" width="50px" height="50px"></img>
            <span>Trouvez votre Scooter pogo</span>
          </div>
          {isone ? (
            <p>
              Il y en a toujours un près de vous ! Repérez dans l’application le
              scooter le plus proche ou autour de l’adresse de votre choix.
            </p>
          ) : null}
        </div>
        <div
          className={styles.how}
          onMouseEnter={() => settwo(true)}
          onMouseLeave={() => settwo(false)}
        >
          <div className={styles.header}>
            <img src="/number2.png" width="50px" height="50px"></img>
            <span>Réservez-le en un clic</span>
          </div>
          {istwo ? (
            <p>
              Il y en a toujours un près de vous ! Repérez dans l’application le
              scooter le plus proche ou autour de l’adresse de votre choix.
            </p>
          ) : null}
        </div>
        <div
          className={styles.how}
          onMouseEnter={() => setthree(true)}
          onMouseLeave={() => setthree(false)}
        >
          <div className={styles.header}>
            <img src="/number3.png" width="50px" height="50px"></img>
            <span>Roulez librement</span>
          </div>
          {isthree ? (
            <p>
              Il y en a toujours un près de vous ! Repérez dans l’application le
              scooter le plus proche ou autour de l’adresse de votre choix.
            </p>
          ) : null}
        </div>
        <div
          className={styles.how}
          onMouseEnter={() => setfour(true)}
          onMouseLeave={() => setfour(false)}
        >
          <div className={styles.header}>
            <img src="/number4.png" width="50px" height="50px"></img>
            <span>Terminez la location</span>
          </div>
          {isfour ? (
            <p>
              Il y en a toujours un près de vous ! Repérez dans l’application le
              scooter le plus proche ou autour de l’adresse de votre choix.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Scooter;
