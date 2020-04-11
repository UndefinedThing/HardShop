import React from "react";

const firebase = require("firebase");
require("firebase/firestore");

class HardDrive extends React.Component {
  constructor() {
    super();
    this.state = {
      RPM: Number,
      capa: "",
      format: "",
      interface: "",
      marque: "",
      mémoire_cache: "",
      nom: "",
      transfert: "",
    };
  }
  addHardDrive = (e) => {
    e.prevent.default();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    const harddriveRef = db.collection("HDD's").add({
      RPM: this.state.RPM,
      capa: this.state.capa,
      format: this.state.format,
      interface: this.state.interface,
      marque: this.state.marque,
      mémoire_cache: this.state.mémoire_cache,
      nom: this.state.nom,
      transfert: this.state.transfert,
    });
    this.setState({
      RPM: Boolean,
      capa: "",
      format: "",
      interface: "",
      marque: "",
      mémoire_cache: "",
      nom: "",
      transfert: "",
    });
  };

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addHardDrive}>
          <div>
            <input
              type="text"
              name="nom"
              placeholder="nom"
              value={this.state.RPM}
              onChange={this.updateInput}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="nom"
              placeholder="nom"
              value={this.state.capa}
              onChange={this.updateInput}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="nom"
              placeholder="nom"
              value={this.state.format}
              onChange={this.updateInput}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="nom"
              placeholder="nom"
              value={this.state.interface}
              onChange={this.updateInput}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="nom"
              placeholder="nom"
              value={this.state.marque}
              onChange={this.updateInput}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="nom"
              placeholder="nom"
              value={this.state.mémoire_cache}
              onChange={this.updateInput}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="nom"
              placeholder="nom"
              onChange={this.updateInput}
              value={this.state.nom}
            />
          </div>
          <div>
            <input
              value={this.state.transfert}
              onChange={this.updateInput}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default HardDrive;
