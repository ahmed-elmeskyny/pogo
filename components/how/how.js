//react
import { useState } from "react";
//styles
import styles from "./how.module.scss";

const How = () => {
  const [isLocate, setLocate] = useState(true);
  const [isScan, setScan] = useState(false);
  const [isRide, setRide] = useState(false);
  return (
    <div className={styles.howContainer}>
      <p>Avec POGO, la micromobilité est simple et accessible pour tous ! </p>
      {/* hooww */}
      <div className={styles.how}>
        {/* steeeppss */}
        <div className={styles.stepsContainer}>
          <div className={styles.stepContainer}>
            <div className={styles.step}>
              <span
                className={styles.circle}
                style={
                  isLocate
                    ? { backgroundColor: "#03d3b9", color: "#03d3b9" }
                    : null
                }
                onClick={() => {
                  setLocate(true);
                  setRide(false);
                  setScan(false);
                }}
              >
                a
              </span>
              <h3 className={styles.title}>Localise</h3>
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.stepContainer}>
            <div className={styles.step}>
              <span
                className={styles.circle}
                style={
                  isScan
                    ? { backgroundColor: "#03d3b9", color: "#03d3b9" }
                    : null
                }
                onClick={() => {
                  setLocate(false);
                  setRide(false);
                  setScan(true);
                }}
              >
                a
              </span>
              <h3 className={styles.title}>Scan</h3>
            </div>
            <div className={styles.line}></div>{" "}
          </div>
          <div className={styles.stepContainer}>
            <div className={styles.step}>
              <span
                className={styles.circle}
                style={
                  isRide
                    ? { backgroundColor: "#03d3b9", color: "#03d3b9" }
                    : null
                }
                onClick={() => {
                  setLocate(false);
                  setRide(true);
                  setScan(false);
                }}
              >
                a
              </span>
              <h3 className={styles.title}>Roule</h3>
            </div>
          </div>
        </div>
        {/* fin steeps */}
        {/* mocu */}
        <div className={styles.mockup}>
          {isLocate ? <img src="localise.png"></img> : null}
          {isScan ? <img src="scan.png"></img> : null}
          {isRide ? <img src="roule.png"></img> : null}
        </div>
        {/* fin lc */}
        <div className={styles.description}>
          {isLocate ? (
            <span>
              Télécharge notre application et repère le parking POGO le plus
              proche
            </span>
          ) : null}
          {isScan ? (
            <span>Scan le code QR sur le scooter pour le déverrouiller.</span>
          ) : null}
          {isRide ? (
            <span>
              Roulez où vous souhaiter dans le périmètre urbain renseigné sur
              l’application tout en respectant le code de la route. Veuillez
              revenir au parking POGO pour terminer votre location.
            </span>
          ) : null}
        </div>

        <div className={styles.mobileSteps}>
          <div className={styles.stepContainer}>
            <span
              className={styles.circle}
              style={
                isLocate
                  ? { backgroundColor: "#03d3b9", color: "#03d3b9" }
                  : null
              }
              onClick={() => {
                setLocate(true);
                setRide(false);
                setScan(false);
              }}
            >
              a
            </span>
            <div className={styles.line}></div>
          </div>
          <div className={styles.stepContainer}>
            <span
              className={styles.circle}
              style={
                isScan ? { backgroundColor: "#03d3b9", color: "#03d3b9" } : null
              }
              onClick={() => {
                setLocate(false);
                setRide(false);
                setScan(true);
              }}
            >
              a
            </span>
            <div className={styles.line}></div>
          </div>
          <div className={styles.stepContainer}>
            <span
              className={styles.circle}
              style={
                isRide ? { backgroundColor: "#03d3b9", color: "#03d3b9" } : null
              }
              onClick={() => {
                setLocate(false);
                setRide(true);
                setScan(false);
              }}
            >
              a
            </span>
          </div>
        </div>

        <div className={styles.mobileDescription}>
          {isLocate ? (
            <>
              {" "}
              <h2>Localise</h2>
              <span>
                Télécharge notre application et repère le parking POGO le plus
                proche
              </span>
            </>
          ) : null}
          {isScan ? (
            <>
              <h2>Scan</h2>
              <span>Scan le code QR sur le scooter pour le déverrouiller.</span>
            </>
          ) : null}
          {isRide ? (
            <>
              <h2>ROULE</h2>
              <span>
                Roulez où vous souhaiter dans le périmètre urbain renseigné sur
                l’application tout en respectant le code de la route. Veuillez
                revenir au parking POGO pour terminer votre location.
              </span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default How;
