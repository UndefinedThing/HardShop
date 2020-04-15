import React from "../../../node_modules/react";

const firebase = require("../../../node_modules/firebase");
require("../../../node_modules/firebase/firestore");

class RAM extends React.Component {
  constructor() {
    super();
    this.state = {
      capacité: "",
      fréquence: "",
      interface: "",
      latence: "",
      marque: "",
      nom: "",
      quantité: "",
    };
  }
  addRAM = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settiengs({
      timestampsInSnapshots: true,
    });
    const mémoireRef = db.collection("RAM").add({
      capacité: this.state.capacité,
      fréquence: this.state.fréquence,
      interface: this.state.interface,
      latence: this.state.latence,
      marque: this.state.marque,
      nom: this.state.nom,
      quantité: this.state.quantité,
    });
    this.setState({
      capacité: "",
      fréquence: "",
      interface: "",
      latence: "",
      marque: "",
      nom: "",
      quantité: "",
    });
    console.log(mémoireRef)
  };

  updateInput = (e) => {
    this.setState({
      [e.traget.name]: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.addRAM}>
        <input
          type="text"
          name="capacité"
          placeholder="capacité"
          value={this.state.capacité}
          onChange={this.updateInput}
        ></input>
        <input
          type="text"
          name="fréquence"
          placeholder="fréquence"
          onChange={this.updateInput}
          value={this.state.fréquence}
        />
        <input
          type="text"
          name="nom"
          placeholder="nom"
          onChange={this.updateInput}
          value={this.state.nom}
        ></input>
        <input
          type="text"
          name="interface"
          placeholder="interface"
          onChange={this.updateInput}
          value={this.state.interface}
        />
        <input
          type="text"
          name="latence"
          placeholder="latence"
          onChange={this.updateInput}
          value={this.state.latence}
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
          name="quantité"
          placeholder="quantité"
          onChange={this.updateInput}
          value={this.state.quantité}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RAM;
