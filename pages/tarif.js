//next
import Head from "next/head";
import Image from "next/image";

//styles
import styles from "../styles/tarif.module.scss";

//components
import Layout from "../components/layout/layout";
import App from "../components/app/app";

//react-icons
import { AiOutlineRight } from "react-icons/ai";

export default function Tarif() {
  return (
    <div className={styles.container}>
      <Head>
        <title>POGO || Nos Tarifs</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.aboutContainer}>
          <div className={styles.filter}>
            <div className={styles.description}>
              <h1>NOS TARIFS</h1>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p> */}
            </div>
            {/* <div className={styles.page}>
              <p>Home</p>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>
              <p>Nos Tarifs</p>
            </div> */}
          </div>
        </div>
        <div className={styles.mission}>
          {/* <h1 className={styles.title}>Tarifs POGO</h1> */}
          <p>
            Pas d’abonnement, pas d’engagement. Vous ne payez que vos minutes de
            location avec POGO !
          </p>
        </div>
        <div className={styles.tarifContainer}>
          <div className={styles.text}>
            <h1>
              Achetez un Pack POGO et profitez de bonus allant jusqu’à 50 DH
            </h1>
          </div>
          <div className={styles.packs}>
            <div className={styles.tarif}>
              <h2>POGO Pack 50</h2>
              <img src="pack50.png" width="110px" height="110px"></img>
              <p className={styles.price}>5 DH offerts </p>
              <p>
                Pour chaque 50 DH rechargés, vous bénéficiez de
                <strong> 55 DH </strong> de solde{" "}
              </p>
              <div className={styles.checkContainer}>
                <div className={styles.check}>
                  <img src="/check1.png" width="25px"></img>
                  <span>
                    Le solde est valable 15 jours après l’achat du pack
                  </span>
                </div>
                <div className={styles.check}>
                  <img src="/check1.png" width="25px"></img>
                  <span>Protection 100% du conducteur et du passager</span>
                </div>
                <div className={styles.check}>
                  <img src="/check1.png" width="25px"></img>
                  <span>Assurance Responsabilité Civile </span>
                </div>
              </div>
            </div>

            <div className={styles.tarif}>
              <h2>POGO Pack 100</h2>

              <img src="pack100.png" width="110px" height="110px"></img>
              <p className={styles.price}> 20 DH offerts </p>

              <p>
                Pour chaque 100 DH rechargés, vous bénéficiez de{" "}
                <strong> 120 DH </strong> de solde
              </p>
              <div className={styles.checkContainer}>
                <div className={styles.check}>
                  <img src="/check1.png" width="25px"></img>
                  <span>
                    Le solde est valable 30 jours après l’achat du pack
                  </span>
                </div>
                <div className={styles.check}>
                  <img src="/check1.png" width="25px"></img>
                  <span>Protection 100% du conducteur et du passager</span>
                </div>
                <div className={styles.check}>
                  <img src="/check1.png" width="25px"></img>
                  <span>Assurance Responsabilité Civile </span>
                </div>
              </div>
            </div>

            <div className={styles.tarif}>
              <h2>POGO Pack 200</h2>

              <img src="pack200.png" width="110px" height="110px"></img>
              <p className={styles.price}>50 DH offerts </p>

              <p>
                {" "}
                Pour chaque 200 DH rechargés, vous bénéficiez de{" "}
                <strong>250 DH </strong>de solde
              </p>
              <div className={styles.checkContainer}>
                <div className={styles.check}>
                  <img src="/check1.png" width="25px"></img>
                  <span>
                    Le solde est valable 45 jours après l’achat du pack
                  </span>
                </div>
                <div className={styles.check}>
                  <img src="/check1.png" width="25px"></img>
                  <span>Protection 100% du conducteur et du passager</span>
                </div>
                <div className={styles.check}>
                  <img src="/check1.png" width="25px"></img>
                  <span>Assurance Responsabilité Civile </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className={styles.title}>Votre assurance</h1>
        <div className={styles.assurance}>
          <div className={styles.description}>
            <p>
              {" "}
              <span> La sécurité </span> et le bien-être des utilisateurs de nos
              services est <span>la priorité numéro 1 </span>de POGO.
            </p>
            <p>
              {" "}
              Afin de protéger la communauté POGO, nous collaborons avec l’un
              des meilleurs fournisseurs d’assurance dans le monde entier,
              Allianz, pour que vous soyez 100% assurés en conduisant un
              véhicule POGO.
            </p>
            <p style={{ textAlign: "center" }}>
              {" "}
              <em>En partenariat avec</em>
            </p>
            <div>
              <img src="/allianz.png"></img>
            </div>
          </div>
          <div className={styles.img}></div>
        </div>
        <App></App>
      </Layout>
    </div>
  );
}
