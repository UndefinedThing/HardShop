import React from "react";
import { Card , CardDeck, Button } from "react-bootstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";

const firebase = require("firebase");
require("firebase/firestore");

class Boîtier extends React.Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection("Case");
        this.unsubscribe = null;
        this.state = {
            Boîtier: []
    };
    }
    
    onCollectionUpdate = (querySnapshot) => {
        const Boîtier = [];
        querySnapshot.forEach((doc) => {
          const { img, RGB, alim_inclus, couleur, façade_latérale, format, ventilateur, nom } = doc.data();
            Boîtier.push({
                key: doc.id,
                doc,
                RGB,
                alim_inclus,
                couleur,
                façade_latérale,
                format,
                ventilateur,
                nom,
                img

            });
        });
        this.setState({
          Boîtier
       });
    }
        
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }
    
    render() {
        return(
            <div>
            <Header />
                <CardDeck>
                    
                    {this.state.Boîtier.map(Boîtier =>
                        <div className="pt-5 pl-2">
                            <Card style={{ width: '12rem' }}>
                            <Card.Img variant="top" src={Boîtier.img} />
                            <Card.Body>
                                <Card.Title><h4>Nom : {Boîtier.nom}</h4></Card.Title>
                                <Card.Text>
                                        <li><b>Boîtier au format :</b> {Boîtier.format}</li>
                                        <li><b>NB de ventilateur :</b> {Boîtier.ventilateur}</li>
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

export default Boîtier;