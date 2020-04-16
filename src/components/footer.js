import React, { Component } from "react";
import hardware from "../Images/hardware.jpg";
class Footer extends Component {
    render() {
        return(
            <footer className="bg-dark">
                <div className="container">
                    <div className="row gutter-3">
                    <div className="col-12 col-md-2">
                        <a href="/"><img src={hardware} alt="Logo" /></a>
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
                    </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;