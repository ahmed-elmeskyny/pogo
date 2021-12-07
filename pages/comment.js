//next
import Head from "next/head";

//styles
import styles from "../styles/comment.module.scss";

//components
import Layout from "../components/layout/layout";
import How from "../components/how/how";

//react-icons
import { AiOutlineRight } from "react-icons/ai";
import App from "../components/app/app";

export default function Comment() {
  return (
    <div className={styles.container}>
      <Head>
        <title>POGO || Comment ça Marche </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" />
      </Head>

      <Layout>
        <div className={styles.aboutContainer}>
          <div className={styles.filter}>
            <div className={styles.description}>
              <h1>Comment ça marche</h1>
            </div>
            {/* <div className={styles.page}>
              <p>Home</p>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>
              <p>Comment ça marche</p>
            </div> */}
          </div>
        </div>
        <How></How>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            <h1>Un casque mis à votre disposition </h1>
            <p>
              POGO met à votre disposition un casque homologué pour vous
              protéger. Vous pouvez cependant utiliser votre propre casque si
              vous le souhaitez.
            </p>
          </div>
          <div className={styles.img}>
            {/* <img src="helmet.jpg" width="500px"></img> */}
          </div>
        </div>
        <div className={styles.descriptionContainer1}>
          <div className={styles.description}>
            <h1>Un véhicule électrique toujours chargé </h1>
            <p>
              Les parkings POGO sont dotés de stations de recharges des
              batteries, les véhicules POGO sont chargés en permanence. Ils sont
              utilisables 24h/24, 7j/7.
            </p>
          </div>
          <div className={styles.img}>
            {/* <img src="battery.svg"></img> */}
          </div>
        </div>
        <App></App>
      </Layout>
    </div>
  );
}
