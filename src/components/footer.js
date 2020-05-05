import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
    render() {
        return(
            <footer className="bg-dark">
                <div className="container">
                    <div className="row gutter-3">
                    <Link to="/" className="col-5 col-md-2">
                        <div><img src="https://i.imgur.com/9kR20Nx.png" alt="Logo" /></div>
                    </Link>
                    <div className="col-12 col-md-6 text-white">
                        <p className="mb-4">Une prestation de qualité, pour des clients satisfaits ! Pas besoin de plus quand on peut tout trouver sur HardShop !</p>
                        <div className="row">
                        <div className="col">
                            <ul className="list-group list-group-minimal">
                                <li className="list-group-item"><div href="https://www.facebook.com/geeke.tonerd.9" className="link">FaceBook</div></li>
                                <li className="list-group-item"><div href="https://www.instagram.com/geek2_nerd/?hl=fr" className="link">Instagram</div></li>
                                <li className="list-group-item"><div href="https://twitter.com/Geek2Nerd1" className="link">Twitter</div></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-group list-group-minimal">
                                <li className="list-group-item"><div href="https://discord.gg/XZES3TW"className="link">Le Discord</div></li>
                                <li className="list-group-item"><div className="link">Qui sommes nous ?</div></li>
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