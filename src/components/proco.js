import React from "react";


const firebase = require("firebase");
  require("firebase/firestore");

class CPU extends React.Component{
    constructor() {
        super();
        this.state = {
            architecture: "",
            cache: "",
            chipset: "",
            "chipset graphique": "",
            fréquence: "",
            fréquence_boost: "",
            nb_coeur: Number,
            nb_threads: Number,
            nom: "",
            overclocking: Boolean,
            socket: "",
            type: ""
        };
    }

    addCPU = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const cpuRef = db.collection("CPU's").add({
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
            type: this.state.type
        });
        this.setState({
            architecture: "",
            cache: "",
            chipset: "",
            "chipset graphique": Boolean,
            fréquence: "",
            fréquence_boost: "",
            nb_coeur: Number,
            nb_threads: Number,
            nom: "",
            overclocking: Boolean,
            socket: "",
            type: ""
        })
    }
    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        return (
            <form onSubmit={this.addCPU}>
                <select value={this.state.architecture} onChange={this.updateInput}>
                    <option value="AMD Zen : 14 nm"> AMD Zen : 14 nm</option>
                    <option value="AMD Zen+ : 12 nm">AMD Zen+ : 12 nm</option>
                    <option value="AMD Zen2 : 7 nm">AMD Zen2 : 7 nm</option>
                    <option value="Skylake : 14 nm">Skylake : 14 nm</option>
                    <option value="Kaby-Lake : 14 nm">Kaby-Lake : 14 nm</option>
                    <option value="Coffee-Lake : 14 nm">Coffee-Lake : 14 nm</option>
                    <option value="Coffee-Lake Refresh : 14 nm">Coffee-Lake Refresh : 14 nm</option>
                </select>
                <select value={this.state.cache} onChange={this.updateInput}>
                    <option value="3 Mo">3 Mo</option>
                    <option value="4 Mo">4 Mo</option>
                    <option value="6 Mo">6 Mo</option>
                    <option value="8 Mo">8 Mo</option>
                    <option value="8.25 Mo">8.25 Mo</option>
                    <option value="9 Mo">9 Mo</option>
                    <option value="11 Mo">11 Mo</option>
                    <option value="12 Mo">12 Mo</option>
                    <option value="13.75 Mo">13.75 Mo</option>
                    <option value="15 Mo">15 Mo</option>
                    <option value="16 Mo">16 Mo</option>
                    <option value="16.5 Mo">16.5 Mo</option>
                    <option value="18 Mo">18 Mo</option>
                    <option value="19.25 Mo">19.25 Mo</option>
                    <option value="20 Mo">20 Mo</option>
                    <option value="22 Mo">22 Mo</option>
                    <option value="24.75 Mo">24.75 Mo</option>
                    <option value="25 Mo">25 Mo</option>
                    <option value="32 Mo">32 Mo</option>
                    <option value="64 Mo">64 Mo</option>
                    <option value="128 Mo">128 Mo</option>
                    <option value="256 Mo">256 Mo</option>
                </select>
                <select>
                    <option value="AMD A320, B350, B450, X370, X470"></option>
                    <option value="AMD A320, B350, B450, X370, X470, X570"></option>
                    <option value="AMD X570"></option>
                    <option value="AMD X399, X299"></option>
                    <option value="Intel Z170, H170, B150, H110, Q170, Z270, B250, H270, Q150"></option>
                    <option value="Intel X299"></option>
                    <option value="Intel B360, B365, H370, Z370, Z390"></option>
                </select>
                <select value={this.state["chipset graphique"]} onChange={this.updateInput}>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                </select>
                <select value={this.state.fréquence} onChange={this.updateInput}>
                    <option value="1.7 GHz">1.7 GHz</option>
                    <option value="2.1 GHz">2.1 GHz</option>
                    <option value="2.4 GHz">2.4 GHz</option>
                    <option value="2.6 GHz">2.6 GHz</option>
                    <option value="2.7 GHz">2.7 GHz</option>
                    <option value="2.8 GHz">2.8 GHz</option>
                    <option value="2.9 GHz">2.9 GHz</option>
                    <option value="3 GHz">3 GHz</option>
                    <option value="3.1 GHz">3.1 GHz</option>
                    <option value="3.2 GHz">3.2 GHz</option>
                    <option value="3.3 Ghz">3.3 Ghz</option>
                    <option value="3.4 GHz">3.4 GHz</option>
                    <option value="3.5 Ghz">3.5 Ghz</option>
                    <option value="3.6 GHz">3.6 Ghz</option>
                    <option value="3.7 GHz">3.7 GHz</option>
                    <option value="3.8 GHz">3.8 GHz</option>
                    <option value="3.9 GHz">3.9 Ghz</option>
                </select>
                   
                <select value={this.state.fréquence_boost} onChange={this.updateInput}>
                    <option value="3 GHz">3 GHz</option>
                    <option value="3.1 GHz">3.1 GHz</option>
                    <option value="3.2 GHz">3.2 GHz</option>
                    <option value="3.3 Ghz">3.3 Ghz</option>
                    <option value="3.4 GHz">3.4 GHz</option>
                    <option value="3.5 Ghz">3.5 Ghz</option>
                    <option value="3.6 GHz">3.6 Ghz</option>
                    <option value="3.7 GHz">3.7 GHz</option>
                    <option value="3.8 GHz">3.8 GHz</option>
                    <option value="3.9 GHz">3.9 Ghz</option>
                    <option value="4 GHz">4 GHz</option>
                    <option value="4.1 GHz">4.1 GHz</option>
                    <option value="4.2 GHz">4.2 GHz</option>
                    <option value="4.3 GHz">4.3 Ghz</option>
                    <option value="4.4 GHz">4.4 Ghz</option>
                    <option value="4.5 GHz">4.5 Ghz</option>
                    <option value="4.6 GHz">4.6 GHz</option>
                    <option value="4.7 GHz">4.7 GHz</option>
                    <option value="4.8 GHz">4.8 GHz</option>
                    <option value="4.9 GHz">4.9 GHz</option>
                    <option value="5 GHz">5 GHz</option>
                </select>
                <select value={this.state.nb_coeur} onChange={this.updateInput}>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="20">20</option>
                    <option value="24">24</option>
                    <option value="32">32</option>
                    <option value="64">64</option>
                </select>
                <select value={this.state.nb_threads} onChange={this.updateInput}>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="20">20</option>
                    <option value="24">24</option>
                    <option value="28"></option>
                    <option value="32"></option>
                    <option value="36"></option>
                    <option value="40"></option>
                    <option value="48"></option>
                    <option value="64"></option>
                    <option value="128"></option>
                </select>
                <select value={this.state.overclocking} onChange={this.updateInput}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <select value={this.state.socket} onChange={this.updateInput}>
                    <option value="Intel 1151">Intel 1151</option>
                    <option value="Intel 2011-3">Intel 2011-3</option>
                    <option value="Intel 2066">Intel 2066</option>
                    <option value="AMD AM4">AMD AM4</option>
                    <option value="AMD TR4">AMD TR4</option>
                    <option value="AMD TRx4">AMD TRx4</option>
                </select>
                <select value={this.state.type} onChange={this.updateInput}>
                    <option value="Intel">Intel</option>
                    <option value="AMD">AMD</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default CPU;