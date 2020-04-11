import React from "react";

const firebase = require("firebase");
require("firebase/firestore");

class MB extends React.Component {
  constructor() {
    super();
    this.state = {
      chipset: "",
      constructeur: "",
      format: "",
      fréquence_mémoire: "",
      nom: "",
      proco_compatible: "",
      socket: "",
    };
  }
  addMB = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    const mbRef = db.collection("MotherBoard").add({
      chipset: this.state.chipset,
      constructeur: this.state.constructeur,
      format: this.state.format,
      fréquence_mémoire: this.state.fréquence_mémoire,
      nom: this.state.nom,
      proco_compatible: this.state.proco_compatible,
      socket: this.state.socket,
    });
    this.setState({
      chipset: "",
      constructeur: "",
      format: "",
      fréquence_mémoire: "",
      nom: "",
      proco_compatible: "",
      socket: "",
    });
  };

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.addMB}>
        <input
          type="text"
          name="chipset"
          placeholder="socket"
          onChange={this.updateInput}
          value={this.state.chipset}
        />
        <input
          type="text"
          name="constructeur"
          placeholder="constructeur"
          onChange={this.updateInput}
          value={this.state.constructeur}
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
          name="nom"
          placeholder="nom"
          onChange={this.updateInput}
          value={this.state.nom}
        />
        <input
          type="text"
          name="proco_compatible"
          placeholder="proco_compatible"
          onChange={this.updateInput}
          value={this.state.proco_compatible}
        />
        <input
          type="text"
          name="socket"
          placeholder="socket"
          onChange={this.updateInput}
          value={this.state.socket}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MB;
