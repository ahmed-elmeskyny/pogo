//next
import Head from "next/head";
import Image from "next/image";

//styles
import styles from "../styles/termes.module.scss";

//components
import Layout from "../components/layout/layout";

//questions
import questions from "../questions/quest";

export default function Termes() {
  return (
    <div className={styles.container}>
      <Head>
        <title>POGO || Politique de confidentialite </title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" />
      </Head>

      <Layout>
        <div className={styles.aboutContainer}>
          <div className={styles.filter}>
            <div className={styles.description}>
              <h1>Politique de Confidentialite </h1>
            </div>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div>
            <p>
              <strong>
                {" "}
                Derni&egrave;re mise &agrave; jour
                le&nbsp;13&nbsp;Avril&nbsp;2022&nbsp;
              </strong>
            </p>
          </div>
          <div>
            <p>
              Le Site www.pogo.ma, l&rsquo;application et le
              service&nbsp;POGO&nbsp;(ci-apr&egrave;s &laquo; nos Services
              &raquo;) sont propos&eacute;s par la
              soci&eacute;t&eacute;&nbsp;POGO&nbsp;sarl&nbsp;immatricul&eacute;e&nbsp;&agrave;
              F&egrave;s sous le N&deg; 002783488000066&nbsp;dont le
              si&egrave;ge social est situ&eacute;&nbsp;&agrave; 209 B Lot
              Riad&nbsp;Laymoune&nbsp;Rte
              Mekn&egrave;s,&nbsp;Mag&nbsp;3 F&egrave;s Maroc. &nbsp;
            </p>
          </div>
          <div>
            <p>
              POGO&nbsp;s&rsquo;engage &agrave; prot&eacute;ger la vie
              priv&eacute;e de tous les visiteurs, Clients et Utilisateurs de
              ses Services. Elle s&rsquo;engage &agrave; ce que la collecte et
              le traitement de vos donn&eacute;es soient effectu&eacute;s
              conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur
              la Protection des Donn&eacute;es (RGPD) et la Loi dite
              &laquo; Informatique et Libert&eacute;s &raquo;.&nbsp;
            </p>
          </div>
          <div>
            <p>
              La Politique de confidentialit&eacute; pr&eacute;sente nos
              engagements et les principes fondamentaux que nous appliquons
              &agrave; la protection des donn&eacute;es personnelles. Elle vous
              informe des proc&eacute;d&eacute;s de collecte et
              d&rsquo;utilisation de vos donn&eacute;es, des options et des
              droits dont vous b&eacute;n&eacute;ficiez. Elle compl&egrave;te
              les Conditions G&eacute;n&eacute;rales d&rsquo;Utilisation du
              Service. Les termes commen&ccedil;ant par une majuscule non
              d&eacute;finis aux pr&eacute;sentes ont le sens qui leur est
              donn&eacute; dans lesdites Conditions G&eacute;n&eacute;rales
              d&rsquo;Utilisation.&nbsp;
            </p>
          </div>
          <div>
            <p>
              Nous pouvons modifier la Politique de confidentialit&eacute;
              &agrave; tout moment afin notamment de se conformer &agrave;
              toutes &eacute;volutions r&eacute;glementaires,
              jurisprudentielles, &eacute;ditoriales ou techniques. Les Clients
              et Utilisateurs sont inform&eacute;s par tout moyen en cas de
              changement significatif de la Politique. Avant chaque navigation,
              nous vous invitons &agrave; vous r&eacute;f&eacute;rer &agrave; sa
              derni&egrave;re version.&nbsp;
            </p>
          </div>
          <div>
            <p> &nbsp;</p>
          </div>
          <div>
            <p>
              <strong>
                Qui sont les personnes concern&eacute;es par cette politique ?{" "}
              </strong>
            </p>
          </div>
          <div>
            <p>
              La collecte et le traitement de donn&eacute;es personnelles
              concerne tous les visiteurs, Clients et Utilisateurs de nos
              Services.&nbsp;
            </p>
          </div>
          <div>
            <p>
              Lors de votre inscription ou de l&rsquo;acc&egrave;s &agrave; nos
              services, vous recevrez l&rsquo;ensemble des informations
              obligatoires relatives &agrave; la collecte et au traitement de
              vos Donn&eacute;es.&nbsp;
            </p>
          </div>
          <div>
            <div>
              <p>
                Conform&eacute;ment &agrave; nos Conditions
                G&eacute;n&eacute;rales d&rsquo;Utilisation,
                l&rsquo;acc&egrave;s &agrave; nos Services est
                r&eacute;serv&eacute; aux personnes majeures.&nbsp;
              </p>
            </div>
            <div>
              <p> &nbsp;</p>
            </div>
            <div>
              <p>
                <strong>
                  Quelles sont les donn&eacute;es personnelles trait&eacute;es ?{" "}
                </strong>
              </p>
            </div>
            <div>
              <p>
                Lors de votre cr&eacute;ation d&rsquo;un compte&nbsp;POGO, de
                votre Inscription, de l&rsquo;utilisation de nos Services, les
                donn&eacute;es personnelles suivantes sont susceptibles
                d&rsquo;&ecirc;tre collect&eacute;es et trait&eacute;es :&nbsp;
              </p>
            </div>
            <div>
              <ul>
                <li>
                  <p>
                    Des donn&eacute;es personnelles d&rsquo;identification (nom,
                    pr&eacute;nom, date de naissance, pi&egrave;ce
                    d&rsquo;identit&eacute;) ;&nbsp;
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <ul>
                <li>
                  <p>
                    Des donn&eacute;es personnelles de contact (e-mail, adresse
                    postale, num&eacute;ro de t&eacute;l&eacute;phone) ;&nbsp;
                  </p>
                </li>
                <li>
                  <p>
                    Des donn&eacute;es personnelles &agrave; fin de paiement
                    (donn&eacute;es bancaires) ;&nbsp;
                  </p>
                </li>
                <li>
                  <p>
                    Des donn&eacute;es de localisation du Scooter (lieu de
                    r&eacute;cup&eacute;ration et restitution, historiques des
                    trajets) ;&nbsp;
                  </p>
                </li>
                <li>
                  <p>
                    Des donn&eacute;es de localisation de votre appareil
                    mobile.&nbsp;
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <p> &nbsp;</p>
            </div>
          </div>
          <div>
            <p>
              <strong>
                &Agrave; quel moment collectons-nous vos donn&eacute;es
                personnelles ?{" "}
              </strong>
            </p>
          </div>
          <div>
            <p>
              Les donn&eacute;es personnelles sont issues des informations que
              vous nous communiquez directement lors de votre Inscription
              &agrave; nos Services.&nbsp;
            </p>
          </div>
          <div>
            <p>
              L&rsquo;historique de vos trajets est collect&eacute; lors de
              l&rsquo;utilisation de nos Services.&nbsp;
            </p>
          </div>
          <div>
            <p> &nbsp;</p>
          </div>
          <div>
            <p>
              <strong>
                A quelles fins utilisons-nous vos donn&eacute;es personnelles et
                pour quelles dur&eacute;es ?{" "}
              </strong>
            </p>
            <img src="/pc.png"></img>
          </div>
          <div>
            <div>
              <p>&nbsp;</p>
            </div>
            <div>
              <p>
                <img src="/pc1.png"></img>
              </p>
            </div>
            <div>
              <p>Sont destinataires des donn&eacute;es :&nbsp;</p>
            </div>
            <div>
              <ul>
                <li>
                  <p>
                    POGO, ses filiales, soci&eacute;t&eacute;s affili&eacute;es,
                    les services concern&eacute;s par le traitement de votre
                    inscription, notre service client&egrave;le ;&nbsp;
                  </p>
                </li>
                <li>
                  <p>
                    nos prestataires et sous-traitants, notamment aux fins de
                    traitement de vos paiements ou d&rsquo;authentification de
                    vos documents ;&nbsp;
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <ul>
                <li>
                  <p>
                    notre compagnie d&rsquo;assurance (et/ou notre
                    soci&eacute;t&eacute; de courtage) en cas de sinistres et de
                    vols ;&nbsp;
                  </p>
                </li>
                <li>
                  <p>
                    les autorit&eacute;s de police comp&eacute;tentes en cas
                    d&rsquo;infraction ; &nbsp;
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <p>
                <strong>
                  Vos donn&eacute;es sont-elles s&eacute;curis&eacute;es ?{" "}
                </strong>
              </p>
            </div>
            <div>
              <p>
                Nous nous engageons &agrave; prendre toutes les
                pr&eacute;cautions utiles, mesures organisationnelles et
                techniques appropri&eacute;es pour pr&eacute;server la
                s&eacute;curit&eacute;, l&rsquo;int&eacute;grit&eacute; et la
                confidentialit&eacute; des Donn&eacute;es, et notamment,
                emp&ecirc;cher qu&rsquo;elles soient alt&eacute;r&eacute;es,
                modifi&eacute;es ou  supprim&eacute;es ou que des tiers non
                autoris&eacute;s y aient acc&egrave;s.&nbsp;
              </p>
            </div>
            <div>
              <p>Nous avons notamment pris les mesures suivantes :&nbsp;</p>
            </div>
          </div>
          <div>
            <div>
              <ul>
                <li>
                  <p>
                    Lors de leur transmission, nous utilisons des
                    syst&egrave;mes de chiffrement afin de garantir la
                    s&eacute;curit&eacute; de vos donn&eacute;es
                    personnelles ;&nbsp;
                  </p>
                </li>
                <li>
                  <p>
                    L&rsquo;acc&egrave;s au r&eacute;seau et aux syst&egrave;mes
                    d&rsquo;information est limit&eacute; au personnel disposant
                    de droits d&rsquo;acc&egrave;s ;&nbsp;
                  </p>
                </li>
                <li>
                  <p>
                    Les Utilisateurs disposent de mots de passe uniques (gestion
                    des mots de passe garantissant des mots de passe forts et
                    double authentification) ;&nbsp;
                  </p>
                </li>
                <li>
                  <p>Pares-feux&nbsp;</p>
                </li>
              </ul>
            </div>
            <div>
              <p>
                Cependant, nous ne pouvons garantir l&rsquo;&eacute;limination
                de tout risque d&rsquo;utilisation abusive des Donn&eacute;es.
                Il importe que vous pr&eacute;serviez la confidentialit&eacute;
                de vos identifiants de fa&ccedil;on &agrave; emp&ecirc;cher une
                utilisation illicite de votre compte.&nbsp;
              </p>
            </div>
          </div>
          <div>
            <p> &nbsp;</p>
          </div>
          <div>
            <p>
              <strong>Quels sont vos droits ? </strong>
            </p>
          </div>
          <div>
            <p>
              Conform&eacute;ment &agrave; la R&eacute;glementation Informatique
              et Libert&eacute;s, et sous r&eacute;serve du paiement de
              l&rsquo;ensemble des sommes dues tel que pr&eacute;cis&eacute; aux
              Conditions G&eacute;n&eacute;rales d&rsquo;Utilisation de nos
              services, vous pouvez &agrave; tout moment retirer le consentement
              que vous nous auriez pr&eacute;alablement donn&eacute; lors de
              l&rsquo;inscription &agrave; nos services.&nbsp;
            </p>
          </div>
          <div>
            <p>
              Vous pouvez acc&eacute;der et obtenir copie des donn&eacute;es
              vous concernant, les faire rectifier, sous certaines conditions
              vous opposez &agrave; leur traitement ou les faire effacer.&nbsp;
            </p>
          </div>
          <div>
            <p>
              Vous disposez &eacute;galement d&rsquo;un droit &agrave; la
              limitation du traitement de vos Donn&eacute;es et &agrave; leur
              portabilit&eacute; vers des tiers.&nbsp;
            </p>
          </div>
          <div>
            <p>
              Vous avez enfin la possibilit&eacute; de d&eacute;finir des
              directives relatives au sort de vos Donn&eacute;es Personnelles
              apr&egrave;s votre d&eacute;c&egrave;s.&nbsp;
            </p>
          </div>
          <div>
            <p>Exercer ses droits&nbsp;</p>
          </div>
          <div>
            <p>
              L&rsquo;exercice de ces droits s&rsquo;effectue &agrave; tout
              moment, aupr&egrave;s de&nbsp;POGO, &agrave; l&rsquo;aide
              d&rsquo;une pi&egrave;ce d&rsquo;identit&eacute; par voie
              &eacute;lectronique : support@pogo.ma.&nbsp;
            </p>
          </div>
          <div>
            <p>R&eacute;clamation aupr&egrave;s de la&nbsp;CNDP&nbsp;</p>
          </div>
          <div>
            <p>
              Si vous estimez, apr&egrave;s nous avoir contact&eacute;s, que vos
              droits sur vos donn&eacute;es ne sont pas respect&eacute;s, vous
              pouvez adresser une r&eacute;clamation &agrave;
              la&nbsp;CNDP.&nbsp;
            </p>
          </div>
          <div>
            <p>&nbsp;</p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
