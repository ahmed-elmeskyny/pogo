//

//styles
import styles from "./app.module.scss";

//components
import Download from "../donwload/download";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.text}>
        <h1>C'est parti!</h1>
        <p>
          Ça donne envie de tester, non ? Téléchargez l'application et accédez
          en un clic à des milliers de scooters électriques à Paris, Nice, Milan
          et Barcelone !
        </p>
        <Download white></Download>
      </div>
      <div className={styles.illus}>
        <img src="/undrw.png"></img>
      </div>
    </div>
  );
};

export default App;
