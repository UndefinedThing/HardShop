// import React from "../../../node_modules/react";

// const firebase = require("../../../node_modules/firebase");
// require("../../../node_modules/firebase/firestore");

// class WC extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       bruit: "",
//       format: "",
//       marque: "",
//       matériaux: "",
//       nom: "",
//       socket: "",
//       type: "",
//     };
//   }
//   addWC = (e) => {
//     e.preventDefault();
//     const db = firebase.firestore();
//     db.settings({
//       timestampsInSnapshots: true,
//     });
//     const wcRef = db.collection("Cooling").add({
//       bruit: this.state.bruit,
//       format: this.state.format,
//       marque: this.state.marque,
//       matériaux: this.state.matériaux,
//       nom: this.state.nom,
//       socket: this.state.socket,
//       type: this.state.type,
//     });
//     this.setState({
//       bruit: "",
//       format: "",
//       marque: "",
//       matériaux: "",
//       nom: "",
//       socket: "",
//       type: "",
//     });
//     console.log(wcRef);
//   };

//   updateInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.addWC}>
//           <div>
//             <input
//               type="text"
//               name="bruit"
//               placeholder="bruit"
//               onChange={this.updateInput}
//               value={this.state.bruit}
//             />
//             <input
//               type="text"
//               name="format"
//               placeholder="format"
//               onChange={this.updateInput}
//               value={this.state.format}
//             />
//             <input
//               type="text"
//               name="marque"
//               placeholder="marque"
//               onChange={this.updateInput}
//               value={this.state.marque}
//             />
//             <input
//               type="text"
//               name="matériaux"
//               placeholder="matériaux"
//               onChange={this.updateInput}
//               value={this.state.matériaux}
//             />
//             <div>
//               <input
//                 type="text"
//                 name="nom"
//                 placeholder="nom"
//                 onChange={this.updateInput}
//                 value={this.state.nom}
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="socket"
//                 placeholder="socket"
//                 onChange={this.updateInput}
//                 value={this.state.socket}
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="type"
//                 placeholder="type"
//                 onChange={this.updateInput}
//                 value={this.state.type}
//               />
//             </div>
//           </div>
//           <div>
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default WC;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const firebase = require("firebase");
require("firebase/firestore");

class WC extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('Cooling');
    this.unsubscribe = null;
    this.state = {
      WC: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const WC = [];
    querySnapshot.forEach((doc) => {
      const { title, bruit, format, marque, matériaux, nom, socket, type } = doc.data();
      WC.push({
        key: doc.id,
        doc, 
        title,
        bruit,
        format,
        marque,
        matériaux,
        nom,
        socket,
        type
      });
    });
    this.setState({
      WC
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
              WC LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add Board</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Type</th>
                  <th>Marque</th>
                  <th>Socket</th>
                  <th>Matériaux</th>
                  <th>Bruit</th>
                  <th>Format</th>
                </tr>
              </thead>
              <tbody>
                {this.state.WC.map(WC =>
                  <tr>
                    <td><Link to={`/show/${WC.key}`}>{WC.nom}</Link></td>
                    <td>{WC.type}</td>
                    <td>{WC.marque}</td>
                    <td>{WC.socket}</td>
                    <td>{WC.matériaux}</td>
                    <td>{WC.bruit}</td>
                    <td>{WC.format}</td>
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

export default WC;
