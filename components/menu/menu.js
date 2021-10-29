//react
import { useState, useEffect } from "react";

//next
import Image from "next/image";

//styles
import styles from "./menu.module.scss";

//react-icons
import { RiMenu4Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

//components
import ActiveLink from "../activeLink/activeLink";

const Menu = ({ isOpen, setOpen }) => {
  const [Fixed, setFixed] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 400) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className={Fixed ? styles.fixedMenuContainer : styles.menuContainer}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <img src="/pogo.png" width="150px" height="40px"></img>
        </div>
        <ul>
          <ActiveLink href="/" activeClassName={styles.active}>
            <li className={styles.home}>Accueil</li>
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
      {/* // mobile menu */}

      <div className={styles.mobileMenu}>
        <div className={styles.logoContainer}>
          {isOpen ? (
            <GrClose
              style={{ fontSize: "25px" }}
              onClick={() => setOpen(!isOpen)}
            ></GrClose>
          ) : (
            <RiMenu4Fill
              style={{ fontSize: "31px" }}
              onClick={() => setOpen(!isOpen)}
            ></RiMenu4Fill>
          )}
          <img src="/pogo.png" width="130px" height="40px"></img>
        </div>
      </div>
    </div>
  );
};

export default Menu;
