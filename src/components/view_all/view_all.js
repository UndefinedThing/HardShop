import React from "react";
import Header from "../header";
import Footer from "../footer";

class View_all extends React.Component {
    render() {
        return(
            <div>
                <Header />
                    <div>
                        <div className="col-md-4 col-lg-4">
                            <div className="card stacked text-center">
                                <div className="card-body">
                                    <i className="icon-link2 icon-boxed icon-boxed-lg mb-3 bg-blue text-white" />
                                    <h3 className="card-title mb-1">Processeur</h3>
                                    <p className="card-text mb-2">Safely store your ETH and other Ethereum crypto-assets.</p>
                                    <a href="/CPU" className="eyebrow link text-blue">Voir Plus</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="card stacked text-center">
                            <div className="card-body">
                                <i className="icon-command icon-boxed icon-boxed-lg mb-3 bg-orange text-white" />
                                <h3 className="card-title mb-1">Hosting</h3>
                                <p className="card-text mb-2">Safely store your ETH and other Ethereum crypto-assets.</p>
                                <a href="/" className="eyebrow link text-orange">Read More</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="card stacked text-center">
                            <div className="card-body">
                                <i className="icon-user2 icon-boxed icon-boxed-lg mb-3 bg-purple text-white" />
                                <h3 className="card-title mb-1">Accounts</h3>
                                <p className="card-text mb-2">Safely store your ETH and other Ethereum crypto-assets.</p>
                                <a href="/" className="eyebrow link text-purple">Read More</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="card stacked text-center">
                            <div className="card-body">
                                <i className="icon-at-sign icon-boxed icon-boxed-lg mb-3 bg-green text-white" />
                                <h3 className="card-title mb-1">Email</h3>
                                <p className="card-text mb-2">Safely store your ETH and other Ethereum crypto-assets.</p>
                                <a href="/" className="eyebrow link text-green">Read More</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="card stacked text-center">
                            <div className="card-body">
                                <i className="icon-credit-card2 icon-boxed icon-boxed-lg mb-3 bg-red text-white" />
                                <h3 className="card-title mb-1">Payments</h3>
                                <p className="card-text mb-2">Safely store your ETH and other Ethereum crypto-assets.</p>
                                <a href="/" className="eyebrow link text-red">Read More</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="card stacked text-center">
                            <div className="card-body">
                                <i className="icon-award icon-boxed icon-boxed-lg mb-3 bg-pink text-white" />
                                <h3 className="card-title mb-1">FAQs</h3>
                                <p className="card-text mb-2">Safely store your ETH and other Ethereum crypto-assets.</p>
                                <a href="/" className="eyebrow link text-pink">Read More</a>
                            </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default View_all;