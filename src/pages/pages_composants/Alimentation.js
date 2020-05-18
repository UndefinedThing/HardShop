import React from "react";
import { Card , CardDeck, Button } from "react-bootstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./style.css";

const firebase = require("firebase");
require("firebase/firestore");

class Alim extends React.Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection("PowerSupply");
        this.unsubscribe = null;
        this.state = {
            PSU: []
        };
    }
    
    onCollectionUpdate = (querySnapshot) => {
        const PSU = [];
        querySnapshot.forEach((doc) => {
          const { img, certif, format, marque, modulaire, nom, puissance } = doc.data();
            PSU.push({
                key: doc.id,
                doc,
                certif,
                format,
                marque,
                modulaire,
                nom,
                puissance,
                img
            });
        });
        this.setState({
          PSU
       });
    }
        
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return(
            <div>
            <Header />
            <CardDeck className="grid">
                
                {this.state.PSU.map(PSU =>
                    <div className="pt-5 pl-2 pb-4">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={PSU.img} />
                        <Card.Body>
                            <Card.Title><h4>Nom : {PSU.nom}</h4></Card.Title>
                            <Card.Text>
                                    <li><b>Puissance : </b> {PSU.puissance}</li>
                                    <li><b>Format : </b> {PSU.format}</li>
                                    <li><b>Modularité : </b> {PSU.modulaire}</li>
                            </Card.Text>
                            
                            <Button variant="primary">Voir plus</Button>
                        </Card.Body>
                    </Card>
                    </div>
                )}
                
            </CardDeck>
            <Footer/>
            </div>
        )
    }
}

export default Alim;