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
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {this.state.Case.map(Case =>
                  <tr>
                    <td><Link to={`/show/${Case.key}`}>{Case.nom}</Link></td>
                    <td>{Case.RGB}</td>
                    <td>{Case.alim_inclus}</td>
                    <td>{Case.couleur}</td>
                    <td>{Case.façade_latérale}</td>
                    <td>{Case.format}</td>
                    <td>{Case.ventilateur} </td>
                    <td>{Case.img}</td>
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
