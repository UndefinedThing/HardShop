import React, { Component } from "react";

class Footer extends Component {
    render() {
        return(
            <footer className="bg-dark">
                <div className="container">
                    <div className="row gutter-3">
                    <div className="col-12 col-md-2">
                        <a href="/"><img src="../assets/images/logo-white.svg" alt="Logo" /></a>
                    </div>
                    <div className="col-12 col-md-6 text-white">
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="row">
                        <div className="col">
                            <ul className="list-group list-group-minimal">
                            <li className="list-group-item"><a href="/" className="link">Product Help</a></li>
                            <li className="list-group-item"><a href="/" className="link">Training Videos</a></li>
                            <li className="list-group-item"><a href="/" className="link">Integrations</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-group list-group-minimal">
                            <li className="list-group-item"><a href className="link">REST API</a></li>
                            <li className="list-group-item"><a href className="link">Corporate</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 ml-auto text-md-right">
                        <div className="dropdown">
                        <button className="btn btn-inverted btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            English
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/">French</a>
                            <a className="dropdown-item" href="/">German</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;