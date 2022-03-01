let questions = [
  {
    id: 1,
    categorie: "informations generales",
    ques: "En quoi consiste le service POGO ? ",
    res: [
      "POGO met à votre disposition des scooters et des trottinettes électriques en libre-service disponibles 24h/24, 7j/7.  Vous pouvez les réservez et se déplacer avec librement en quelques clics sur l’application mobile.",
      "Pas d’abonnement, pas d’engagement. Avec POGO, vous ne payez que vos minutes de location ! ",
      "Comment ça marche ? ",
    ],
    links: "/comment",
  },
  {
    id: 2,
    categorie: "informations generales",
    ques: "Est-ce que je peux conduire un véhicule POGO ?  ",
    res: [
      "Vous êtes âgés de 18 ans ou plus ? ",
      "Vous disposez d’un smartphone où est téléchargée la dernière version de l’application POGO ?  ",
      "Vous avez rempli le formulaire d’inscription sur l’App ? ",
      "Si oui, vous pouvez conduire un véhicule POGO dès maintenant ! ",
    ],
    links: "",
  },
  {
    id: 3,
    categorie: "informations generales",
    ques: "Comment puis-je démarrer et terminer une location ?  ",
    res: [
      "Pour démarrer votre location :  ",
      "Scannez le code QR ou taper l’identifiant sur le véhicule pour le déverrouiller, la location devient effective. ",
      "Pour finir votre location :   ",
      "Garez le véhicule dans un ‘’ Parking POGO ‘’, éteignez-le, puis cliquez sur le bouton ‘’ End ride ‘’ sur l’App POGO. Veillez à ne pas quitter le véhicule avant de recevoir la confirmation de la fin de votre location.  ",
    ],
    links: "",
  },
  {
    id: 4,
    categorie: "informations generales",
    ques: "Qu’est-ce que le ‘’ Parking POGO ‘’ ?   ",
    res: [
      "C’est la zone dans laquelle se situent les scooters et les trottinettes disponibles à la réservation et dans laquelle vous devez également restituer le véhicule afin de mettre fin à votre location.   ",
      "Pendant votre location, vous pouvez rouler et mettre en mode ‘’ Pause ‘’ le véhicule librement dans le milieu urbain.  ",
    ],
    links: "",
  },
  {
    id: 5,
    categorie: "informations generales",
    ques: "Combien me coûtera le voyage ? ",
    res: [
      "La location d’un véhicule POGO est facturé à la minute. ",
      "Les tarifs peuvent varier selon la ville, veuillez donc vous référer à l’application POGO pour connaître les tarifs exacts pratiqués au moment de la location, il vous suffit d’appuyer sur le véhicule choisi sur la carte.",
    ],
    links: "",
  },
  {
    id: 6,
    categorie: "informations generales",
    ques: "Qu’est-ce que c’est que le mode ‘’ Pause ‘’ ?  ",
    res: [
      "POGO vous fournit la meilleure expérience possible, pour le meilleur coût possible, c’est pour cela que nous proposons le mode ‘’ Pause ‘’, afin de réduire la tarification de votre voyage. ",
      "Vous souhaitez rejoindre des amis dans un café ? Garez le véhicule dans un endroit autorisé et sécurisé, mettez-le en mode ‘’ Pause ‘’, la tarification par minute sera considérablement réduite. ",
    ],
    links: "",
  },
  {
    id: 7,
    categorie: "informations generales",
    ques: "Dois-je être muni(e) d’un casque pour conduire un véhicule POGO ?   ",
    res: [
      "Conformément à la loi, sur tout véhicule à 2 roues, le port du casque est obligatoire, c’est une mesure de sécurité qui vous protège principalement. Mais pas de panique, nous vous simplifions la vie, c’est POGO qui vous fournit un casque que vous devriez absolument porter lors de la conduite. Nous vous faisons confiance, veuillez donc bien le remettre en place à la fin de votre location. ",
    ],
    links: "",
  },
  {
    id: 8,
    categorie: "informations generales",
    ques: "Est-ce que je suis assuré(e) ?  ",
    res: [
      "La sécurité et le bien-être des utilisateurs de nos services est la priorité numéro 1 de POGO. ",
      "Nous collaborons avec l’un des meilleurs assureurs dans le monde entier, Allianz, pour que vous soyez 100% assurés en conduisant un véhicule POGO, à condition que vous respectiez les Conditions Générales d’Utilisation. ",
    ],
    links: "",
  },
  {
    id: 9,
    categorie: "informations generales",
    ques: "Peut-on rouler à deux sur un véhicule POGO ?   ",
    res: [
      "Sur un scooter : ",
      "Vous pouvez rouler à deux sur nos scooters. Le scooter est homologué pour le transport d’un passager et vous êtes tous les deux assurés(es) à 100%. ",
      "Sur une trottinette : ",
      "Nos trottinettes sont homologuées pour l’utilisation individuelle. Seulement une personne peut donc la conduire. ",
    ],
    links: "",
  },
  {
    id: 10,
    categorie: "informations generales",
    ques: "Comment fonctionne l’assurance ?  ",
    res: [
      "Lors de la conduite de l’un de nos véhicules POGO, vous êtes couverts par une assurance “ avec notre partenaire Allianz. En cas d’accident ou de dommages, vous êtes couvert dans la limite de la franchise contractuelle de 1000 DH. ",
      "Par exemple, si vous avez un accident et que le véhicule est endommagé à hauteur de 2000DH vous ne payez que 1000 DH. En revanche, si le montant des dégâts est de 300DH vous ne payez que 300DH. ",
      "À noter que si vous avez un accident avec un tiers, que vous n’êtes pas responsable et que vous avez bien rempli le constat amiable, vous ne payez pas de franchise.  ",
    ],
    links: "",
  },
  {
    id: 11,
    categorie: "paiement",
    ques: "Comment consulter l’historique de mes trajets ? ",
    res: [
      "Si vous souhaitez consulter l’historique de vos trajets, vous pouvez vous rendre à l’application POGO sous le menu “ Mes réservations ”. ",
      "Votre historique de trajets est disponible avec les détails suivants : La date et l’heure de la location, le type du véhicule, la distance parcourue, la durée ainsi que le tarif total.  ",
    ],
    links: "",
  },
  {
    id: 12,
    categorie: "paiement",
    ques: "Que sont les modes de paiement que je peux utiliser ?   ",
    res: [
      "Prélèvement bancaire : ",
      "Packs POGO : ",
      "A l’issue de l’achat d’un Pack POGO, vous créditez des minutes prépayées sur votre compte POGO selon le Pack choisi et vous profitez de bonus allant jusqu’à 50DH. ",
      "Vous pouvez acheter un Pack POGO avec votre carte bancaire, ou en payant en espèces dans l’une de nos agences. ",
    ],
    links: "",
  },
];

export default questions;
