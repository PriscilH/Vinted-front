import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Language from "./Language";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Slider } from "react-range";
// import { useState } from "react";

const Header = ({token, transferToken, priceMin, setPriceMin, title, setTitle}) => {

  return (
    <div className="Header">
      <div className="Connexion">
      <Link to="/">
      <img className="Logo" src={Logo} alt="Logo" />
      </Link>
      <div className="Glass"><FontAwesomeIcon   icon="fa-solid fa-magnifying-glass" />
      <input className="Searchbar"
        placeholder="Rechercher des articles"
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        />
      </div>
      
      <div className="Buttons">
      {/* On peut utiliser navigate pour naviguer sur les pages souhaitées
        <button onClick={() => navigate("/signup")}>S'inscrire </button>
        <button onClick={() => navigate("/login")}>Se connecter</button> */}
         {token === null ? (
          <>
        <Link to="/signup"><button className="inscrip">S'inscrire </button></Link>

        <Link to="/login"><button className="connect" >Se connecter</button></Link>
        </>
         ) : (
        <button className="Redbutton" onClick={() => {
          transferToken(null);
        }}>Déconnexion
        </button> )}
        <Link to="/Publish">
          <button className="Sell" >Vends tes articles</button>
          </Link>
        <button className="Aide">?</button>
        <Language />
      </div>
      </div>
      <div className="Pricefilter">
      <p>Prix Min :</p>
      <input className="PriceMin"
      // placeholder="Prix min"
        type="number"
        onChange={(event) => {
          setPriceMin(event.target.value);
        }}
      />
      {/* <p>Prix Max :</p>
      <input className="PriceMax"
      // placeholder="Prix max"
        type="number"
        onChange={(event) => {
          setPriceMax(event.target.value);
        }}
      /> */}
      </div>
      <div className="Trait"></div>
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
