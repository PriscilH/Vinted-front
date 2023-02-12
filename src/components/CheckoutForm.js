// src/CheckoutForm.js
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import axios from "axios";

const CheckoutForm = ({username, title, amount}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // On récupère ici les données bancaires que l'utilisateur rentre
    const cardElement = elements.getElement(CardElement);

    // Demande de création d'un token via l'API Stripe
    // On envoie les données bancaires dans la requête
    const stripeResponse = await stripe.createToken(cardElement, {
      name: username,
    });
    console.log(stripeResponse);
    const stripeToken = stripeResponse.token.id;
    // Une fois le token reçu depuis l'API Stripe
    // Requête vers notre serveur
    // On envoie le token reçu depuis l'API Stripe
    // https://lereacteur-vinted-api.herokuapp.com/payment
    const response = await axios.post("https://site--backend-vinted--r85cyr9v9nmw.code.run/payment", {
        token: stripeToken,
        title: title,
        amount: amount,
    });
    console.log(response.data);
    // Si la réponse du serveur est favorable, la transaction a eu lieu
    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };

  return !completed ? (
        <div>
        <form className="Paycomplete" onSubmit={handleSubmit}>
            <div className="Payinput">
          <CardElement /></div>
          <button className="Buttonvalid" type="submit">Payer</button>
        </form>
        </div>
      ) : (
        <div>
        <span className="Paycheck">Paiement validé ! </span>
      
      <Link to="/">
        <button className="Prevhome">Retour sur la page d'accueil</button>
      </Link>
    </div>
  );
};

export default CheckoutForm;