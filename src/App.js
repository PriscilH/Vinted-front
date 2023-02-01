import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
// Import des composants
import Header from "./components/Header";

// Import de pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// Import FontAwesome pour les icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import Filtersoffers from "./pages/Filtersoffers";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faMagnifyingGlass);

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [title, setTitle] = useState("");
  const [priceMin, setPriceMin] = useState(0);

  const transferToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 1, sameSite: "strict" });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  }; 

  return (
    <Router>
      <Header 
        token={token}
        transferToken={transferToken}
        title={title}
        setTitle={setTitle}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        /> 
      <Routes>
        <Route path="/" element={<Home priceMin={priceMin} setPriceMin={setPriceMin} />} />
        <Route path="/signup" element={<Signup transferToken={transferToken} token={token}/>} />
        <Route path="/login" element={<Login transferToken={transferToken} token={token} />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

// On place le composant Header avant les <Routes> dans <Router> pour qu'il soit afficher sur chaque page
export default App;
