// import React from "../../../node_modules/react";

// const firebase = require("../../../node_modules/firebase");
// require("../../../node_modules/firebase/firestore");

// class SSD extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       capacité: "",
//       connectique: "",
//       format: "",
//       interface: "",
//       lecture: "",
//       marque: "",
//       nom: "",
//       écriture: "",
//     };
//   }
//   addSSD = (e) => {
//     e.preventDefault();
//     const db = firebase.firestore();
//     db.settings({
//       timestampsInSnapshots: true,
//     });
//     const ssdRef = db.collection("SSD's").add({
//       capacité: this.state.capacité,
//       connectique: this.state.connectique,
//       format: this.state.format,
//       interface: this.state.interface,
//       lecture: this.state.lecture,
//       marque: this.state.marque,
//       nom: this.state.nom,
//       écriture: this.state.écriture,
//     });
//     console.log(ssdRef);
//     this.setState({
//       capacité: "",
//       connectique: "",
//       format: "",
//       interface: "",
//       lecture: "",
//       marque: "",
//       nom: "",
//       écriture: "",
//     });
//   };

//   updateInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   render() {
//     return (
//       <form onSubmit={this.addSSD}>
//         <input
//           type="text"
//           name="capacité"
//           placeholder="capacité"
//           onChange={this.updateInput}
//           value={this.state.capacité}
//         />
//         <input
//           type="text"
//           name="connectique"
//           placeholder="connectique"
//           onChange={this.updateInput}
//           value={this.state.connectique}
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
//           name="interface"
//           placeholder="interface"
//           onChange={this.updateInput}
//           value={this.state.interface}
//         />
//         <input
//           type="text"
//           name="lecture"
//           placeholder="lecture"
//           onChange={this.updateInput}
//           value={this.state.lecture}
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
//           name="nom"
//           placeholder="nom"
//           onChange={this.updateInput}
//           value={this.state.nom}
//         />
//         <input
//           type="text"
//           name="écriture"
//           placeholder="écriture"
//           onChange={this.updateInput}
//           value={this.state.écriture}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

// export default SSD;

import React, { Component } from "react";
import { Link } from "react-router-dom";

const firebase = require("firebase");
require("firebase/firestore");

class SSD extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("SSD's");
    this.unsubscribe = null;
    this.state = {
      ssd: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const ssd = [];
    querySnapshot.forEach((doc) => {
      const {
        title,
        capacité,
        connectique,
        format,
        lecture,
        marque,
        nom,
        écriture,
      } = doc.data();
      ssd.push({
        key: doc.id,
        doc,
        title,
        capacité,
        connectique,
        format,
        lecture,
        marque,
        nom,
        écriture,
      });
    });
    this.setState({
      ssd,
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
            <h3 class="panel-title">SSD LIST</h3>
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
                  <th>Capacité</th>
                  <th>Connectique</th>
                  <th>Format</th>
                  <th>Lecture</th>
                  <th>Ecriture</th>
                </tr>
              </thead>
              <tbody>
                {this.state.ssd.map((ssd) => (
                  <tr>
                    <td>
                      <Link to={`/show/${ssd.key}`}>{ssd.nom}</Link>
                    </td>
                    <td>{ssd.marque}</td>
                    <td>{ssd.capacité}</td>
                    <td>{ssd.connectique}</td>
                    <td>{ssd.format}</td>
                    <td>{ssd.lecture}</td>
                    <td>{ssd.écriture}</td>
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

export default SSD;
