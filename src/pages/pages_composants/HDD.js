import React from "react";
import { Card , CardDeck, Button } from "react-bootstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";

const firebase = require("firebase");
require("firebase/firestore");

class DisqueDur extends React.Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection("HDD's");
        this.unsubscribe = null;
        this.state = {
            DisqueDur: []
    };
    }
    
    onCollectionUpdate = (querySnapshot) => {
        const DisqueDur = [];
        querySnapshot.forEach((doc) => {
          const { img, RPM, capa, format, marque, mémoire_cache, nom, transfert } = doc.data();
            DisqueDur.push({
                key: doc.id,
                doc,
                RPM,
                capa,
                format,
                marque,
                mémoire_cache,
                nom,
                transfert,
                img

            });
        });
        this.setState({
          DisqueDur
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
                
                {this.state.DisqueDur.map(DisqueDur =>
                    <div className="pt-5 pl-5 pb-4" key={DisqueDur.id}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={DisqueDur.img} />
                        <Card.Body>
                            <Card.Title><h4>Nom : {DisqueDur.nom}</h4></Card.Title>
                            <Card.Text>
                                    <li><b>Capacité : </b> {DisqueDur.capa}</li>
                                    <li><b>RPM : </b> {DisqueDur.RPM}</li>
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

export default DisqueDur;