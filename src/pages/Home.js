import { Link } from "react-router-dom";

const Home = () => {
  const id = 14678944;
  return (
    <div>
      <h1>Bienvenue sur Home</h1>
      <nav className="Menunav">
        <div><span>Femmes</span></div>
        <div><span>Hommes</span></div>
        <div><span>Enfants</span></div>
        <div><span>Maison</span></div>
        <div><span>Divertissements</span></div>
        <div><span>Animaux</span></div>
        <div><span>A propos</span></div>
        <div><span>Notre plateforme</span></div> 
      </nav>

      <Link to={`/offer/${id}`}>Naviguer vers Offer</Link>
      <br />
      {/* <Link to={`/product/jeroulematetesurleclavier`}>
        Naviguer vers Product en roulant notre tete
      </Link> */}
      <br />
      <a href="https://www.google.com">
        Aller vers Google en utilisant directement une balise a
      </a>
    </div>
  );
};

export default Home;