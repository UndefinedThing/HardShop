import React from "react";
import Header from "../components/view_all/header";
import Footer from "../components/view_all/footer";

class Viewall extends React.Component {
    render() {
        return(
            <div>
                <Header />
                    <section className="overlay">
                        <div className="container overlay-item-top">
                            <div className="row gutter-2">
                            <div className="col-12">
                                <div className="card">
                                <div className="card-body py-2">
                                    <div className="row align-items-center">
                                    <div className="col-8 col-md-10">
                                        <input type="text" className="form-control form-control-minimal" placeholder="Start typing here ..." aria-label="Search" />
                                    </div>
                                    <div className="col-4 col-md-2 text-right">
                                        <button type="button" className="btn btn-primary btn-lg btn-ico btn-rounded"><i className="icon-search2 fs-22" /></button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card stacked">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                    <div className="col-md-2 text-center">
                                        <i className="icon-link2 icon-boxed icon-boxed-lg bg-blue text-white" />
                                    </div>
                                    <div className="col">
                                        <h3 className="card-title mt-2 mt-md-0 text-center text-md-left mb-2">Domains</h3>
                                        <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <ul className="list-group list-group-minimal">
                                            <li className="list-group-item"><a href className="link">Adding DNS records and templates</a></li>
                                            <li className="list-group-item"><a href className="link">Adding POP or IMAP server setting to an email client</a></li>
                                            <li className="list-group-item"><a href className="link">Changing nameservers for DNS management</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <ul className="list-group list-group-minimal">
                                            <li className="list-group-item"><a href className="link">Adding DNS records and templates</a></li>
                                            <li className="list-group-item"><a href className="link">Adding POP or IMAP server setting to an email client</a></li>
                                            <li className="list-group-item"><a href className="text-blue eyebrow action">View All (43)</a></li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card stacked">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                    <div className="col-md-2 text-center">
                                        <i className="icon-command icon-boxed icon-boxed-lg bg-orange text-white" />
                                    </div>
                                    <div className="col">
                                        <h3 className="card-title mt-2 mt-md-0 text-center text-md-left mb-2">Hosting</h3>
                                        <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <ul className="list-group list-group-minimal">
                                            <li className="list-group-item"><a href className="link">Adding DNS records and templates</a></li>
                                            <li className="list-group-item"><a href className="link">Adding POP or IMAP server setting to an email client</a></li>
                                            <li className="list-group-item"><a href className="link">Changing nameservers for DNS management</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <ul className="list-group list-group-minimal">
                                            <li className="list-group-item"><a href className="link">Adding DNS records and templates</a></li>
                                            <li className="list-group-item"><a href className="link">Adding POP or IMAP server setting to an email client</a></li>
                                            <li className="list-group-item"><a href className="text-orange eyebrow action">View All (43)</a></li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card stacked">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                    <div className="col-md-2 text-center">
                                        <i className="icon-user2 icon-boxed icon-boxed-lg bg-purple text-white" />
                                    </div>
                                    <div className="col">
                                        <h3 className="card-title mt-2 mt-md-0 text-center text-md-left mb-2">Accounts</h3>
                                        <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <ul className="list-group list-group-minimal">
                                            <li className="list-group-item"><a href className="link">Adding DNS records and templates</a></li>
                                            <li className="list-group-item"><a href className="link">Adding POP or IMAP server setting to an email client</a></li>
                                            <li className="list-group-item"><a href className="link">Changing nameservers for DNS management</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <ul className="list-group list-group-minimal">
                                            <li className="list-group-item"><a href className="link">Adding DNS records and templates</a></li>
                                            <li className="list-group-item"><a href className="link">Adding POP or IMAP server setting to an email client</a></li>
                                            <li className="list-group-item"><a href className="text-purple eyebrow action">View All (43)</a></li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card stacked">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                    <div className="col-md-2 text-center">
                                        <i className="icon-at-sign icon-boxed icon-boxed-lg bg-green text-white" />
                                    </div>
                                    <div className="col">
                                        <h3 className="card-title mt-2 mt-md-0 text-center text-md-left mb-2">Email</h3>
                                        <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <ul className="list-group list-group-minimal">
                                            <li className="list-group-item"><a href className="link">Adding DNS records and templates</a></li>
                                            <li className="list-group-item"><a href className="link">Adding POP or IMAP server setting to an email client</a></li>
                                            <li className="list-group-item"><a href className="link">Changing nameservers for DNS management</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <ul className="list-group list-group-minimal">
                                            <li className="list-group-item"><a href className="link">Adding DNS records and templates</a></li>
                                            <li className="list-group-item"><a href className="link">Adding POP or IMAP server setting to an email client</a></li>
                                            <li className="list-group-item"><a href className="text-green eyebrow action">View All (43)</a></li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                <Footer/>
            </div>
        )
    }
}

export default Viewall;