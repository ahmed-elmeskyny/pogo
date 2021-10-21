//next
import Image from "next/image";

//styles
import styles from "./menu.module.scss";

//react-icons
import { SiTarget } from "react-icons/si";

//components
import ActiveLink from "../activeLink/activeLink";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.logo}>
        <img src="/pogo.png" width="150px" height="40px"></img>
        {/* <span>P</span>
        <SiTarget></SiTarget>
        <span>GO</span> */}
      </div>
      <div className={styles.menu}>
        <ul>
          <ActiveLink href="/" activeClassName={styles.active}>
            <li className={styles.home}>Acceuil</li>
          </ActiveLink>
          <ActiveLink href="/apropos" activeClassName={styles.active}>
            <li>À propos </li>
          </ActiveLink>
          <ActiveLink href="/comment" activeClassName={styles.active}>
            <li> Comment ça marche</li>
          </ActiveLink>

          <ActiveLink href="/tarif" activeClassName={styles.active}>
            <li> Nos tarifs </li>
          </ActiveLink>
          <ActiveLink href="/contact" activeClassName={styles.active}>
            <li>Contactez-nous </li>
          </ActiveLink>
        </ul>
        <button>Télécharger l'app</button>
      </div>
    </div>
  );
};

export default Menu;
