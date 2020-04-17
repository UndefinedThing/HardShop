import React from "react";
import { Card , CardDeck, Button } from "react-bootstrap";
import Header from "../../components/header";

const firebase = require("firebase");
require("firebase/firestore");

class Carte_Mère extends React.Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection("MotherBoard");
        this.unsubscribe = null;
        this.state = {
            Carte_Mère: []
    };
    }
    
    onCollectionUpdate = (querySnapshot) => {
        const Carte_Mère = [];
        querySnapshot.forEach((doc) => {
          const { img, chipset, constructeur, format, fréquence_mémoire, nom, proco_compatible, socket } = doc.data();
            Carte_Mère.push({
                key: doc.id,
                doc,
                chipset,
                constructeur,
                format,
                fréquence_mémoire,
                nom,
                proco_compatible,
                socket,
                img

            });
        });
        this.setState({
          Carte_Mère
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
                
                {this.state.Carte_Mère.map(Carte_Mère =>
                    <div className="pt-5 pl-2">
                        <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={Carte_Mère.img} />
                        <Card.Body>
                            <Card.Title><h4>Nom : {Carte_Mère.nom}</h4></Card.Title>
                            <Card.Text>
                                <ul>
                                    <li><b>Chipset :</b> {Carte_Mère.chipset}</li>
                                    <li><b>Processeurs compatibles :</b> {Carte_Mère.proco_compatible}</li>
                                    <li><b>Socket :</b> {Carte_Mère.socket}</li>
                                </ul>
                            </Card.Text>
                            
                            <Button variant="primary">Descriptif</Button>
                        </Card.Body>
                    </Card>
                    </div>
                )}
                
            </CardDeck>
            </div>
        )
    }
}

export default Carte_Mère;