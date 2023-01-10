//next
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

//styles
import styles from "../styles/galerie.module.scss";

//components
import Layout from "../components/layout/layout";

//db
import { galeriedb } from "../db/galerieDB";

import { TiDeleteOutline } from "react-icons/ti";

export default function Galerie() {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>POGO || Galerie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.galerieContainer}>
          <div className={styles.title}>
            <h1>Galerie</h1>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.photose}>
              {galeriedb.map((photo) => (
                // <div
                //   className={styles.photoee}
                //   key={photo.id}
                //   onClick={() => {
                //     setUrl(photo.src);
                //     setOpen(true);
                //   }}
                // >
                <img
                  onClick={() => {
                    setUrl(photo.src);
                    setOpen(true);
                  }}
                  src={photo.src}
                  width="300px"
                  height="100%"
                ></img>
              ))}
            </div>

            {open ? (
              <div className={styles.zoom} onClick={() => setOpen(false)}>
                <TiDeleteOutline
                  className={styles.icon}
                  onClick={() => setOpen(false)}
                ></TiDeleteOutline>

                <img src={url} className={styles.c}></img>
              </div>
            ) : null}
          </div>
        </div>
      </Layout>
    </div>
  );
}
