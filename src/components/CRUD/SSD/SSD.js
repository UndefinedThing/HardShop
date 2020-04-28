import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const firebase = require("firebase");
require("firebase/firestore");

class SSD extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("RAM");
    this.unsubscribe = null;
    this.state = {
      solid: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const solid = [];
    querySnapshot.forEach((doc) => {
      const { title, capacité, connectique, format, img, lecture, marque, nom, écriture } = doc.data();
      solid.push({
        key: doc.id,
        doc, 
        title,
        capacité,
        connectique,
        format,
        img, 
        lecture,
        marque,
        nom, 
        écriture
      });
    });
    this.setState({
      solid
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
              SSD LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add Board</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Capacité</th>
                  <th>Lecture</th>
                  <th>Ecriture</th>
                  <th>Marque</th>
                  <th>Connectique</th>
                  <th>Format</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {this.state.solid.map(solid =>
                  <tr>
                    <td><Link to={`/show/${solid.key}`}>{solid.nom}</Link></td>
                    <td>{solid.capacité}</td>
                    <td>{solid.capacité}</td>
                    <td>{solid.lecture}</td>
                    <td>{solid.écriture}</td>
                    <td>{solid.marque}</td>
                    <td>{solid.connectique}</td>
                    <td>{solid.format}</td>
                    <td>{solid.img}</td>
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

export default SSD;

