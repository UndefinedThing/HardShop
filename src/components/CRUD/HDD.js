// import React from "../../../node_modules/react";

// const firebase = require("../../../node_modules/firebase");
// require("../../../node_modules/firebase/firestore");

// class HardDrive extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       RPM: Number,
//       capa: "",
//       format: "",
//       interface: "",
//       marque: "",
//       mémoire_cache: "",
//       nom: "",
//       transfert: "",
//     };
//   }
//   addHardDrive = (e) => {
//     e.prevent.default();
//     const db = firebase.firestore();
//     db.settings({
//       timestampsInSnapshots: true,
//     });
//     const harddriveRef = db.collection("HDD's").add({
//       RPM: this.state.RPM,
//       capa: this.state.capa,
//       format: this.state.format,
//       interface: this.state.interface,
//       marque: this.state.marque,
//       mémoire_cache: this.state.mémoire_cache,
//       nom: this.state.nom,
//       transfert: this.state.transfert,
//     });
//     this.setState({
//       RPM: Boolean,
//       capa: "",
//       format: "",
//       interface: "",
//       marque: "",
//       mémoire_cache: "",
//       nom: "",
//       transfert: "",
//     });
//     console.log(harddriveRef);
//   };

//   updateInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.addHardDrive}>
//           <div>
//             <input
//               type="text"
//               name="RPM"
//               placeholder="RPM"
//               value={this.state.RPM}
//               onChange={this.updateInput}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="Capacité"
//               placeholder="Capacité"
//               value={this.state.capa}
//               onChange={this.updateInput}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="Format"
//               placeholder="Format"
//               value={this.state.format}
//               onChange={this.updateInput}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="Interface"
//               placeholder="Interface"
//               value={this.state.interface}
//               onChange={this.updateInput}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="Marque"
//               placeholder="Marque"
//               value={this.state.marque}
//               onChange={this.updateInput}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="Mémoire Cache"
//               placeholder="Mémoire Cache"
//               value={this.state.mémoire_cache}
//               onChange={this.updateInput}
//             />
//           </div>
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
//               name="Transfert"
//               placeholder="Transfert"
//               value={this.state.transfert}
//               onChange={this.updateInput}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default HardDrive;

import React, { Component } from "react";
import { Link } from "react-router-dom";

const firebase = require("firebase");
require("firebase/firestore");

class HardDrive extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("HDD's");
    this.unsubscribe = null;
    this.state = {
      HDD: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const HDD = [];
    querySnapshot.forEach((doc) => {
      const {
        title,
        RPM,
        capa,
        format,
        img,
        marque,
        mémoire_cache,
        nom,
        transfert
      } = doc.data();
      HDD.push({
        key: doc.id,
        doc,
        title,
        RPM,
        capa,
        format,
        img,
        marque,
        mémoire_cache,
        nom,
        transfert
      });
    });
    this.setState({
      HDD,
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
            <h3 class="panel-title">HDD LIST</h3>
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
                  <th>Format</th>
                  <th>Capacité</th>
                  <th>Mémoire Cache</th>
                  <th>Transfert</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {this.state.HDD.map((HDD) => (
                  <tr>
                    <td>
                      <Link to={`/show/${HDD.key}`}>
                        {HDD.nom}
                      </Link>
                    </td>
                    <td>{HDD.marque}</td>
                    <td>{HDD.format}</td>
                    <td>{HDD.capa}</td>
                    <td>{HDD.mémoire_cache}</td>
                    <td>{HDD.transfert}</td>
                    <td>{HDD.img}</td>
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

export default HardDrive;