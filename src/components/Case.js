import React from "react";

const firebase = require("firebase");
  require("firebase/firestore");

class Boitier extends React.Component {
    constructor() {
        super();
        this.state = {
            RGB: Boolean,
            "alim inclus": Boolean,
            couleur: "",
            "façade latérale": "",
            format: "",
            nom: "",
            ventilateur: ""
        };
    }
    addBoitier = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const boitierRef = db.collection("Case").add({
            RGB: this.state.RGB,
            "alim inclus": this.state["alim inclus"],
            couleur: this.state.couleur,
            "façade latérale": this.state["façade latérale"],
            format: this.state.format,
            nom: this.state.nom,
            ventilateur: this.state.ventilateur
        });
        this.setState({
            RGB: Boolean,
            "alim inclus": Boolean,
            couleur: "",
            "façade latérale": "",
            format: "",
            nom: "",
            ventilateur: "",
        });
    };

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.addBoitier}>
                    <div>
                        <select value={this.state.RGB} onChange={this.updateInput}>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                    </div>   
                    <div>
                        <select value={this.state["alim inclus"]}>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                    </div>   
                    <div>  
                        <select value={this.state.couleur}>
                            <option value="Noir, Transparent">Noir, Transparent</option>
                            <option value="Noir, Blanc, Transparent">Noir, Blanc, Transparent</option>
                            <option value="Blanc, Transparent">Blanc, Transparent</option>
                            <option value="Rouge, Blanc, Transparent">Rouge, Blanc, Transparent</option>
                            <option value="Noir">Noir</option>
                            <option value="Blanc">Blanc</option>
                        </select>
                    </div>
                    <div>
                        <select value={this.state["façade latérale"]} onChange={this.updateInput}>
                            <option value="Plexiglass">Plexiglass</option>
                            <option value="Verre trempé">Verre trempé</option>
                            <option value="Null">Null</option>
                        </select>
                    </div>
                    <div>
                        <select value={this.state.format} onChange={this.updateInput}>
                            <option value="Grand-Tour">Grand-Tour</option>
                            <option value="Moyen-Tour">Moyen-Tour</option>
                            <option value="Mini-Tour">Mini-Tour</option>
                        </select>
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
                        <select value={this.state.ventilateur} onChange={this.updateInput}>
                            <option value="x2 normal"></option>
                            <option value="x3 RGB"></option>
                            <option value="x2 RGB"></option>
                            <option value="x3 normal"></option>
                            <option value="x4 RGB"></option>
                            <option value="x4 normal"></option>
                            <option value="x1 RGB"></option>
                            <option value="x1 normal"></option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>     
        )
    }
}

export default Boitier;