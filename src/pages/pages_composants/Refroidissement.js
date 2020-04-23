import React from "react";
import { Card , CardDeck, Button } from "react-bootstrap";
import Header from "../../components/header";

const firebase = require("firebase");
require("firebase/firestore");

class Refroidissement extends React.Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection("Cooling");
        this.unsubscribe = null;
        this.state = {
            Refroidissement: []
    };
    }
    
    onCollectionUpdate = (querySnapshot) => {
        const Refroidissement = [];
        querySnapshot.forEach((doc) => {
          const { img, bruit, format, marque, matériaux, nom, socket, type } = doc.data();
            Refroidissement.push({
                key: doc.id,
                doc,
                bruit,
                format,
                marque,
                matériaux,
                nom,
                socket,
                type,
                img

            });
        });
        this.setState({
          Refroidissement
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
                
                {this.state.Refroidissement.map(Refroidissement =>
                    <div className="pt-5 pl-2">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Refroidissement.img} />
                        <Card.Body>
                            <Card.Title><h4>Nom : {Refroidissement.nom}</h4></Card.Title>
                            <Card.Text>
                                    <li><b>Type :</b> {Refroidissement.type}</li>
                                    <li><b>Compatible socket :</b> {Refroidissement.socket}</li>
                                    <li><b>Format :</b> {Refroidissement.format}</li>
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

export default Refroidissement;