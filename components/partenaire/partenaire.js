//marquee
import Marquee from "react-fast-marquee";

//style
import styles from "./partenaire.module.scss";

const Partenaire = () => {
  return (
    <Marquee>
      <div>
        <img
          src="/allianz.png"
          alt="partenaire de pogo allianz"
          width="150px"
          height="150px"
          className={styles.partner}
        ></img>
      </div>
      <div>
        <img
          src="/aloula.png"
          alt="partenaire de pogo aloula"
          width="100px"
          height="100px"
          className={styles.partner}
        ></img>
      </div>
      <div>
        <img
          src="/bp.png"
          alt="partenaire de pogo banque populaire"
          width="100px"
          height="100px"
          className={styles.partner}
        ></img>
      </div>
      <div>
        <img
          src="/ccg.png"
          alt="partenaire de pogo "
          width="100px"
          height="100px"
          className={styles.partner}
        ></img>
      </div>

      <div>
        <img
          src="/emob1.png"
          width="200px"
          height="100px"
          className={styles.partner}
        ></img>
      </div>
    </Marquee>
  );
};

export default Partenaire;
