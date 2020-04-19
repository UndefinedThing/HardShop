import React, { Component } from "react";
import { Link } from "react-router-dom";

const firebase = require("firebase");
require("firebase/firestore");

class MB extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("MotherBoard");
    this.unsubscribe = null;
    this.state = {
      motherboard: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const motherboard = [];
    querySnapshot.forEach((doc) => {
      const {
        title,
        chipset,
        constructeur,
        format,
        fréquence_mémoire,
        nom,
        proco_compatible,
        socket,
      } = doc.data();
      motherboard.push({
        key: doc.id,
        doc,
        title,
        chipset,
        constructeur,
        format,
        fréquence_mémoire,
        nom,
        proco_compatible,
        socket,
      });
    });
    this.setState({
      motherboard,
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
            <h3 class="panel-title">MotherBoard LIST</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/create">Add Board</Link>
            </h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Constructeur</th>
                  <th>Format</th>
                  <th>Fréquence Mémoire</th>
                  <th>Chipset</th>
                  <th>Socket</th>
                  <th>Proco Compatible</th>
                </tr>
              </thead>
              <tbody>
                {this.state.motherboard.map((motherboard) => (
                  <tr>
                    <td>
                      <Link to={`/show/${motherboard.key}`}>
                        {motherboard.nom}
                      </Link>
                    </td>
                    <td>{motherboard.constructeur}</td>
                    <td>{motherboard.format}</td>
                    <td>{motherboard.fréquence_mémoire}</td>
                    <td>{motherboard.chipset}</td>
                    <td>{motherboard.socket}</td>
                    <td>{motherboard.proco_compatible}</td>
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

export default MB;
