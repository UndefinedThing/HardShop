import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const firebase = require("firebase");
require("firebase/firestore");

class PSU extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("PowerSupply");
    this.unsubscribe = null;
    this.state = {
      powersupply: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const powersupply = [];
    querySnapshot.forEach((doc) => {
      const { title, certif, format, img, marque, modulaire, nom, puissance } = doc.data();
      powersupply.push({
        key: doc.id,
        doc, 
        title,
        certif,
        format,
        img,
        marque,
        modulaire,
        nom,
        puissance
      });
    });
    this.setState({
      powersupply
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
              HDD LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add Board</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Puissance</th>
                  <th>Certification</th>
                  <th>Marque</th>
                  <th>Modularité</th>
                  <th>Format</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {this.state.powersupply.map(powersupply =>
                  <tr>
                    <td><Link to={`/show/${powersupply.key}`}>{powersupply.nom}</Link></td>
                    <td>{powersupply.puissance}</td>
                    <td>{powersupply.certif}</td>
                    <td>{powersupply.marque}</td>
                    <td>{powersupply.modulaire}</td>
                    <td>{powersupply.format}</td>
                    <td>{powersupply.img}</td>
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

export default PSU;