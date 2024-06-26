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
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

// Import FontAwesome pour les icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Footer from "./components/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faMagnifyingGlass);

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [title, setTitle] = useState("");
  const [slideRange, setSlideRange] = useState([0, 100]);

  const transferToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 5, sameSite: "strict" });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  }; 

  return (
    <Router>
      <Header 
        token={token}
        setToken={setToken}
        transferToken={transferToken}
        title={title}
        setTitle={setTitle}
        slideRange={slideRange}
        setSlideRange={setSlideRange}
        /> 
      <Routes>
        <Route path="/" element={<Home title={title} setTitle={setTitle} slideRange={slideRange}
        setSlideRange={setSlideRange}/>} />
        <Route path="/signup" element={<Signup transferToken={transferToken} setToken={setToken}/>} />
        <Route path="/login" element={<Login transferToken={transferToken} setToken={setToken} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/publish" element={token ? <Publish token={token} /> : <Signup />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

// On place le composant Header avant les <Routes> dans <Router> pour qu'il soit afficher sur chaque page
// Même chose pour le Footer mais à la fin
export default App;
