import React from "react";
import { Card , CardDeck, Button } from "react-bootstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";

const firebase = require("firebase");
require("firebase/firestore");

class SSD extends React.Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection("SSD's");
        this.unsubscribe = null;
        this.state = {
            SSD: []
    };
    }
    
    onCollectionUpdate = (querySnapshot) => {
        const SSD = [];
        querySnapshot.forEach((doc) => {
          const { img, capacité, connectique, format, lecture, écriture, marque, nom } = doc.data();
            SSD.push({
                key: doc.id,
                doc,
                capacité,
                connectique,
                format,
                lecture,
                écriture,
                marque,
                nom,
                img
            });
        });
        this.setState({
          SSD
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
                
                {this.state.SSD.map(SSD =>
                    <div className="pt-5 pl-2 pb-4">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={SSD.img} />
                        <Card.Body>
                            <Card.Title><h4>Nom : {SSD.nom}</h4></Card.Title>
                            <Card.Text>
                                    <li><b>Format</b> {SSD.format}</li>
                                    <li><b>Lecture : </b> {SSD.lecture}</li>
                                    <li><b>Ecriture : </b> {SSD.écriture}</li>
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

export default SSD;