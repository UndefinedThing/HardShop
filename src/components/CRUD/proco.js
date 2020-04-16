import React from "../../../node_modules/react";

const firebase = require("../../../node_modules/firebase");
require("../../../node_modules/firebase/firestore");

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
          name="architecture"
          placeholder="architecture"
          value={this.state.architecture}
          onChange={this.updateInput}
        />
        <input
          type="text"
          name="cache"
          placeholder="cache"
          value={this.state.cache}
          onChange={this.updateInput}
        />
        <input
          type="text"
          name="chipset graphique"
          placeholder="chipset graphique"
          value={this.state["chipset graphique"]}
          onChange={this.updateInput}
        />
        <input
          type="text"
          name="fréquence"
          placeholder="fréquence"
          value={this.state.fréquence}
          onChange={this.updateInput}
        />

        <input
          type="text"
          name="fréquence boost"
          placeholder="fréquence boost"
          value={this.state.fréquence_boost}
          onChange={this.updateInput}
        />
        <input
          type="text"
          name="Nombre coeur"
          placeholder="Nombre coeur"
          value={this.state.nb_coeur}
          onChange={this.updateInput}
        />
        <input
          type="text"
          name="Nombre Threads"
          placeholder="Nombre Threads"
          value={this.state.nb_threads}
          onChange={this.updateInput}
        />
        <input
          type="text"
          name="overclocking"
          placeholder="overclocking"
          value={this.state.overclocking}
          onChange={this.updateInput}
        />
        <input
          type="text"
          name="socket"
          placeholder="socket"
          value={this.state.socket}
          onChange={this.updateInput}
        />
        <input
          type="text"
          name="nom"
          placeholder="nom"
          value={this.state.nom}
          onChange={this.updateInput}
        />
        <input
          type="text"
          name="type"
          placeholder="type"
          value={this.state.type}
          onChange={this.updateInput}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CPU;
