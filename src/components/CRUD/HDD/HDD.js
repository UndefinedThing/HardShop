import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const firebase = require("firebase");
require("firebase/firestore");

class HardDrive extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("HDD's");
    this.unsubscribe = null;
    this.state = {
      HDD: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const HDD = [];
    querySnapshot.forEach((doc) => {
      const { title, RPM, capa, format, img, marque, mémoire_cache, nom, transfert } = doc.data();
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
      HDD
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
                  <th>Marque</th>
                  <th>RPM</th>
                  <th>Capacité</th>
                  <th>Format</th>
                  <th>Mémoire Cache</th>
                  <th>Transfert</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {this.state.HDD.map(HDD =>
                  <tr>
                    <td><Link to={`/show/${HDD.key}`}>{HDD.nom}</Link></td>
                    <td>{HDD.marque}</td>
                    <td>{HDD.RPM}</td>
                    <td>{HDD.capa}</td>
                    <td>{HDD.format}</td>
                    <td>{HDD.mémoire_cache}</td>
                    <td>{HDD.transfert} </td>
                    <td>{HDD.img}</td>
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

export default HardDrive;

