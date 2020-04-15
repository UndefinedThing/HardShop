import React from "./node_modules/react";

const firebase = require("./node_modules/firebase");
require("./node_modules/firebase/firestore");

class SSD extends React.Component {
  constructor() {
    super();
    this.state = {
      capacité: "",
      connectique: "",
      format: "",
      interface: "",
      lecture: "",
      marque: "",
      nom: "",
      écriture: "",
    };
  }
  addSSD = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    const ssdRef = db.collection("SSD's").add({
      capacité: this.state.capacité,
      connectique: this.state.connectique,
      format: this.state.format,
      interface: this.state.interface,
      lecture: this.state.lecture,
      marque: this.state.marque,
      nom: this.state.nom,
      écriture: this.state.écriture,
    });
    console.log(ssdRef);
    this.setState({
      capacité: "",
      connectique: "",
      format: "",
      interface: "",
      lecture: "",
      marque: "",
      nom: "",
      écriture: "",
    });
  };

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.addSSD}>
        <input
          type="text"
          name="capacité"
          placeholder="capacité"
          onChange={this.updateInput}
          value={this.state.capacité}
        />
        <input
          type="text"
          name="connectique"
          placeholder="connectique"
          onChange={this.updateInput}
          value={this.state.connectique}
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
          name="interface"
          placeholder="interface"
          onChange={this.updateInput}
          value={this.state.interface}
        />
        <input
          type="text"
          name="lecture"
          placeholder="lecture"
          onChange={this.updateInput}
          value={this.state.lecture}
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
          name="nom"
          placeholder="nom"
          onChange={this.updateInput}
          value={this.state.nom}
        />
        <input
          type="text"
          name="écriture"
          placeholder="écriture"
          onChange={this.updateInput}
          value={this.state.écriture}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SSD;
