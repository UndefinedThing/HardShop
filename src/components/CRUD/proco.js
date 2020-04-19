import React, { Component } from "react";
import { Link } from "react-router-dom";

const firebase = require("firebase");
require("firebase/firestore");

class Proco extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("CPU's");
    this.unsubscribe = null;
    this.state = {
      CPU: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const CPU = [];
    querySnapshot.forEach((doc) => {
      const {
        title,
        architecture,
        cache,
        chipset,
        chipset_graphique,
        fréquence,
        fréquence_boost,
        nb_coeur,
        nb_threads,
        nom,
        overclocking,
        socket,
        type,
      } = doc.data();
      CPU.push({
        key: doc.id,
        doc,
        title,
        architecture,
        cache,
        chipset,
        chipset_graphique,
        fréquence,
        fréquence_boost,
        nb_coeur,
        nb_threads,
        nom,
        overclocking,
        socket,
        type,
      });
    });
    this.setState({
      CPU,
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
            <h3 class="panel-title">CPU LIST</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/create">Add Board</Link>
            </h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>NB Coeur</th>
                  <th>NB Threads</th>
                  <th>Fréquence</th>
                  <th>Fréquence Boost</th>
                  <th>Cache</th>
                  <th>Socket</th>
                  <th>Architecture</th>
                  <th>Chipset</th>
                  <th>Chipset Graphique</th>
                  <th>Overclocking</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {this.state.CPU.map((CPU) => (
                  <tr>
                    <td>
                      <Link to={`/show/${CPU.key}`}>{CPU.nom}</Link>
                    </td>
                    <td>{CPU.nb_coeur}</td>
                    <td>{CPU.nb_threads}</td>
                    <td>{CPU.fréquence}</td>
                    <td>{CPU.fréquence_boost}</td>
                    <td>{CPU.cache}</td>
                    <td>{CPU.socket}</td>
                    <td>{CPU.architecture}</td>
                    <td>{CPU.chipset}</td>
                    <td>{CPU.chipset_graphique}</td>
                    <td>{CPU.overclocking}</td>
                    <td>{CPU.type}</td>
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

export default Proco;
