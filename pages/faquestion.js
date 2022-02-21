//next
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

//styles
import styles from "../styles/faq.module.scss";

//components
import Layout from "../components/layout/layout";

//questions
import questions from "../questions/quest";

export default function faq() {
  const router = useRouter();
  const [categorie, setCategorie] = useState("informations generales");
  const [question, setquestion] = useState(
    questions.filter(
      (question) => question.categorie == "informations generales"
    )
  );
  return (
    <div></div>
    // <div className={styles.container}>
    //   <Head>
    //     <title>POGO || FAQ ? </title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" />
    //   </Head>

    //   <Layout>
    //     <div className={styles.aboutContainer}>
    //       <div className={styles.filter}>
    //         <div className={styles.description}>
    //           <h1>Une question avant de monter en selle ?</h1>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.faqContainer}>
    //       <div className={styles.categorie}>
    //         <ul>
    //           <li
    //             className={
    //               categorie == "informations generales" ? styles.selected : null
    //             }
    //             onClick={() => {
    //               setCategorie("informations generales");
    //               setquestion(
    //                 questions.filter(
    //                   (question) =>
    //                     question.categorie == "informations generales"
    //                 )
    //               );
    //             }}
    //           >
    //             Informations générales
    //           </li>
    //           <li
    //             className={categorie == "Inscription" ? styles.selected : null}
    //             onClick={() => {
    //               setCategorie("Inscription");
    //               setquestion(
    //                 questions.filter(
    //                   (question) => question.categorie == "Inscription"
    //                 )
    //               );
    //             }}
    //           >
    //             Inscription
    //           </li>
    //           <li
    //             className={categorie == "Réservation" ? styles.selected : null}
    //             onClick={() => {
    //               setCategorie("Réservation");
    //               setquestion(
    //                 questions.filter(
    //                   (question) => question.categorie == "Réservation"
    //                 )
    //               );
    //             }}
    //           >
    //             Réservation
    //           </li>
    //           <li>Pendant la location</li>
    //           <li>Fin de location</li>
    //           <li>Trajets & Paiements</li>
    //           <li>Mon compte</li>
    //           <li>Bonus Fidélité et promotions</li>
    //           <li>Contraventions et fourrières</li>
    //           <li>Autres</li>
    //         </ul>
    //       </div>
    //       <div className={styles.question}>
    //         {question.map((question) => (
    //           <a
    //             onClick={() => router.push(`faq/${question.id}`)}
    //             key={question.id}
    //           >
    //             <p>{question.question}</p>
    //             <img src="/next.png" width="30px"></img>
    //           </a>
    //         ))}
    //       </div>
    //     </div>
    //   </Layout>
    // </div>
  );
}
