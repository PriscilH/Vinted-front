import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ transferToken }) => {
  // MES USESTATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [infos, setInfos] = useState(false);

  // MES VARIABLES
  const navigate = useNavigate();
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="Formulaire">
      <div className="App">
        <h1>Se connecter</h1>
        {infos === false ? (
          <div className="input-block">
            <div>
              <p className="input-text"></p>
              <input
                className="input-text2"
                onChange={(elem) => setEmail(elem.target.value)}
                type="email"
                placeholder="Adresse email"
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
                placeholder="Mot de passe"
                name="password"
                value={password}
              />
            </div>
            <div>
              <button
                className="Logbutton"
                onClick={() => {
                  if (email === "") {
                    alert(`Your informations are not complete`);
                  } else {
                    setInfos(true);

                    const data = async () => {
                      try {
                        const response = await axios.post(
                          "https://lereacteur-vinted-api.herokuapp.com/user/login",
                          {
                            email: email,
                            password: password,
                          }
                        );
                        const token = response.data.token;
                        transferToken(token);
                        navigate("/");
                      } catch (error) {
                        console.log(error.message);
                      }
                    };
                    data();
                  }
                }}
              >
                Se connecter
              </button>
              <div className="Notmember">
                Pas encore de compte ? {" "}
                <Link to="/Signup">
                  <span>Inscris-toi !</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="product-description">
              Vos identifiants sont incorrects, réessayez
            </p>
            <button onClick={refreshPage}>Retry</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;