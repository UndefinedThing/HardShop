import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const firebase = require("firebase");
require("firebase/firestore");

class CPU extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("CPU's");
    this.unsubscribe = null;
    this.state = {
      proco: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const proco = [];
    querySnapshot.forEach((doc) => {
      const { title, architecture, cache, chipset, chipset_graphique, fréquence, fréquence_boost, img, nb_coeur, nb_threads, nom, overclocking, socket, type } = doc.data();
      proco.push({
        key: doc.id,
        doc, 
        title,
        architecture,
        cache,
        chipset,
        chipset_graphique,
        fréquence,
        fréquence_boost,
        img,
        nb_coeur,
        nb_threads,
        nom,
        overclocking,
        socket,
        type
      });
    });
    this.setState({
      proco
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
              Proco LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add Board</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Nombre Coeur</th>
                  <th>Nombre Threads</th>
                  <th>Fréquence</th>
                  <th>Fréquence Boost</th>
                  <th>Architecture</th>
                  <th>Socket</th>
                  <th>Chipset</th>
                  <th>Chipset Graphique</th>
                  <th>Cache</th>
                  <th>Type</th>
                  <th>Overclocking</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {this.state.proco.map(proco =>
                  <tr>
                    <td><Link to={`/show/${proco.key}`}>{proco.nom}</Link></td>
                    <td>{proco.nb_coeur}</td>
                    <td>{proco.nb_threads}</td>
                    <td>{proco.fréquence}</td>
                    <td>{proco.fréquence_boost}</td>
                    <td>{proco.architecture}</td>
                    <td>{proco.socket}</td>
                    <td>{proco.chipset}</td>
                    <td>{proco.chipset_graphique}</td>
                    <td>{proco.cache}</td>
                    <td>{proco.type}</td>
                    <td>{proco.overclocking}</td>
                    <td>{proco.img}</td>
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

export default CPU;
