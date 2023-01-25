import { Link } from "react-router-dom";
// import banner from "../assets/banner-home.jpeg";
import dechire from "../assets/dechire.svg"
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
    };

    useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>Loading ...</span>
  ) : (
    <div >
      <div className="Banner">
        <img className="Bannertorn" src={dechire} alt="effet déchiré" />
      </div>
      
      <h3>Fil d'actu</h3>
      <div className="offers-list">
       
          {/* <Link to ="/offer">Aller vers la page offer</Link> */}
          {data.offers.map((element, index) => {
            console.log("element =>", element.owner);
            return (
              <Link
            // to={"/offer/" + offer._id}
            to={`/offer/${element._id}`}
            state={{ element: element }}
            key={element._id}
            style={{ textDecoration: "none", color: "black" }}
          >
              <div className="offer">
                <div>
                  <img 
                  src={element.owner.account.avatar.secure_url}
                  alt="Vendeur du vêtement"/>
                  <p>{element.owner.account.username}</p> 
                </div>
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
                </Link>
            );
          })};
      </div>
    </div>
  );
};

export default Home;