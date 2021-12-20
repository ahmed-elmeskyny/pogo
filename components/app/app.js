//

//styles
import styles from "./app.module.scss";

//components
import Download from "../donwload/download";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.text}>
        <h1>C'est parti !</h1>
        <p>
          Vous voulez commencer une nouvelle expérience ? Tester un mode de
          transport urbain pionnier en Afrique ? Téléchargez notre application
          et accédez en un clic à nos scooters électriques !
        </p>
        <Download white></Download>
      </div>
      <div className={styles.illus}>
        <img src="/undrw.png" alt="pogo telecharger image"></img>
      </div>
    </div>
  );
};

export default App;
