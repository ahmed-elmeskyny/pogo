//marquee
import Marquee from "react-fast-marquee";

//style
import styles from "./marquee.module.scss";

const Partenaire = () => {
  return (
    <Marquee>
      <div>
        <img
          src="/allianz.png"
          width="150px"
          height="150px"
          className={styles.partner}
        ></img>
      </div>
      <div>
        <img
          src="/aloula.png"
          width="100px"
          height="100px"
          className={styles.partner}
        ></img>
      </div>
      <div>
        <img
          src="/bp.png"
          width="100px"
          height="100px"
          className={styles.partner}
        ></img>
      </div>
      <div>
        <img
          src="/ccg.png"
          width="100px"
          height="100px"
          className={styles.partner}
        ></img>
      </div>

      <div>
        <img
          src="/emob.png"
          width="200px"
          height="100px"
          className={styles.partner}
        ></img>
      </div>
    </Marquee>
  );
};

export default Partenaire;
