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
            transfert: ""
        };
    }
    addHardDrive = e => {
        e.prevent.default();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const harddriveRef = db.collection("HDD's").add({
            RPM: this.state.RPM,
            capa: this.state.capa,
            format: this.state.format,
            interface:this.state.interface,
            marque: this.state.marque,
            mémoire_cache: this.state.mémoire_cache,
            nom: this.state.nom,
            transfert: this.state.transfert
        });
        this.setState({
            RPM: Boolean,
            capa: "",
            format: "",
            interface: "",
            marque: "",
            mémoire_cache: "",
            nom: "",
            transfert: ""
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
                <form onSubmit={this.addHardDrive}>
                    <div>
                        <select value={this.state.RPM} onChange={this.updateInput}>
                            <option value="5400">5400</option>
                            <option value="7200">7200</option>
                            <option value="5900">5900</option>
                            <option value="10000">10000</option>
                            <option value="4200">4200</option>
                            <option value="5200">5200</option>
                            <option value="5700">5700</option>
                            <option value="15000">15000</option>
                        </select>
                    </div>
                    <div>
                        <select value={this.state.capa} onChange={this.updateInput}>
                            <option value="1 To">1 To</option>
                            <option value="2 To">2 To</option>
                            <option value="3 To">3 To</option>
                            <option value="4 To">4 To</option>
                            <option value="5 To">5 To</option>
                            <option value="6 To">6 To</option>
                            <option value="8 To">8 To</option>
                            <option value="10 To">10 To</option>
                            <option value="12 To">12 To</option>
                            <option value="14 To">14 To</option>
                            <option value="16 To">16 To</option>
                            <option value="18 To">18 To</option>
                        </select>
                    </div>
                    <div>
                        <select value={this.state.format} onChange={this.updateInput}>
                            <option value='3.5"'>3.5"</option>
                            <option value='2.5"'>2.5"</option>
                            <option value='1.8"'>1.8"</option>
                        </select>
                    </div>
                    <div>
                        <select value={this.state.interface} onChange={this.updateInput}>
                            <option value="S-ATA 6Gb/s">S-ATA 6Gb/s</option>
                            <option value="S-ATA 3Gb/s">S-ATA 3Gb/s</option>
                            <option value="SAS 12Gb/s">SAS 12Gb/s</option>
                            <option value="SAS 6Gb/s">SAS 6Gb/s</option>
                            <option value="S-ATA 1.5Gb/s">S-ATA 1.5Gb/s</option>
                            <option value="Fibre Channel 4Gb">Fibre Channel 4Gb</option>
                        </select>
                    </div>
                    <div>
                        <select value={this.state.marque} onChange={this.updateInput}>
                            <option value="Samsung">Samsung</option>
                            <option value="Seagate">Seagate</option>
                            <option value="Toshiba">Toshiba</option>
                            <option value="Verbatim">Verbatim</option>
                            <option value="Western Digital">Western Digital</option>
                        </select>
                    </div>
                    <div>
                        <select value={this.state.mémoire_cache} onChange={this.updateInput}>
                            <option value="64 Mo">64 Mo</option>
                            <option value="128 Mo">128 Mo</option>
                            <option value="256 Mo">256 Mo</option>
                            <option value="512 Mo">512 Mo</option>
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
                        <select value={this.state.transfert} onChange={this.updateInput}>
                            <option value="210 Mo/s"></option>
                            <option value="150 Mo/s"></option>
                            <option value="200 Mo/s"></option>
                            <option value="147 Mo/s"></option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default HardDrive;