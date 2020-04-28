import React from "react";
import { Card , CardDeck, Button } from "react-bootstrap";
import Header from "../../components/header";
import Footer from "../../components/footer";

const firebase = require("firebase");
require("firebase/firestore");

class CarteMère extends React.Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection("MotherBoard");
        this.unsubscribe = null;
        this.state = {
            CarteMère: []
    };
    }
    
    onCollectionUpdate = (querySnapshot) => {
        const CarteMère = [];
        querySnapshot.forEach((doc) => {
          const { img, chipset, constructeur, format, fréquence_mémoire, nom, proco_compatible, socket } = doc.data();
            CarteMère.push({
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
          CarteMère
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
                
                {this.state.CarteMère.map(CarteMère =>
                    <div className="pt-5 pl-2 pb-4">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={CarteMère.img} />
                        <Card.Body>
                            <Card.Title><h4>Nom : {CarteMère.nom}</h4></Card.Title>
                            <Card.Text>
                                    <li><b>Chipset :</b> {CarteMère.chipset}</li>
                                    <li><b>Processeurs compatibles :</b> {CarteMère.proco_compatible}</li>
                                    <li><b>Socket :</b> {CarteMère.socket}</li>
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

export default CarteMère;