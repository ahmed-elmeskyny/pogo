//next
import Head from "next/head";
import Image from "next/image";

//styles
import styles from "../styles/apropos.module.scss";

//components
import Layout from "../components/layout/layout";

//react-icons
import { AiOutlineRight } from "react-icons/ai";

export default function Apropos() {
  return (
    <div className={styles.container}>
      <Head>
        <title>POGO || À propos</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.aboutContainer}>
          <div className={styles.filter}>
            <div className={styles.description}>
              <h1>À PROPOS</h1>
            </div>
            {/* <div className={styles.page}>
              <p>Home</p>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>
              <p>À propos</p>
            </div> */}
          </div>
        </div>

        <div className={styles.mission}>
          <h1 className={styles.title}>Qui sommes-nous ? </h1>
          <p>
            POGO est une start-up qui a été lancée en 2021 par une équipe de
            jeunes entrepreneurs marocains, ambitieux, souhaitant métamorphoser
            et digitaliser la mobilité urbaine au Maroc. Notre ambition est de
            simplifier la mobilité urbaine et de rapprocher la mobilité
            électrique au plus grand nombre de citoyens.
          </p>
        </div>
        <div className={styles.mission1}>
          <h1 className={styles.title1}>D’où vient l’idée POGO ? </h1>
          <p>
            <span>POGO </span>(<span>P</span>eople <span>O</span>n the{" "}
            <span>GO</span>) signifie les gens extrêmement actifs, en constant
            mouvement, dans les deux sens de l’expression : les gens qui se
            déplacent, et les gens qui cherchent constamment à se développer et
            s’améliorer. Puisque nous estimons que toute communauté mérite une
            mobilité intelligente et à la portée de tous, nous mettons à la
            disposition de la communauté POGO des véhicules électriques
            (scooters et trottinettes) en libre-service à la location courte
            durée. Nous visons à réduire la dépendance sur les voitures
            personnelles pour les transportations à courte distance afin de
            limiter les émissions de CO2 et de gaz à effet de serre.
          </p>
        </div>
        <div className={styles.mission}>
          <h1 className={styles.title}>Notre mission ? </h1>
          <p>
            Au vu des problèmes climatiques de notre époque, un changement dans
            les comportements habituels vis-à-vis de l’environnement doit être
            fait. La mission de POGO est la transformation des villes marocaines
            progressivement en des villes durables et intelligentes qui
            respectent les grands principes de la mobilité et du développement
            durable. Ainsi que la contribution au développement social,
            économique et écologique de notre pays.
          </p>
        </div>
        <h1 className={styles.title}>Ce qui nous définit ?</h1>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <div
              className={styles.img}
              style={{ backgroundImage: "url(/bg.jpg)" }}
            >
              <div className={styles.filter}></div>
            </div>
            <div className={styles.description}>
              <div className={styles.filter}>
                <span>Engagement </span>
                <div></div>
                <p>
                  Nous nous engageons à offrir la meilleure expérience de
                  micromobilité possible dans chaque ville où nous proposons nos
                  services.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.info1}>
            <div
              className={styles.img}
              style={{ backgroundImage: "url(/bg1.jpg)" }}
            >
              <div className={styles.filter}></div>
            </div>
            <div className={styles.description}>
              <div className={styles.filter}>
                <span>Communauté </span>
                <div></div>
                <p>
                  Nous créons des offres d’emploi localement et travaillons en
                  partenariat avec des organisations de haut calibre afin
                  d’améliorer la vie urbaine dans les villes marocaines.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <div
              className={styles.img}
              style={{ backgroundImage: "url(/bg2.jpg)" }}
            >
              <div className={styles.filter}></div>
            </div>
            <div className={styles.description}>
              <div className={styles.filter}>
                <span>Technologie </span>
                <div></div>
                <p>
                  Notre volonté de conduire la micromobilité vers l'avenir nous
                  place à la pointe du transport urbain propre et accessible.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.info1}>
            <div
              className={styles.img}
              style={{ backgroundImage: "url(/bg4.jpg)" }}
            >
              <div className={styles.filter}></div>
            </div>
            <div className={styles.description}>
              <div className={styles.filter}>
                <span>Confiance </span>
                <div></div>
                <p>
                  Nous croyons fortement en la transparence et la
                  responsabilité, et nous faisons de notre mieux afin d'offrir
                  la meilleure expérience client chaque jour.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.fin}> Changeons nos villes ! Ensemble !</p>
      </Layout>
    </div>
  );
}
