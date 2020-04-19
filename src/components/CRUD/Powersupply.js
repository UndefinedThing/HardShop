// import React from "../../../node_modules/react";

// const firebase = require("../../../node_modules/firebase");
// require("../../../node_modules/firebase/firestore");

// class PSU extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       certif: "",
//       format: "",
//       marque: "",
//       modulaire: "",
//       nom: "",
//       puissance: "",
//     };
//   }
//   addPSU = (e) => {
//     e.preventDefault();
//     const db = firebase.firestore();
//     db.settings({
//       timestampsInSnapshots: true,
//     });
//     const powersupplyRef = db.collection("PowerSupply").add({
//       certif: this.state.certif,
//       format: this.state.format,
//       marque: this.state.marque,
//       modulaire: this.state.modulaire,
//       nom: this.state.nom,
//       puissance: this.state.puissance,
//     });
//     this.setState({
//       certif: "",
//       format: "",
//       marque: "",
//       modulaire: "",
//       nom: "",
//       puissance: "",
//     });
//     console.log(powersupplyRef);
//   };

//   updateInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   render() {
//     return (
//       <form onSubmit={this.addPSU}>
//         <input
//           type="text"
//           name="certif"
//           placeholder="certif"
//           onChange={this.updateInput}
//           value={this.state.certif}
//         />
//         <input
//           type="text"
//           name="format"
//           placeholder="format"
//           onChange={this.updateInput}
//           value={this.state.format}
//         />
//         <input
//           type="text"
//           name="marque"
//           placeholder="marque"
//           onChange={this.updateInput}
//           value={this.state.marque}
//         />
//         <input
//           type="text"
//           name="modulaire"
//           placeholder="modulaire"
//           onChange={this.updateInput}
//           value={this.state.modulaire}
//         />
//         <input
//           type="text"
//           name="nom"
//           placeholder="nom"
//           onChange={this.updateInput}
//           value={this.state.nom}
//         />
//         <input
//           type="text"
//           name="puissance"
//           placeholder="puissance"
//           onChange={this.updateInput}
//           value={this.state.puissance}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

// export default PSU;

import React, { Component } from "react";
import { Link } from "react-router-dom";

const firebase = require("firebase");
require("firebase/firestore");

class PSU extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("PowerSupply");
    this.unsubscribe = null;
    this.state = {
      psu: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const psu = [];
    querySnapshot.forEach((doc) => {
      const {
        title,
        certif,
        format,
        marque,
        modulaire,
        nom,
        puissance,
        img
      } = doc.data();
      psu.push({
        key: doc.id,
        doc,
        title,
        certif,
        format,
        marque,
        modulaire,
        nom,
        puissance,
        img
      });
    });
    this.setState({
      psu,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">PSU LIST</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/create">Add Board</Link>
            </h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Marque</th>
                  <th>Modularité</th>
                  <th>Puissance</th>
                  <th>Format</th>
                  <th>Certification</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {this.state.psu.map((psu) => (
                  <tr>
                    <td>
                      <Link to={`/show/${psu.key}`}>
                        {psu.nom}
                      </Link>
                    </td>
                    <td>{psu.marque}</td>
                    <td>{psu.modulaire}</td>
                    <td>{psu.puissance}</td>
                    <td>{psu.format}</td>
                    <td>{psu.certif}</td>
                    <td>{psu.img}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default PSU;