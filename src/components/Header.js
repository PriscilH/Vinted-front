// import { Link } from "react-router-dom";
// import Logo from "./assets/logo.png"
const Header = () => {
  return (

    <div>
      {/* <Link to="/offer">Voyager vers offer</Link> */}
      <div>Logo Vinted</div>
      <input placeholder="Recherche des articles"></input> 
      <div>
        <button>S'inscrire</button>
      </div>
      <div>
      <button>Se connecter</button>
      </div>
      <div>
      <button>Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
