import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const token = Cookies.get("token");
  console.log(token);

  return token ? (
    <div className="publish">
      <form
        className="block"
        onSubmit={async (event) => {
          event.preventDefault();

          const formData = new FormData();
          formData.append("title", title);
          formData.append("description", description);
          formData.append("price", price);
          formData.append("condition", condition);
          formData.append("city", city);
          formData.append("brand", brand);
          formData.append("size", size);
          formData.append("color", color);
          formData.append("picture", file);

          for (let pair of formData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
          }

          try {
            const response = await axios.post(
              // "https://lereacteur-vinted-api.herokuapp.com/offer/publish"
              "https://site--backend-vinted--r85cyr9v9nmw.code.run/offer/publish",
              formData,
              {
                headers: {
                   Authorization: `Bearer ${token}`,
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            console.log(response.data);
          } catch (error) {
            console.log(error);
            setError("Vos informations sont incomplètes");
          }
        }}
      >
        <h2>Vends ton article</h2>
        <section className="Block-publish">
          <div className="Block-photo">
          <div className="publish-photo">
            <div className="publish-file">
              <label htmlFor="file"> ✚ Ajoute une photo</label>
            </div>
            <input
              className="input-file"
              name="file"
              id="file"
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            /></div>
          </div>
        </section>
        <section className="Block-publish">
          <div>
            <label htmlFor="title">Titre</label>
            <input
              className="input-publish"
              type="text"
              name="title"
              id="title"
              placeholder="ex: Pantalon"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <p className="line-publish"></p>
          <div>
            <label htmlFor="description">Décris ton article</label>
            <textarea
              className="input-publish"
              name="description"
              id="description"
              rows="5"
              value={description}
              placeholder="ex: Article neuf, jamais porté"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></textarea>
          </div>
        </section>
        <section className="Block-publish">
          <div>
            <label htmlFor="brand">Marque</label>
            <input
              className="input-publish"
              type="text"
              name="brand"
              id="brand"
              placeholder="ex: Mango"
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>
          <p className="line-publish"></p>
          <div>
            <label htmlFor="size">Taille</label>
            <input
              className="input-publish"
              type="text"
              name="size"
              id="size"
              placeholder="ex: S/34"
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>
          <p className="line-publish"></p>
          <div>
            <label htmlFor="color">Couleur</label>
            <input
              className="input-publish"
              type="text"
              name="color"
              id="color"
              placeholder="ex: Violet"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          <p className="line-publish"></p>
          <div>
            <label htmlFor="condition">Etat</label>
            <input
              className="input-publish"
              type="text"
              name="condition"
              id="condition"
              placeholder="ex: Neuf"
              value={condition}
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </div>
          <p className="line-publish"></p>
          <div>
            <label htmlFor="city">Lieu</label>
            <input
              className="input-publish"
              type="text"
              name="city"
              id="city"
              placeholder="ex: Nantes"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
        </section>
        <section className="Block-publish">
          <div>
            <label htmlFor="price">Prix</label>
            <input
              className="input-publish"
              type="number"
              name="price"
              id="price"
              placeholder="ex: 30 €"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div className="Block-publish">
            <label></label>
            <div className="checkbox-publish">
              <input type="checkbox" id="exchange" name="exchange" />
              <label htmlFor="exchange">
                Je suis intéressé(e) par les échanges
              </label>
            </div>
          </div>
        </section>
        <div className="button-publish">
          <button>Ajouter</button>
        </div>
        <p>{error}</p>
      </form>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: "/publish" }} />
  );
};

export default Publish;