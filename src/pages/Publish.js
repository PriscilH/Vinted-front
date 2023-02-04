import { useNavigate } from "react-router-dom";
import React, { useState, Component } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";

const Publish = ({ token }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quality, setQuality] = useState("");
    const [city, setCity] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [image, setImage] = useState();
    const navigate = useNavigate();

/// ----------- DROPBOX FUNCTION ----------- ///

class Basic extends Component {
    constructor() {
      super();
      this.onDrop = (files) => {
        setImage(files[0]);
        this.setState({ files });
      };
      this.state = {
        files: [],
      };
    }

    render() {
      const files = this.state.files.map((file) => (
        <p>
          {file.name} - {file.size} bytes
        </p>
      ));

      return (
        <Dropzone onDrop={this.onDrop}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <button className="Photo">Ajoute une photo</button>
              </div>
              <aside>
                <p>{image && image.name} </p>
                <ul>{files}</ul>
              </aside>
            </section>
          )}
        </Dropzone>
      );
    }
  }

  /// ----------- CONDITIONNAL RENDERING IF ----------- ///

  if (token) {
    return (
      <div className="Part-2">
        <div className="Publish-style">
          <h2>Vends ton article</h2>
          <div>
            <div className="Block-publish2">
              <div className="dropbox">
                <Basic />
              </div>
            </div>
            <div className="block-publish">
              <div className="settings-offer">
                <div>Titre</div>
                <input
                  className="input-offer2"
                  onChange={(title) => setTitle(title.target.value)}
                  type="text"
                  placeholder="ex : Pull"
                  name="title"
                  value={title}
                ></input>
              </div>
              <div className="settings-offer">
                <div>Décris ton article</div>
                <input
                  className="input-offer-descript"
                  onChange={(description) =>
                    setDescription(description.target.value)
                  }
                  type="text"
                  placeholder="ex : article neuf et jamais porté"
                  name="description"
                  value={description}
                ></input>
              </div>
            </div>
            <div className="block-publish">
              <div className="settings-offer">
                <div>Marque</div>
                <input
                  className="input-offer2"
                  onChange={(brand) => setBrand(brand.target.value)}
                  type="text"
                  placeholder="ex : Mango"
                  name="marque"
                  value={brand}
                ></input>
              </div>
              <div className="settings-offer">
                <div>Taille</div>
                <input
                  className="input-offer2"
                  onChange={(size) => setSize(size.target.value)}
                  type="text"
                  placeholder="ex : S ou 34"
                  name="taille"
                  value={size}
                ></input>
              </div>
              <div className="settings-offer">
                <div>Couleur</div>
                <input
                  className="input-offer2"
                  onChange={(color) => setColor(color.target.value)}
                  type="text"
                  placeholder="ex : Marron"
                  name="couleur"
                  value={color}
                ></input>
              </div>
              <div>
                <div className="settings-offer">
                  <div>Etat</div>
                  <input
                    className="input-offer2"
                    onChange={(quality) => setQuality(quality.target.value)}
                    type="text"
                    placeholder="ex : Neuf"
                    name="etat"
                    value={quality}
                  ></input>
                </div>
                <div className="settings-offer">
                  <div>Lieu</div>
                  <input
                    className="input-offer2"
                    onChange={(city) => setCity(city.target.value)}
                    type="text"
                    placeholder="ex : Nantes"
                    name="ville"
                    value={city}
                  ></input>
                </div>
              </div>
            </div>
            <div className="block-publish">
              <div className="settings-offer">
                <div>Prix</div>
                <input
                  className="input-offer2"
                  onChange={(price) => setPrice(price.target.value)}
                  type="text"
                  placeholder="ex : 30€"
                  name="prix"
                  value={price}
                ></input>
              </div>
              <div className="settings-offer-2">
                <div className="invisible"> </div>
                <div>
                  <input className="checkmark" type="checkbox"></input> 
                  <p className="swap">Je suis intéréssé(e) par les échanges</p>
                </div>
              </div>
            </div>
            <div className="button-add-offer">
              <div>
                <button
                  onClick={() => {
                    if (title === "" || description === "" || price === "") {
                      alert(`Vos informations sont incomplètes`);
                    } else {
                      const data = async () => {
                        const formdata = new FormData();

                        formdata.append("name", title);
                        formdata.append("description", description);
                        formdata.append("brand", brand);
                        formdata.append("size", size);
                        formdata.append("color", color);
                        formdata.append("quality", quality);
                        formdata.append("city", city);
                        formdata.append("price", price);
                        formdata.append("image", image);
                        console.log(formdata);
                        try {
                          const response = await axios.post(
                            "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                            formdata,
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          );
                          console.log(response.data);
                          navigate("/Offers");
                        } catch (error) {
                          console.log(error.message);
                        }
                      };
                      data();
                    }
                  }}
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /// ----------- CONDITIONNAL RENDERING ELSE ----------- ///
  else {
    navigate("/signup");
  }
};

export default Publish;