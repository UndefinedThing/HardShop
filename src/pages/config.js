import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SearchField from "react-search-field";

class Config extends React.Component {

    render() {
        return(
            <div>
                <Header/>
                    <div><h1>Une Config ?</h1></div>
                        <div>Vous ne savez pas par où commencer pour faire une configuration ? Pas de soucis nous sommes la pour vous aider</div>
                        
                <Footer/>
            </div>
        )
    }
}

export default Config;