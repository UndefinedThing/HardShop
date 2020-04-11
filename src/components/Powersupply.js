import React from "react";

const firebase = require("firebase");
require("firebase/firestore");

class PSU extends React.Component {
  constructor() {
    super();
    this.state = {
      certif: "",
      format: "",
      marque: "",
      modulaire: "",
      nom: "",
      puissance: "",
    };
  }
  addPSU = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    const powersupplyRef = db.collection("PowerSupply").add({
      certif: this.state.certif,
      format: this.state.format,
      marque: this.state.marque,
      modulaire: this.state.modulaire,
      nom: this.state.nom,
      puissance: this.state.puissance,
    });
    this.setState({
      certif: "",
      format: "",
      marque: "",
      modulaire: "",
      nom: "",
      puissance: "",
    });
  };

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.addPSU}>
        <input
          type="text"
          name="certif"
          placeholder="certif"
          onChange={this.updateInput}
          value={this.state.certif}
        />
        <input
          type="text"
          name="format"
          placeholder="format"
          onChange={this.updateInput}
          value={this.state.format}
        />
        <input
          type="text"
          name="marque"
          placeholder="marque"
          onChange={this.updateInput}
          value={this.state.marque}
        />
        <input
          type="text"
          name="modulaire"
          placeholder="modulaire"
          onChange={this.updateInput}
          value={this.state.modulaire}
        />
        <input
          type="text"
          name="nom"
          placeholder="nom"
          onChange={this.updateInput}
          value={this.state.nom}
        />
        <input
          type="text"
          name="puissance"
          placeholder="puissance"
          onChange={this.updateInput}
          value={this.state.puissance}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default PSU;
