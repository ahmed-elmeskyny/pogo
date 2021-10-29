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
          <img src="/pogoBlack.png"></img> propose un nouveau mode de transport
          pour <span> un monde meilleur !</span>
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <img src="/ecologique.png" className={styles.icon}></img>
          <span>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </span>
        </div>
        <div className={styles.info}>
          <img
            src="/easy.png"
            style={{ marginLeft: "20px" }}
            className={styles.icon}
          ></img>
          <span>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </span>
        </div>
        <div className={styles.info}>
          <img src="/secure.png" className={styles.icon}></img>
          <span>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </span>
        </div>
        {/* <div className={styles.info}>
          <img src="/smartphone.png" className={styles.icon}></img>
          <span>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Info;
