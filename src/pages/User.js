import React from "react";
import firestore from "./firestore";

class Users extends React.Component{
    constructor() {
        super();
        this.state = {
            email: "",
            nom: "",
            prénom:"",
            password:""
        };
    }
    addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection("users").add({
            email: this.state.email,
            nom: this.state.nom,
            prénom: this.state.prénom,
            password: this.state.password
        });
        this.setState({
            email: "",
            nom: "",
            prénom: "",
            password: ""
        });
    };

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        return (
            <form onSubmit={this.addUser}>
                <input
                    type="text"
                    name="nom"
                    placeholder="nom"
                    onChange={this.updateInput}
                    value={this.state.nom}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={this.updateInput}
                    value={this.state.email}
                />
                <input
                    type="text"
                    name="prénom"
                    placeholder="prénom"
                    onChange={this.updateInput}
                    value={this.state.prénom}
                />
                <input
                    type="text"
                    name="password"
                    placeholder="password"
                    onChange={this.updateInput}
                    value={this.state.password}
                />
            </form>
        )
    }
}

export default Users;

