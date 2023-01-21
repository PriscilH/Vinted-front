import { Link, useParams } from "react-router-dom";

const Offer = () => {
  // useParams() renvoie un objet avec comme clefs les noms des params donnés dans App.js (dans les path des Route)
  console.log(useParams()); // { id : "14678944" }
  const { id } = useParams();

  return (
    <div>
      <p>Ceci est la page Offer, et l'id de cette offre est : {id}</p>
      <Link to="/">Revenir dans Home</Link>
    </div>
  );
};

export default Offer;