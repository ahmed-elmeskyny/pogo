//react
import { useState } from "react";

//next
import Image from "next/image";

//styles
import styles from "./layout.module.scss";

//components
import Menu from "../menu/menu";
import Footer from "../footer/footer";
import ActiveLink from "../activeLink/activeLink";

const Layout = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      {/* <div className={styles.element}></div> */}

      <Menu setOpen={setOpen} isOpen={isOpen}></Menu>

      <div style={{ display: "flex" }}>
        <div
          className={styles.menuContainer}
          style={isOpen ? { display: "block" } : { display: "none" }}
        >
          <div className={styles.menu1}>
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
          </div>
        </div>
        <div
          className={styles.trans}
          style={
            isOpen ? { transform: "translateX(210px)" } : { marginLeft: "0" }
          }
        >
          {props.children}
        </div>
      </div>

      <Footer></Footer>
      <div className={styles.credits}>
        <a href="https://ahmedelmeskyny.vercel.app/" target="_blank">
          Crée par <span>Ahmed Elmeskyny</span>
        </a>
      </div>
    </div>
  );
};

export default Layout;
