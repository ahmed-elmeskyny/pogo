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
            <span>Localisez votre scooter POGO </span>
          </div>
          {isone ? (
            <p>
              Repérez dans l’application le parking POGO le plus proche de vous.
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
            <span>Réservez-le </span>
          </div>
          {istwo ? (
            <p>
              En un simple clic sur l’application, vous pouvez réserver votre
              scooter. Vous disposez de 15 minutes pour le rejoindre et le
              déverrouiller.
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
            <span>Roulez librement </span>
          </div>
          {isthree ? (
            <p>
              Roulez où vous souhaiter dans le périmètre urbain renseigné sur
              l’application tout en respectant le code de la route. Veuillez
              revenir au parking POGO pour terminer votre location.
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
              Une fois parqué sur un parking POGO. Mettez fin à votre location
              via l’application.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Scooter;
