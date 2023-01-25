import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const Header = () => {
  return (

    <div className="Header">
      <div className="Connexion">
      <Link to="/">
      <img className="Logo" src={Logo} alt="Logo" />
      </Link>
      <input placeholder="Recherche des articles"></input> 
      <div className="Buttons">
        <button>S'inscrire </button>
        <button>Se connecter</button>
        <button>Vends tes articles</button>
      </div>
      </div>
      <nav>
        <button><span>Femmes</span></button>
        <button><span>Hommes</span></button>
        <button><span>Enfants</span></button>
        <button><span>Maison</span></button>
        <button> <span>Divertissements</span></button>
        <button> <span>Animaux</span></button>
        <button><span>A propos</span></button>
        <button><span>Notre plateforme</span></button>
       
       
        
        
      </nav>
    </div>
  );
};

export default Header;
