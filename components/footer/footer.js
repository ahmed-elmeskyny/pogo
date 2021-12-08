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

          <div className={styles.coordonates}>
            <MdLocationOn className={styles.icon}></MdLocationOn>
            <span>
              209 B Lotissement Riad Laymoun Rte Meknès Mag 3 3000 Sect 0608 Fès
            </span>
          </div>
          <div className={styles.coordonates}>
            <MdOutlineDialpad className={styles.icon}></MdOutlineDialpad>
            <span>(+212) 695 423 240</span>
          </div>
        </div>
        <div className={styles.Links}>
          <h2>Liens Rapides</h2>
          <ul>
            <li>
              <a href="/">
                {" "}
                <AiOutlineRight className={styles.icon}></AiOutlineRight>{" "}
                Accueil{" "}
              </a>
            </li>
            <li>
              <a href="/apropos">
                <AiOutlineRight className={styles.icon}></AiOutlineRight>À
                propos{" "}
              </a>
            </li>
            <li>
              <a href="/comment">
                <AiOutlineRight className={styles.icon}></AiOutlineRight>{" "}
                Comment ça marche{" "}
              </a>
            </li>
            <li>
              <a href="/tarif">
                {" "}
                <AiOutlineRight className={styles.icon}></AiOutlineRight>Nos
                tarifs{" "}
              </a>
            </li>
            <li>
              <a href="/contact">
                <AiOutlineRight className={styles.icon}></AiOutlineRight>
                Contactez-nous{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.Links}>
          <h2>liens utiles</h2>
          <ul>
            <li>
              <a>
                {" "}
                <AiOutlineRight className={styles.icon}></AiOutlineRight>{" "}
                Politique de confidentialité{" "}
              </a>
            </li>
            <li>
              <a>
                {" "}
                <AiOutlineRight className={styles.icon}></AiOutlineRight>Termes
                et Conditions{" "}
              </a>
            </li>
            {/* <li>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>{" "}
              Renonciation{" "}
            </li>
            <li>
              <AiOutlineRight className={styles.icon}></AiOutlineRight>Support{" "}
            </li> */}
            <li>
              <a>
                {" "}
                <AiOutlineRight className={styles.icon}></AiOutlineRight>
                FAQ{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.downloadApp}>
          <h2>Télécharger l' app </h2>

          <Download
            height="70px"
            width="170px"
            style={{ marginTop: "20px" }}
            footer={true}
          ></Download>
          <div className={styles.coordonates}>
            <MdAccessTimeFilled className={styles.icon}></MdAccessTimeFilled>
            <span> 24 / 7 pour répondre à vos questions.</span>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>Copyright © POGO 2021. All rights reserved.</p>
        <div className={styles.socials}>
          <a
            href="https://web.facebook.com/POGO-Mobility-101794788998668/"
            target="_blank"
          >
            {" "}
            <FaFacebookSquare className={styles.icon}></FaFacebookSquare>
          </a>
          <a href="https://www.instagram.com/pogomobility/" target="_blank">
            {" "}
            <AiFillInstagram className={styles.icon}></AiFillInstagram>
          </a>

          <a
            href="https://ma.linkedin.com/in/pogo-mobility-2459b1216"
            target="_blank"
          >
            {" "}
            <BsLinkedin className={styles.icon}></BsLinkedin>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
