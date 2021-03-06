//next
import Head from "next/head";
import { useState } from "react";

//styles
import styles from "../styles/faq.module.scss";

//components
import Layout from "../components/layout/layout";

//questions
import questions from "../questions/quest";

export default function faq() {
  const [categorie, setCategorie] = useState("informations generales");
  const [question, setquestion] = useState(questions);
  const [toggle, setToggle] = useState("");
  console.log(toggle);
  return (
    <div className={styles.container}>
      <Head>
        <title>POGO || FAQ </title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" />
      </Head>

      <Layout>
        <div className={styles.faqContainer}>
          <div className={styles.title}>
            <h1>FAQ</h1>
          </div>
          <div className={styles.questions}>
            {question.map((question) => (
              <div className={styles.questionContainer} key={question.id}>
                <div
                  onClick={() =>
                    setToggle(toggle == question.id ? "" : question.id)
                  }
                  className={styles.question}
                >
                  <p>{question.ques}</p>

                  {toggle == question.id ? (
                    <img src="/minus.png" width="15px"></img>
                  ) : (
                    <img src="/plus.png" width="15px"></img>
                  )}
                </div>
                <p
                  className={styles.response}
                  style={
                    toggle == question.id ? { height: "auto" } : { height: "0" }
                  }
                >
                  {question.res}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
