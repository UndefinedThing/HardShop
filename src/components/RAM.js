import React from "react";


const firebase = require("firebase");
  require("firebase/firestore");

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
    addRAM = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settiengs({
            timestampsInSnapshots: true
        });
        const mémoireRef = db.collection("RAM").add({
            capacité: this.state.capacité,
            fréquence: this.state.fréquence,
            interface: this.state.interface,
            latence: this.state.latence,
            marque: this.state.marque,
            nom: this.state.nom,
            quantité: this.state.quantité
        });
        this.setState({
            capacité: "",
            fréquence: "",
            interface: "",
            latence: "",
            marque: "",
            nom: "",
            quantité: ""
        });
    };

    updateInput = e => {
        this.setState({
            [e.traget.name]: e.target.value
        });
    };
    render() {
        return (
            <form onSubmit={this.addRAM}>
                <select value={this.state.capacité} onChange={this.updateInput}>
                    <option value="2 Go">2 Go</option>
                    <option value="4 Go">4 Go</option>
                    <option value="8 Go">8 Go</option>
                    <option value="16 Go">16 Go</option>
                    <option value="32 Go">32 Go</option>
                    <option value="64 Go">64 Go</option>
                    <option value="128 Go">128 Go</option>
                    <option value="256 Go">256 Go</option>
                </select>
                <select value={this.state.fréquence} onChange={this.updateInput}>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <input
                    type="text"
                    name="fréquence"
                    placeholder="fréquence"
                    onChange={this.updateInput}
                    value={this.state.fréquence}
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
                    name="nom"
                    placeholder="nom"
                    onChange={this.updateInput}
                    value={this.state.nom}
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
        )
    }
}

export default RAM;