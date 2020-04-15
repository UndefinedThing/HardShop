import React from "../../../node_modules/react";

const firebase = require("../../../node_modules/firebase");
require("../../../node_modules/firebase/firestore");

class WC extends React.Component {
  constructor() {
    super();
    this.state = {
      bruit: "",
      format: "",
      marque: "",
      matériaux: "",
      nom: "",
      socket: "",
      type: "",
    };
  }
  addWC = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    const wcRef = db.collection("Cooling").add({
      bruit: this.state.bruit,
      format: this.state.format,
      marque: this.state.marque,
      matériaux: this.state.matériaux,
      nom: this.state.nom,
      socket: this.state.socket,
      type: this.state.type,
    });
    this.setState({
      bruit: "",
      format: "",
      marque: "",
      matériaux: "",
      nom: "",
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
      <div>
        <form onSubmit={this.addWC}>
          <div>
            <input
              type="text"
              name="bruit"
              placeholder="bruit"
              onChange={this.updateInput}
              value={this.state.bruit}
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
              name="matériaux"
              placeholder="matériaux"
              onChange={this.updateInput}
              value={this.state.matériaux}
            />
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
                type="text"
                name="socket"
                placeholder="socket"
                onChange={this.updateInput}
                value={this.state.socket}
              />
            </div>
            <div>
              <input
                type="text"
                name="type"
                placeholder="type"
                onChange={this.updateInput}
                value={this.state.type}
              />
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default WC;
