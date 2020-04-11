import React from "react";

const firebase = require("firebase");
require("firebase/firestore");

class CPU extends React.Component {
  constructor() {
    super();
    this.state = {
      architecture: "",
      cache: "",
      chipset: "",
      "chipset graphique": "",
      fréquence: "",
      fréquence_boost: "",
      nb_coeur: "",
      nb_threads: "",
      nom: "",
      overclocking: "",
      socket: "",
      type: "",
    };
  }

  addCPU = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    db.collection("CPU's").add({
      architecture: this.state.architecture,
      cache: this.state.cache,
      chipset: this.state.chipset,
      "chipset graphique": this.state["chipset graphique"],
      fréquence: this.state.fréquence,
      fréquence_boost: this.state.fréquence_boost,
      nb_coeur: this.state.nb_coeur,
      nb_threads: this.state.nb_threads,
      nom: this.state.nom,
      overclocking: this.state.overclocking,
      socket: this.state.socket,
      type: this.state.type,
    });
    this.setState({
      architecture: "",
      cache: "",
      chipset: "",
      "chipset graphique": "",
      fréquence: "",
      fréquence_boost: "",
      nb_coeur: "",
      nb_threads: "",
      nom: "",
      overclocking: "",
      socket: "",
      type: "",
    });
  };
  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.addCPU}>
        <input
          type="text"
          name="nom"
          placeholder="nom"
          value={this.state.architecture}
          onChange={this.updateInput}
        ></input>
        <input
          type="text"
          name="nom"
          placeholder="nom"
          value={this.state.cache}
          onChange={this.updateInput}
        ></input>
        <input></input>
        <input
          type="text"
          name="nom"
          placeholder="nom"
          value={this.state["chipset graphique"]}
          onChange={this.updateInput}
        ></input>
        <input
          type="text"
          name="nom"
          placeholder="nom"
          value={this.state.fréquence}
          onChange={this.updateInput}
        ></input>

        <input
          type="text"
          name="nom"
          placeholder="nom"
          value={this.state.fréquence_boost}
          onChange={this.updateInput}
        ></input>
        <input
          type="text"
          name="nom"
          placeholder="nom"
          value={this.state.nb_coeur}
          onChange={this.updateInput}
        ></input>
        <input
          type="text"
          name="nom"
          placeholder="nom"
          value={this.state.nb_threads}
          onChange={this.updateInput}
        ></input>
        <input
          type="text"
          name="nom"
          placeholder="nom"
          value={this.state.overclocking}
          onChange={this.updateInput}
        ></input>
        <input
          type="text"
          name="nom"
          placeholder="nom"
          value={this.state.socket}
          onChange={this.updateInput}
        ></input>
        <input
          type="text"
          name="nom"
          placeholder="nom"
          value={this.state.type}
          onChange={this.updateInput}
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CPU;
