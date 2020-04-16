// import React from "../../../node_modules/react";

// const firebase = require("../../../node_modules/firebase");
// require("../../../node_modules/firebase/firestore");

// class Boitier extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       RGB: "",
//       "alim inclus": "",
//       couleur: "",
//       "façade latérale": "",
//       format: "",
//       nom: "",
//       ventilateur: "",
//     };
//   }
//   addBoitier = (e) => {
//     e.preventDefault();
//     const db = firebase.firestore();

//     const boitierRef = db.collection("Case").add({
//       RGB: this.state.RGB,
//       "alim inclus": this.state["alim inclus"],
//       couleur: this.state.couleur,
//       "façade latérale": this.state["façade latérale"],
//       format: this.state.format,
//       nom: this.state.nom,
//       ventilateur: this.state.ventilateur,
//     });
//     this.setState({
//       RGB: "",
//       "alim inclus": "",
//       couleur: "",
//       "façade latérale": "",
//       format: "",
//       nom: "",
//       ventilateur: "",
//     });
//     console.log(boitierRef);
//   };

//   updateInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.addBoitier}>
//           <div>
//             <input
//               type="text"
//               name="nom"
//               placeholder="nom"
//               onChange={this.updateInput}
//               value={this.state.nom}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="format"
//               placeholder="format"
//               onChange={this.updateInput}
//               value={this.state.format}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="couleur"
//               placeholder="couleur"
//               onChange={this.updateInput}
//               value={this.state.couleur}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="alim inclus"
//               placeholder="alimentation inclus"
//               onChange={this.updateInput}
//               value={this.state["alim inclus"]}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="ventilateur"
//               placeholder="ventilateur"
//               onChange={this.updateInput}
//               value={this.state.ventilateur}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="façade latérale"
//               placeholder="façade latérale"
//               onChange={this.updateInput}
//               value={this.state["façade latérale"]}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="RGB"
//               placeholder="RGB"
//               onChange={this.updateInput}
//               value={this.state.RGB}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const firebase = require("firebase");
require("firebase/firestore");

class Boitier extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('Case');
    this.unsubscribe = null;
    this.state = {
      Case: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const Case = [];
    querySnapshot.forEach((doc) => {
      const { title, img, RGB, alim_inclus, couleur, façade_latérale, format, nom, ventilateur } = doc.data();
      Case.push({
        key: doc.id,
        doc, 
        title,
        RGB,
        alim_inclus,
        couleur,
        façade_latérale,
        format,
        nom,
        ventilateur,
        img

      });
    });
    this.setState({
      Case
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              CASE LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add Board</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>RGB</th>
                  <th>Alim inclus</th>
                  <th>Couleur</th>
                  <th>Façade Latérale</th>
                  <th>Format</th>
                  <th>Ventilateur</th>
                </tr>
              </thead>
              <tbody>
                {this.state.Case.map(Case =>
                  <tr>
                    <td>{Case.img}</td>
                    <td><Link to={`/show/${Case.key}`}>{Case.title}</Link></td>
                    <td>{Case.nom}</td>
                    <td>{Case.RGB}</td>
                    <td>{Case.alim_inclus}</td>
                    <td>{Case.couleur}</td>
                    <td>{Case.façade_latérale}</td>
                    <td>{Case.format}</td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Boitier;
