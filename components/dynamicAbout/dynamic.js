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
          <img src="/trotinette.png"></img>
        ) : (
          <img src="/scooter.png"></img>
        )}
      </div>
      <div
        className={styles.description}
        style={
          reverse
            ? { backgroundImage: "url(/backgroundTrotinette.png)" }
            : { backgroundImage: "url(/backgroundScooter.png)" }
        }
      >
        <div className={styles.type}>
          <BsDot className={styles.icon}></BsDot>
          {reverse ? <span>Trottinette</span> : <span>Scooter</span>}
        </div>
        <h3>
          Profitez de <span>nos scooters</span> en libre-service
        </h3>
        <p>It is a long established fact that a reader will be distracted</p>
        <div className={styles.check}>
          <img src="/check.png" width="25px" height="25px"></img>
          <span>Lorem Ipsum is simply dummy text of the printing </span>
        </div>
        <div className={styles.check}>
          <img src="/check.png" width="25px" height="25px"></img>
          <span>Readable content of a page when looking at its </span>
        </div>
        <div className={styles.check}>
          <img src="/check.png" width="25px" height="25px"></img>
          <span>The standard chunk of Lorem Ipsum used since the 1500s </span>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;
