//styles
import styles from "./info.module.scss";

const Info = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoHeader}>
        <h1>
          {" "}
          <img src="/pogo.png" width="200px"></img>
          propose un nouveau mode de transport pour{" "}
          <span> un monde meilleur !</span>
        </h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <img
            src="/electricity.png"
            className={styles.icon}
            style={{ marginBottom: "20px" }}
          ></img>
          <p>100% Électrique </p>

          <span>
            Profitez d'une expérience de conduite électrique et ultra
            authentique à 0% vibration, 0% bruit, 0% odeur de carburant et 100%
            Fun !
          </span>
        </div>
        <div className={styles.info}>
          <img src="/speedometer.png" className={styles.icon1}></img>
          <p> Rapide </p>
          <span>
            Conduisez nos véhicules POGO, évitez les embouteillages et soyez 40%
            plus rapide.
          </span>
        </div>
        <div className={styles.info}>
          <img
            src="/smartphone.png"
            className={styles.icon}
            style={{ marginBottom: "20px" }}
          ></img>
          <p>  Digital </p>
          <span>
            Votre téléphone est votre nouvelle clé. Démarrez, mettez en pause et
            éteignez votre véhicule en un seul clic sur notre App POGO.
          </span>
        </div>
        <div className={styles.info}>
          <img
            src="/money-bag.png"
            style={{ marginBottom: "20px" }}
            className={styles.icon}
          ></img>
          <p>   Economique</p>
          <span>
            POGO propose le meilleur moyen de transport urbain ! Au prix le plus
            bas du marché !
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
