//next
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//styles
import styles from "./response.module.scss";

//components
import Layout from "../../components/layout/layout";

//questions
import questions from "../../questions/quest";

export default function res() {
  const router = useRouter();
  const { response } = router.query;
  const id = response;
  const [loading, setloading] = useState(true);
  const resp = questions.filter((quest) => quest.id == id);
  setTimeout(() => {
    setloading(false);
  }, 1000);
  return (
    <div className={styles.container}>
      <Head>
        <title>POGO || faq </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" />
      </Head>

      <Layout>
        <div className={styles.aboutContainer}>
          <div className={styles.filter}>
            <div className={styles.description}>
              <h1>F.A.Q ?</h1>
            </div>
            {/* <div className={styles.page}>
              <p>Home</p>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>
              <p>Contactez-nous</p>
            </div> */}
          </div>
        </div>
        <div className={styles.responseContainer}>
          <h1>{loading ? null : resp[0].question}</h1>
          <p>{loading ? null : resp[0].res}</p>
        </div>
      </Layout>
    </div>
  );
}
