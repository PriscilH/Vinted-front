import { Link } from "react-router-dom";
import dechire from "../assets/dechire.svg"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = ({ title, slideRange }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


useEffect(() => {
    const fetchData = async () => {
      let filters = "";
      if (title) {
        filters = filters + "?title=" + title;
      }
      if (filters) {
          // si il y a déjà un filtre par title, donc filters n'est plus une string vide et contient déjà un `?`, il me faut donc un `&`
          filters = filters + "&priceMin=" + slideRange[0] + "&priceMax=" + slideRange[1];
        } else {
          // si il n'y a pas de filtre title, alors la variable filters est toujours vide, et donc il me faut un `?`
          filters = filters + "?priceMin=" + slideRange[0] + "&priceMax=" + slideRange[1];
        }
  
        const response = await axios.get(
          // `https://lereacteur-vinted-api.herokuapp.com/offers${filters}`
          `https://site--backend-vinted--r85cyr9v9nmw.code.run/offers${filters}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
    };

    fetchData();
  }, [title, slideRange ]);
  return isLoading ? (
    <span>Loading ...</span>
  ) : (
    <div >
      <div className="Banner">
        <img className="Bannertorn" src={dechire} alt="effet déchiré" />
        <div className="Banner-block">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <button
            onClick={(event) => {
              event.preventDefault();
              navigate("/publish");
            }}
          >
            Vends maintenant
          </button>
        </div>
      </div>
      
      <h3>Fil d'actu</h3><p className="fil">Voir plus</p>
      <div className="offers-list">
       
          {/* <Link to ="/offer">Aller vers la page offer</Link> */}
          {data.offers.map((element, index) => {
            console.log("element =>", element.owner);
            return (
              <div key={element._id}> 
              {element.owner && (
              <Link
            // to={"/offer/" + offer._id}
            to={`/offer/${element._id}`}
            state={{ element: element }}
            key={element._id}
            style={{ textDecoration: "none", color: "black" }}
          >
              <div className="offer">
              {element.owner.account.avatar && (
                  <img className="avatar"
                  src={element.owner.account.avatar.secure_url}
                  alt="Vendeur du vêtement"/>
                  )}
                  <p className="username">{element.owner.account.username}</p> 
                
                
                <img 
                    src={element.product_image.secure_url}
                    alt="aperçu du vêtement" 
                     />
                     <p className="Price">{element.product_price} €</p>
                     {element.product_details.map((element, index) => {
                      return element.TAILLE && <p className="Taille" key={index}>{element.TAILLE}</p>
                     })}
                     {element.product_details.map((element, index) => {
                      return element.MARQUE && <p className="Marque" key={index}>{element.MARQUE}</p>
                     })}
                </div>
                </Link>)}
              </div>
            );
          })};
      </div>
    </div>
  );
};

export default Home;