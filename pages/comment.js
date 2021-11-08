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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
            <div className={styles.page}>
              <p>Home</p>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>
              <p>Comment ça marche</p>
            </div>
          </div>
        </div>
        <How></How>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            <h1>Un casque prêt à porter</h1>
            <p>
              Un casque homologué est à votre disposition sous la selle. Vous
              trouverez également des charlottes en papier pour l’hygiène. Si
              vous disposez de votre propre casque, libre à vous de l’utiliser !
            </p>
          </div>
          <div className={styles.img}>
            <img src="helmet.svg"></img>
          </div>
        </div>
        <div className={styles.descriptionContainer1}>
          <div className={styles.description}>
            <h1>Un scooter électrique toujours chargér</h1>
            <p>
              Cityscoot s’occupe de tout en allant recharger le scooter là où
              vous l’avez garé.
            </p>
            <p>
              Nos équipes tournent jour et nuit à bord de camionnettes
              électriques pour intervenir rapidement et discrètement.
            </p>
            <p>
              Vous n’aurez donc jamais à vous soucier de brancher un scooter !
            </p>
          </div>
          <div className={styles.img}>
            <img src="battery.svg"></img>
          </div>
        </div>
        <App></App>
      </Layout>
    </div>
  );
}
