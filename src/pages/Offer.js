import { useParams, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
 const [offerDetails, setOfferDetails] = useState(null);
 const [isLoading, setIsLoading] = useState(true);

 const params= useParams();
 //permet d'utiliser un param qui est dans l'url

 const {id} = params;
 useEffect(() => {
  const fetchData = async ()=> {
    const response = await axios.get(
      // `https://lereacteur-vinted-api.herokuapp.com/offer/${id}` // ou + id
      `https://site--backend-vinted--r85cyr9v9nmw.code.run/offer/${id}`
    );
    // console.log(response.data)
    setOfferDetails(response.data);
    setIsLoading(false);
  };
  fetchData();
 }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <img
      className="offer-image"
      src={offerDetails.product_image.secure_url}
      alt="offre du vêtement"
 />
      <div className="offer-details">
        <h2>{offerDetails.product_price} €</h2>
        <div>
          {offerDetails.product_details.map((detail, index) => {
            // ou const keyName = Object.key(detail);
            // console.log(keyName[0]);
            return (
              // ou  <div key={index}> <span>{keyName[0]}</span> <span>{detail[keyName[0]]}</span></div>
              <div className="details-line">
                <p>{Object.keys(detail)[0]}</p> 
                <p>{detail[Object.keys(detail)[0]]}</p>
              </div>
              );
          })}
              <div className="offer-description">
                <p>{offerDetails.product_name}</p>
                <p>{offerDetails.product_description}</p>
                <div>
                {offerDetails.owner.account.avatar && (
                  <img 
                  src={offerDetails.owner.account.avatar.secure_url}
                  alt="Vendeur du vêtement"/>
                  )}
                  <p>{offerDetails.owner.account.username}</p> 
                </div>
                <Link to="/payment" 
                state={{ title: offerDetails.product_name, price: offerDetails.product_price,
                username: offerDetails.owner.account.username, }}>
                <button>Acheter</button></Link>
              </div>
            
        </div>
      </div>
     </main>
  );
};

export default Offer;