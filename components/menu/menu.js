//react
import { useState, useEffect } from "react";
import Link from "next/link";
//styles
import styles from "./menu.module.scss";

//react-icons
import { RiMenu4Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

//components
import ActiveLink from "../activeLink/activeLink";

const Menu = ({ isOpen, setOpen }) => {
  const [Fixed, setFixed] = useState(false);
  const [toggle, setToggle] = useState(false);

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
        <a href="/" className={styles.logo}>
          <img
            src="/pogo.png"
            alt="logo de pogo people on the go"
            width="150px"
            height="40px"
          ></img>
        </a>
        <ul>
          <ActiveLink href="/" activeClassName={styles.active}>
            <li
              className={styles.home}
              onMouseOver={() => setToggle(true)}
              onMouseLeave={() => setToggle(false)}
            >
              <span>Accueil</span>
              {toggle ? (
                <div className={styles.submenu}>
                  <Link href="/#notre_flotte"> Notre flotte</Link>
                  <Link href="/#ou">Où se trouve POGO</Link>
                  <Link href="/#comment"> Comment louer un scooter</Link>
                  <Link href="/#combien">Combien ça coûte</Link>
                </div>
              ) : null}
              {}
            </li>
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
          <ActiveLink href="/galerie" activeClassName={styles.active}>
            <li>Galerie</li>
          </ActiveLink>
          <ActiveLink href="/contact" activeClassName={styles.active}>
            <li>Contactez-nous </li>
          </ActiveLink>
        </ul>
        <a className={styles.register} href="http://pogo.focusagency.ma/">
          Register Now
        </a>
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
          <img
            src="/pogo.png"
            alt="logo de pogo people on the go"
            width="130px"
            height="40px"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Menu;
