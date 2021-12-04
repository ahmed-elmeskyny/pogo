//react
import { useState } from "react";

//styles
import styles from "./scooter.module.scss";

const Scooter = () => {
  const [isone, setone] = useState(true);
  const [istwo, settwo] = useState(false);
  const [isthree, setthree] = useState(false);
  const [isfour, setfour] = useState(false);

  return (
    <div className={styles.scooterContainer}>
      <div className={styles.scooter}>
        {isone ? <img src="/1.png" width="700px" height="500px"></img> : null}
        {istwo ? <img src="/2.png" width="700px" height="500px"></img> : null}
        {isthree ? <img src="/3.png" width="700px" height="500px"></img> : null}
        {isfour ? <img src="/4.png" width="700px" height="500px"></img> : null}
      </div>
      <div className={styles.hows}>
        <div
          className={styles.how}
          onClick={() => {
            setone(true);
            settwo(false);
            setthree(false);
            setfour(false);
          }}
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
          onClick={() => {
            setone(false);
            settwo(true);
            setthree(false);
            setfour(false);
          }}
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
          onClick={() => {
            setone(false);
            settwo(false);
            setthree(true);
            setfour(false);
          }}
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
          onClick={() => {
            setone(false);
            settwo(false);
            setthree(false);
            setfour(true);
          }}
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
