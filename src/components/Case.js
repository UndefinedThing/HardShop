import React from "react";

const firebase = require("firebase");
require("firebase/firestore");

class Boitier extends React.Component {
  constructor() {
    super();
    this.state = {
      RGB: "",
      "alim inclus": "",
      couleur: "",
      "façade latérale": "",
      format: "",
      nom: "",
      ventilateur: "",
    };
  }
  addBoitier = (e) => {
    e.preventDefault();
    const db = firebase.firestore();

    const boitierRef = db.collection("Case").add({
      RGB: this.state.RGB,
      "alim inclus": this.state["alim inclus"],
      couleur: this.state.couleur,
      "façade latérale": this.state["façade latérale"],
      format: this.state.format,
      nom: this.state.nom,
      ventilateur: this.state.ventilateur,
    });
    this.setState({
      RGB: "",
      "alim inclus": "",
      couleur: "",
      "façade latérale": "",
      format: "",
      nom: "",
      ventilateur: "",
    });
    console.log(boitierRef);
  };

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addBoitier}>
          <div>
            <input
              type="text"
              name="nom"
              placeholder="nom"
              onChange={this.updateInput}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="format"
              placeholder="format"
              onChange={this.updateInput}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="couleur"
              placeholder="couleur"
              onChange={this.updateInput}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="alim inclus"
              placeholder="alimentation inclus"
              onChange={this.updateInput}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="ventilateur"
              placeholder="ventilateur"
              onChange={this.updateInput}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="façade latérale"
              placeholder="façade latérale"
              onChange={this.updateInput}
            />
          </div>
          <div>
            <input
              type="text"
              name="RGB"
              placeholder="RGB"
              onChange={this.updateInput}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Boitier;
