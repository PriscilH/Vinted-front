import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Language from "./Language";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <div className="Header">
      <div className="Connexion">
      <Link to="/">
      <img className="Logo" src={Logo} alt="Logo" />
      </Link>
      <div className="Glass"><FontAwesomeIcon   icon="fa-solid fa-magnifying-glass" />
      <input  placeholder="Recherche des articles"></input> </div>
      <div className="Buttons">
        <button onClick={() => navigate("/signup")}>S'inscrire </button>
        <button onClick={() => navigate("/login")}>Se connecter</button>
        <button>Vends tes articles</button>
        <button className="Aide">?</button>
        <Language />
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
