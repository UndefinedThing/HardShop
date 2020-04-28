import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const firebase = require("firebase");
require("firebase/firestore");

class RAM extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("RAM");
    this.unsubscribe = null;
    this.state = {
      mémoire: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const mémoire = [];
    querySnapshot.forEach((doc) => {
      const { title, capacité, fréquence, img, latence, marque, nom, quantité } = doc.data();
      mémoire.push({
        key: doc.id,
        doc, 
        title,
        capacité,
        fréquence,
        img,
        latence,
        marque,
        nom,
        quantité
      });
    });
    this.setState({
      mémoire
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
              RAM LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add Board</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Marque</th>
                  <th>Capacité</th>
                  <th>Fréquence</th>
                  <th>Quantité</th>
                  <th>Latence</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mémoire.map(mémoire =>
                  <tr>
                    <td><Link to={`/show/${mémoire.key}`}>{mémoire.nom}</Link></td>
                    <td>{mémoire.marque}</td>
                    <td>{mémoire.capacité}</td>
                    <td>{mémoire.fréquence}</td>
                    <td>{mémoire.quantité}</td>
                    <td>{mémoire.latence}</td>
                    <td>{mémoire.img}</td>
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

export default RAM;
