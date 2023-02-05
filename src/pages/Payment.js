import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkoutform from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

const stripPromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  const location = useLocation();
  const { title } = location.state;
  const { price } = location.state;
  const { username } = location.state;
  const amount = price + 0.4 + 0.8;

  return (
    <div className="Payment">
      <div className="Blockpay">
        <p className="Titlepay">Résumé de la commande</p>
        <div>
          <p>Commande</p>
          <p className="Payprice">{Number.parseFloat(price).toFixed(2)} €</p>
        </div>
        <div>
          <p>Frais protection acheteurs</p>
          <p className="Payprice">0.40 €</p>
        </div>
        <div>
          <p>Frais de port</p>
          <p className="Payprice">0.80 €</p>
        </div>
        <p className="line"></p>
        <div id="total">
          <p>Total</p>
          <p className="Payprice">{Number.parseFloat(amount).toFixed(2)} €</p>
        </div>
        <p className="totaltext">
          Il ne vous reste plus qu'une étape pour vous offrir
          <span> {title} </span>. Vous allez payer{" "}
          <span>{Number.parseFloat(amount).toFixed(2)} €</span> (frais de
          protection et frais de port inclus)
        </p>
        <p className="line-payment"></p>
        <Elements stripe={stripPromise}>
          <Checkoutform
            title={title}
            amount={amount}
            username={username}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;