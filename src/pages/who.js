import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

class Who extends React.Component {
    render() {
        return(
            <div>
                <Header />
                    <div>
                        <h1>Qui sommes-nous ?</h1>
                        <p></p>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default Who;