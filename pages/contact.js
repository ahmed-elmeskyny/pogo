//next
import Head from "next/head";
import Image from "next/image";

//styles
import styles from "../styles/contact.module.scss";

//components
import Layout from "../components/layout/layout";

//react-icons
import { BiBuildingHouse, BiBuildings } from "react-icons/bi";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>POGO || Contactez-nous</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" />
      </Head>

      <Layout>
        <div className={styles.aboutContainer}>
          <div className={styles.filter}>
            <div className={styles.description}>
              <h1>CONTACTEZ-NOUS</h1>
            </div>
            {/* <div className={styles.page}>
              <p>Home</p>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>
              <p>Contactez-nous</p>
            </div> */}
          </div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.description}>
            <h1>Contactez-nous</h1>
            <p>
              {" "}
              Vous avez une question, un commentaire ou quelque chose à nous
              signaler ? Nous sommes à votre disposition !
            </p>
            <div className={styles.infoContainer}>
              {/* <div className={styles.info}>
                <div className={styles.icon}>
                  <BiBuildingHouse></BiBuildingHouse>
                </div>
                <div className={styles.text}>
                  <h3>Ifrane</h3>
                  <span>Jl. Raya Canggu No 1, Canggu - 80361</span>
                </div>
              </div> */}
              <div className={styles.info}>
                <div className={styles.icon}>
                  <BiBuildings></BiBuildings>
                </div>
                <div className={styles.text}>
                  <h3>Fès</h3>
                  <span> 209 B Lotissement Riad Rte Meknès - Fès</span>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.icon}>
                  <BsFillTelephoneForwardFill></BsFillTelephoneForwardFill>
                </div>
                <div className={styles.text}>
                  <h3>Appelez-nous</h3>
                  <span>(+212) 695 423 240</span>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.icon}>
                  <MdAttachEmail></MdAttachEmail>
                </div>
                <div className={styles.text}>
                  <h3>Adresse email</h3>
                  <span>
                    <a href="mailto:pogomobility@gmail.com">
                      pogomobility@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactForm}>
            <form>
              <label>Nom</label>
              <input type="text" placeholder="Votre nom"></input>
              <label>Prénom</label>
              <input type="text" placeholder="Votre prénom"></input>
              <label>Email</label>
              <input type="email" placeholder="Votre Email"></input>
              <label>Sujet</label>
              <input type="text" placeholder="....."></input>
              <label>Commentaire / Questions</label>
              <textarea type="email" placeholder="Votre message"></textarea>
              <button>Envoyer le message</button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}
