//next
import Image from "next/image";
import Link from "next/link";

//styles
import styles from "./info.module.scss";

const Info = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.header}>
        <h1>
          {" "}
          <img src="/pogo.png" width="200px"></img>
          propose un nouveau mode de transport pour{" "}
          <span> un monde meilleur !</span>
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <img
            src="/electricity.png"
            className={styles.icon}
            style={{ marginBottom: "20px" }}
          ></img>
          <p>100% Électrique </p>
          {/* <span>
            Profitez d'une expérience de conduite électrique et ultra
            authentique à 0% vibration 0% bruit 0% odeur de carburant et 100%
            Fun !
          </span> */}
        </div>
        <div className={styles.info}>
          <img
            src="/speedometer.png"
            className={styles.icon}
            style={{ marginBottom: "20px" }}
          ></img>
          <p> Rapide </p>
          {/* <span>
            Conduisez les véhicules POGO et ne craignez plus d'être coincé aux
            embouteillages. Ce qui vous permettra d'être 57% plus rapide que
            n'importe quel autre moyen de transport urbain.
          </span> */}
        </div>
        <div className={styles.info}>
          <img
            src="/smartphone.png"
            className={styles.icon}
            style={{ marginBottom: "20px" }}
          ></img>
          <p>  Digital </p>
          {/* <span>
            Votre téléphone est votre nouvelle clé. Démarrez, mettez en pause et
            éteignez votre véhicule à travers un seul clique sur notre App POGO.
          </span> */}
        </div>
        <div className={styles.info}>
          <img src="/money-bag.png" className={styles.icon} width="150px"></img>
          <p>   Economique</p>
          {/* <span>
            POGO propose le meilleur moyen de transport urbain ! Au prix le plus
            bas du marché !
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Info;
