import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = ({transferToken}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [infos, setInfos] = useState(false);
  const [newsletter, setNewsletter] = useState(false)
  
  const navigate = useNavigate();

  const reDirection = () => {
    navigate("/");
  };

  return (
     <div className="Formulaire">
        <div className="Signup">
        <div>{infos ? <h1>Merci !</h1> : <h1>S'inscrire</h1>}</div>
        {infos === false ? (
        <div className="input-block">
        <div>
          <p className="input-text"></p>
          <input
            className="input-text2"
            onChange={(username) => setUsername(username.target.value)}
            type="text"
            placeholder="Nom d'utilisateur"
            name="name"
            value={username}
          />
        </div>
        <div>
          <p className="input-text"></p>
          <input
            className="input-text2"
            onChange={(elem) => setEmail(elem.target.value)}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
          />
        </div>
        <div>
          <p className="input-text"></p>
          <input
            className="input-text2"
            onChange={(elem) => setPassword(elem.target.value)}
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
          />
        </div>
        <div>
            <div className="flexbox-letter">
                <div className="Newsletter">
                  <input
                    className="checkmark"
                    type="checkbox"
                    value={newsletter}
                    onChange={() => {
                      setNewsletter((current) => !current);
                    }}
                  ></input>S'inscrire à notre newsletter
                </div>
                {/* On pouvais mettre la phrase dans un Label et enfermé le tout dans une div */}
                <div>
                  <span className="span-letter">
                    En m'inscrivant je confirme avoir lu et accepté 
                    les Termes & Conditions et Politique de 
                    Confidentialités de Vinted. Je confirme avoir au 
                    moins 18 ans.
                  </span>
                </div>
              </div>
            </div>
        <div>
          <button
            className="Signupbutton"
            onClick={() => {
              if (!username || !email || !password) {
                alert(`Merci de compléter les informations manquantes`);
              } else {
                const data = async (event) => {
                  event.preventDefault();
                  const formdata = new FormData();
                  formdata.append("username", username);
                  formdata.append("email", email);
                  formdata.append("password", password);
                  formdata.append("newsletter", newsletter);

                  try {
                    const response = await axios.post(
                      "https://lereacteur-vinted-api.herokuapp.com/user/signup",
                      formdata
                    );
                    
                    const token = response.data.token;
                    Cookies.set("token", token, { expires: 5, sameSite: "strict"});
                    token ? setInfos(true) : <p>une erreur est survenue</p>;
                  } catch (error) {
                    console.log(error.message);
                  }
                };
                data();
              }
              setTimeout(() => reDirection, "2000");
            }}
          >
            S'inscrire
            </button>
            <div className="Already-member">
                Tu as déjà un compte ? {" "}
                <Link to="/Login">
                  <span>Connecte-toi !</span>
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Signup;
