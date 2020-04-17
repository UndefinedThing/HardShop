import React from "react";
import { Card , CardDeck, Button } from "react-bootstrap";
import Header from "../../components/header";

const firebase = require("firebase");
require("firebase/firestore");

class Memoire extends React.Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection("RAM");
        this.unsubscribe = null;
        this.state = {
            Memoire: []
    };
    }
    
    onCollectionUpdate = (querySnapshot) => {
        const Memoire = [];
        querySnapshot.forEach((doc) => {
          const { img, capacité, fréquence, latence, marque, nom, quantité } = doc.data();
            Memoire.push({
                key: doc.id,
                doc,
                capacité,
                fréquence,
                latence,
                marque,
                nom,
                quantité,
                img

            });
        });
        this.setState({
          Memoire
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
                {this.state.Memoire.map(Memoire =>
                    <div className="pt-5 pl-2">
                        <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={Memoire.img} />
                        <Card.Body>
                            <Card.Title><h4>Nom : {Memoire.nom}</h4></Card.Title>
                            <Card.Text>
                                    <li><b>Quantité :</b> {Memoire.quantité}</li>
                                    <li><b>Fréquence :</b> {Memoire.fréquence}</li>
                                    <li><b>Capacité :</b> {Memoire.capacité}</li>
                            </Card.Text>
                            
                            <Button variant="primary">Voir plus</Button>
                        </Card.Body>
                    </Card>
                    </div>
                )}
                
            </CardDeck>
            </div>
        )
    }
}

export default Memoire;