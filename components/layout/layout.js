//next
import Image from "next/image";

//styles
import styles from "./layout.module.scss";

//components
import Menu from "../menu/menu";
import Footer from "../footer/footer";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.element}></div>
      <Menu></Menu>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
