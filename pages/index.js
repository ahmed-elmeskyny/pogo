//next
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//styles
import styles from "../styles/Home.module.scss";

//components
import Layout from "../components/layout/layout";
import Download from "../components/donwload/download";
import Info from "../components/info/info";
import Partenaire from "../components/marquee/marquee";

//react-icons
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsFillPhoneFill, BsDot } from "react-icons/bs";
import Dynamic from "../components/dynamicAbout/dynamic";
import Scooter from "../components/scooter/scooter";
import Map from "../components/map/map";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>POGO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" />
      </Head>

      <Layout>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <div className={styles.text}>
              <h1>
                <p>
                  Avec
                  <span>
                    <img
                      src="/pogo.png"
                      width="125px"
                      height="35px"
                      style={{ marginBottom: "-5px" }}
                    ></img>
                  </span>
                  ,la location d’un scooter n’a jamais été aussi simple !
                </p>
              </h1>
              <div className={styles.description}>
                {" "}
                <p>
                  Téléchargez notre application <span>POGO </span>et profitez de
                  la conduite de nos scooters modernes et écologiques dès
                  aujourd’hui !
                </p>
              </div>
              <Download
              // height="70px"
              // width="170px"
              // style={{ marginTop: "30px" }}
              ></Download>
            </div>
          </div>
          <div className={styles.mockup}>
            <img src="/mockup.png"></img>
          </div>
        </div>

        <div className={styles.scrollContainer}>
          <h3> EMBRACE </h3>
          <h3>THE REVOLUTION</h3>
        </div>

        <Info></Info>
        <h1 className={styles.title}>Notre flotte</h1>
        <h2 className={styles.sousTitle}>0 émission 0 bruit 0 odeur</h2>
        <Dynamic></Dynamic>

        <Dynamic reverse></Dynamic>
        <Map></Map>
        <h1 className={styles.title}>
          Louez un scooter n’a jamais été aussi simple !{" "}
        </h1>
        <Scooter></Scooter>
        <h1 className={styles.title}>Combien ça coûte ?</h1>
        <h2 className={styles.sousTitle1}>
          <div>
            <img src="/abonnement.png" width="35px" height="35px"></img>{" "}
            <p>Pas d’abonnement</p>
          </div>
          <div>
            <img src="/engagement.png" width="35px" height="35px"></img>{" "}
            <p>Pas d’engagement</p>
          </div>{" "}
          <div>
            <img src="/minute.png" width="35px" height="35px"></img>{" "}
            <p>Paiement à la minute </p>
          </div>
        </h2>
        <div className={styles.description}>
          <div className={styles.des}>
            {/* <div className={styles.type}>
              <BsDot className={styles.icon}></BsDot>
              <span>Nos tarifs</span>
            </div> */}
            <h3>
              Lorem ipsum <span>is simply dummy</span> text of the printing
            </h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <a href="/tarif"> En savoir plus sur nos packs </a>
          </div>
          <div className={styles.tarif}>
            <h2>titre</h2>
            <span>sous-titre</span>
            <img src="clock.png" width="105px" height="105px"></img>
            <p className={styles.price}> 0.89 DH</p>
            <p>
              {" "}
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
            </p>
            <div className={styles.check}>
              <img src="/check.png" width="25px" height="25px"></img>
              <span>Lorem Ipsum is simply dummy text of </span>
            </div>
            <div className={styles.check}>
              <img src="/check.png" width="25px" height="25px"></img>
              <span>Lorem Ipsum is simply dummy text of </span>
            </div>
            <div className={styles.check}>
              <img src="/check.png" width="25px" height="25px"></img>
              <span>Lorem Ipsum is simply dummy text of </span>
            </div>
          </div>
        </div>

        <h1 className={styles.title}>Nos partenaires</h1>
        <Partenaire></Partenaire>
      </Layout>
    </div>
  );
}
