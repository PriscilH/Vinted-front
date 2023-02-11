import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Range } from "react-range";
import Language from "./Language";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({
  token, 
  setToken,
  transferToken,  
  title,
  setTitle,
  slideRange,
  setSlideRange,
}) => {

  return (
    <div className="Header">
      <div className="Connexion">
      <Link to="/">
      <img className="Logo" src={Logo} alt="Logo" />
      </Link>
      <div className="Glass"><FontAwesomeIcon   icon="fa-solid fa-magnifying-glass" />
      <input 
        className="Searchbar"
        placeholder="Rechercher des articles"
        type="text"
        name="title"
        id="title"
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
      <div className="slidePrice"> 
      <p>Prix entre :</p>
      <Range
        step={1}
        min={0}
        max={1000}
        values={slideRange}
        onChange={(values) => {
          // console.log(values);
          return setSlideRange(values);
        }}
        renderTrack={({ props, children }) => {
          // console.log(children);
          return (
            <div
              {...props}
              style={{
                ...props.style,
                height: "5px",
                width: "400px",
                backgroundColor: "#017580",
              }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => {
          // console.log(props);
          return (
            <div
              {...props}
              style={{
                ...props.style,
                height: "15px",
                width: "15px",
                borderRadius: "50%",
                backgroundColor: "#017580",
                display: "flex",
                justifyContent: "center",
                outline: "none",
              }}
            >
              <p className="price-thumb">{slideRange[props.key] + " €"}</p>
              </div>);
        }}
      />
      </div>
      {/* <p>Prix Min :</p>
      <input className="PriceMin"
      // placeholder="Prix min"
        type="number"
        onChange={(event) => {
          setPriceMin(event.target.value);
        }}
      />
      <p>Prix Max :</p>
      <input className="PriceMax"
      // placeholder="Prix max"
        type="number"
        onChange={(event) => {
          setPriceMax(event.target.value);
        }}
      /> */}
      
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
