//styles
import styles from "./footer.module.scss";

//components
import Download from "../donwload/download";

//react-icons
import {
  MdLocationOn,
  MdOutlineDialpad,
  MdAccessTimeFilled,
} from "react-icons/md";
import { AiOutlineRight, AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.descriptionContainer}>
          <div className={styles.logo}>
            <img src="/pogo.png" width="150px" height="40px"></img>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <div className={styles.coordonates}>
            <MdLocationOn className={styles.icon}></MdLocationOn>
            <span>Casablanca 29 , Morocco</span>
          </div>
          <div className={styles.coordonates}>
            <MdOutlineDialpad className={styles.icon}></MdOutlineDialpad>
            <span>(+212) 6782461959</span>
          </div>
        </div>
        <div className={styles.Links}>
          <h2>Liens Rapides</h2>
          <ul>
            <li>
              <AiOutlineRight className={styles.icon}></AiOutlineRight> Accueil{" "}
            </li>
            <li>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>À propos{" "}
            </li>
            <li>
              <AiOutlineRight className={styles.icon}></AiOutlineRight> Comment
              ça marche{" "}
            </li>
            <li>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>Nos
              tarifs{" "}
            </li>
            <li>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>
              Contactez-nous{" "}
            </li>
          </ul>
        </div>
        <div className={styles.Links}>
          <h2>liens utiles</h2>
          <ul>
            <li>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>{" "}
              Politique de confidentialité{" "}
            </li>
            <li>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>Termes et
              Conditions{" "}
            </li>
            <li>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>{" "}
              Renonciation{" "}
            </li>
            <li>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>Support{" "}
            </li>
            <li>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>
              FAQ{" "}
            </li>
          </ul>
        </div>
        <div className={styles.downloadApp}>
          <h2>Télécharger l' app </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <Download
            height="70px"
            width="170px"
            style={{ marginTop: "20px" }}
            footer={true}
          ></Download>
          <div className={styles.coordonates}>
            <MdAccessTimeFilled className={styles.icon}></MdAccessTimeFilled>
            <span> 24 / 7 pour répondre à vos questions</span>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>Copyright © POGO 2021. All rights reserved.</p>
        <div className={styles.socials}>
          <FaFacebookSquare className={styles.icon}></FaFacebookSquare>
          <AiFillInstagram className={styles.icon}></AiFillInstagram>
          <FaTwitterSquare className={styles.icon}></FaTwitterSquare>
          <BsLinkedin className={styles.icon}></BsLinkedin>
        </div>
      </div>
    </div>
  );
};
export default Footer;
