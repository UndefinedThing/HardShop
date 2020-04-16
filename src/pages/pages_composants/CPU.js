import React from "react";
import { Card , CardDeck, Button } from "react-bootstrap";
import Header from "../../components/header";

const firebase = require("firebase");
require("firebase/firestore");

class Processeur extends React.Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection("CPU's");
        this.unsubscribe = null;
        this.state = {
            Proco: []
    };
    }
    
    onCollectionUpdate = (querySnapshot) => {
        const Proco = [];
        querySnapshot.forEach((doc) => {
          const { architecture, cache, chipset, chipset_graphique, fréquence, fréquence_boost, nb_coeur, nb_threads, nom, overclocking, socket, type, img } = doc.data();
            Proco.push({
                key: doc.id,
                doc,
                nom,
                nb_coeur,
                nb_threads,
                fréquence,
                fréquence_boost,
                cache,
                architecture,
                chipset,
                chipset_graphique,
                socket,
                overclocking,
                type,
                img

            });
        });
        this.setState({
          Proco
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
                
                {this.state.Proco.map(Proco =>
                    <div className="pt-5 pl-5">
                        <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={Proco.img} />
                        <Card.Body>
                            <Card.Title><h4>Nom : {Proco.nom}</h4></Card.Title>
                            <Card.Text>
                                {Proco.nb_coeur} Coeurs ({Proco.nb_threads} threads)
                                Fréquence : {Proco.fréquence}  ({Proco.fréquence_boost} en Boost)
                            </Card.Text>
                            
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                )}
                
            </CardDeck>
            </div>
        )
    }
}

export default Processeur;