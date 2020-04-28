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
      cooling: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const cooling = [];
    querySnapshot.forEach((doc) => {
      const { title, bruit, format, matériaux, marque, nom, socket, type, img } = doc.data();
      cooling.push({
        key: doc.id,
        doc, 
        title,
        bruit,
        format,
        matériaux,
        marque,
        nom, 
        socket,
        type,
        img
      });
    });
    this.setState({
      cooling
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
              Cooling LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add Board</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Marque</th>
                  <th>Matériaux</th>
                  <th>Bruit</th>
                  <th>Format</th>
                  <th>Socket</th>
                  <th>Type</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {this.state.cooling.map(cooling =>
                  <tr>
                    <td><Link to={`/show/${cooling.key}`}>{cooling.nom}</Link></td>
                    <td>{cooling.marque}</td>
                    <td>{cooling.matériaux}</td>
                    <td>{cooling.bruit}</td>
                    <td>{cooling.format}</td>
                    <td>{cooling.socket}</td>
                    <td>{cooling.type} </td>
                    <td>{cooling.img}</td>
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
